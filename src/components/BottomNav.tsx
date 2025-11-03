import { NavLink } from "react-router-dom";
import { Home, Target, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/contexts/I18nContext";

export const BottomNav = () => {
  const { t } = useI18n();
  const base = "flex flex-col items-center justify-center gap-1 text-xs";
  const active = "text-primary";
  const inactive = "text-muted-foreground";

  return (
    <nav
      className={cn(
        "fixed bottom-0 inset-x-0",
        // Fondo SOLIDO (sin /opacity ni blur)
        "bg-background",
        // Borde y sombra
        "border-t border-border shadow-lg",
        // En móviles con notch
        "z-50"
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="max-w-2xl mx-auto grid grid-cols-3 py-3">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            cn(base, isActive ? active : inactive, "transition-all hover:scale-105")
          }
        >
          <Home className="h-6 w-6" />
          <span className="font-bold">{t("home")}</span>
        </NavLink>

        <NavLink
          to="/goals"
          className={({ isActive }) =>
            cn(base, isActive ? active : inactive, "transition-all hover:scale-105")
          }
        >
          <Target className="h-6 w-6" />
          <span className="font-bold">{t("goals")}</span>
        </NavLink>

        <NavLink
          to="/progress"
          className={({ isActive }) =>
            cn(base, isActive ? active : inactive, "transition-all hover:scale-105")
          }
        >
          <TrendingUp className="h-6 w-6" />
          <span className="font-bold">{t("growth")}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
