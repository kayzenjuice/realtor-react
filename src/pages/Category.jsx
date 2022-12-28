import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";
import { useParams } from "react-router";

const Category = () => {
  // initialize listing variables
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);
  // grab url paramaters
  const params = useParams();

  useEffect(() => {
    // async for to return a promise
    async function fetchListings() {
      try {
        // grab all the data in the listings collections
        const listingRef = collection(db, "listings");
        // set a query to only grab listings with the type {categoryName}
        // also set a limit of how many will be called
        const q = query(
          listingRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(2)
        );
        // get docs using a query
        const querySnap = await getDocs(q);
        // remember the last visible listing
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        // create an empty array
        const listings = [];
        // now set state to rememember last visible listing
        setLastFetchedListing(lastVisible);
        // for each doc in querySnap push it to th new listing variable
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listing");
        console.log(error);
      }
    }

    fetchListings();
  }, [params.categoryName]);

  async function onFetchMorelisting() {
    try {
      // now that we have saved the last fetched listing we can start after that new variable
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("type", "==", params.categoryName),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchedListing),
        limit(1)
      );

      // set it again using querysnap.length - 1

      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      const listings = [];
      setLastFetchedListing(lastVisible);

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      // now set all listings to the new current listing state
      setListings((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch listing");
      console.log(error);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-3">
      <h1 className="text-3xl text-center mt-6 font-bold mb-6">
        {params.categoryName === "rent" ? "Places for rent" : "Places for sale"}
      </h1>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="sm:grid sm:grid-cols-2 lg-grid-cols-3 xl-:grid-cols-4 2xl:grid-cols-5">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                ></ListingItem>
              ))}
            </ul>
          </main>
          {lastFetchedListing && (
            <div className="flex justify-center items-center">
              <button
                onClick={onFetchMorelisting}
                className="bg-white px-2 py-1.5 text-gray-700 border-gray-300 mb-6 mt-6 hover:border-slate-600 rounded transition duration-150 ease-in-out"
              >
                Load more
              </button>
            </div>
          )}
        </>
      ) : (
        <p>There are no current offers</p>
      )}
    </div>
  );
};

export default Category;
