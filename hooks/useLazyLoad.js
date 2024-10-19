import { useState, useCallback, useEffect } from "react";

const useLazyLoad = (initialItems, itemsPerPage = 12) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(itemsPerPage);

  useEffect(() => {
    setDisplayedItems(initialItems.slice(0, itemsPerPage));
    setCurrentIndex(itemsPerPage);
  }, [initialItems, itemsPerPage]);

  const loadMore = useCallback(() => {
    const nextItems = initialItems.slice(
      currentIndex,
      currentIndex + itemsPerPage
    );
    setDisplayedItems((prevItems) => [...prevItems, ...nextItems]);
    setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
  }, [initialItems, currentIndex, itemsPerPage]);

  const showLess = useCallback(() => {
    setDisplayedItems(initialItems.slice(0, itemsPerPage));
    setCurrentIndex(itemsPerPage);
  }, [initialItems, itemsPerPage]);

  const hasMore = currentIndex < initialItems.length;
  const canShowLess = displayedItems.length > itemsPerPage;

  return { displayedItems, loadMore, showLess, hasMore, canShowLess };
};

export default useLazyLoad;