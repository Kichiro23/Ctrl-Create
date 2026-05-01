import { useMemo } from "react";

export function useAuth() {
  return useMemo(
    () => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      logout: () => {},
      refresh: () => {},
    }),
    [],
  );
}
