import { useEffect } from "react";

export function useTransform<S, T>(
  get: () => Promise<S>,
  transform: (data: S) => T,
  after: (data: T) => void,
  dependencies: React.DependencyList
) {
  useEffect(() => {
    let isMounted = true;
    (async () => {
      const data: S = await get();
      isMounted && after(transform(data));
    })();
    return () => {
      isMounted = false;
    };
  }, dependencies);
}
