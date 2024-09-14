'use client';

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { SpinnerGap } from "@phosphor-icons/react/dist/ssr";
import { Moon, SunDim } from "@phosphor-icons/react";
import { Button } from "@/shared/ui";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const {setTheme, resolvedTheme} = useTheme()

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <SpinnerGap size={20} className="animate-spin" />
  }

  const isDarkTheme = resolvedTheme === 'dark';

  return (
    <Button variant='ghost' size='icon' onClick={(() => setTheme(isDarkTheme ? 'light' : 'dark'))}>
      {isDarkTheme ? (
        <SunDim size={20} />
      ) : (
        <Moon size={20} />
      )}
    </Button>
  )
}