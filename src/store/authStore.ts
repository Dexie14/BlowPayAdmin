
import { AuthData } from "@/hooks/api/types";
import { createStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";



interface AuthState {
  currentUser: AuthData | null;
  setCurrentUser: (user: AuthData | null) => void;
  logout: () => void;
}

const authStore = createStore<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      currentUser: null,
      setCurrentUser: (user) => set({ currentUser: user }),
      logout: () => set({ currentUser: null }),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useAuthStore = authStore.getState;
