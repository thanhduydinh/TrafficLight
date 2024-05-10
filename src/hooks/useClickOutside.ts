import { RefObject, useEffect } from "react";

/**
 * Hook to handle click outside of the provided refs
 */
const useClickOutside = (
  refs: RefObject<HTMLElement>[],
  handler: () => void
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const isOutside = refs.every(
        (ref) => !ref.current?.contains(event.target as Node)
      );
      if (isOutside) handler();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, handler]);
};

export default useClickOutside;
