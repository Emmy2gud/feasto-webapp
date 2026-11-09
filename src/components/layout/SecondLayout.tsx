import { Outlet, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

import { MainHeader } from "./MainHeader";
import { MobileTabBar } from "./MobileTabBar";
import { OfflineNotice } from "@/components/system/OfflineNotice";
import { InstallPrompt } from "@/components/system/InstallPrompt";

/**
 * Shell for signed-in ordering screens. The tab bar is fixed on phones, so the
 * content reserves its height (plus the device safe area) at the bottom.
 */
export default function SecondLayout() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <OfflineNotice />
      <MainHeader />

      <main className="flex-1 pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <motion.div
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>

      <InstallPrompt />
      <MobileTabBar />
    </div>
  );
}
