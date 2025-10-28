"use client"

import React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  Home, 
  MessageSquare, 
  Building2, 
  FileText, 
  User, 
  Settings,
  HelpCircle,
  Newspaper,
  Scale,
  ChevronDown,
  ChevronRight,
  LogOut,
  UserCircle,
  Briefcase,
  FolderOpen,
  Earth,
  Zap,
  Info,
  Library,
  Dumbbell,
  Network,
  UserCheck
} from "lucide-react"
import { JusticeCoolLogo } from "@/components/ui/justice-cool-logo"

// Données du menu principal
const menuItems = [
  {
    title: "Menu Principal",
        items: [
          {
            title: "Chat",
            url: "/chat",
            icon: MessageSquare,
          },
          {
            title: "Organisations",
            url: "/organisations",
            icon: Earth,
          },
          {
            title: "Articles",
            url: "/articles",
            icon: FileText,
          },
          {
            title: "Offres",
            url: "/offres",
            icon: Zap,
          },
        ],
  },
]

// Données du menu secondaire (en bas à gauche)
const secondaryMenuItems = [
  {
    title: "À propos de Justice.cool",
    url: "/about",
    icon: Info,
  },
  {
    title: "Mentions Légales",
    url: "/mentions-legales",
    icon: Library,
  },
  {
    title: "Presse",
    url: "/presse",
    icon: Newspaper,
  },
  {
    title: "Professionnels de Justice",
    url: "/professionnels",
    icon: Dumbbell,
  },
]

// Données du menu utilisateur
const userMenuItems = [
  {
    title: "Espace utilisateur public",
    url: "/user/public",
    icon: UserCircle,
  },
  {
    title: "Mes dossiers en cours",
    url: "https://app.justice.cool/dossiers",
    icon: FolderOpen,
    isExternal: true,
  },
  {
    title: "Mon profil utilisateur",
    url: "/user/profil",
    icon: User,
  },
  {
    title: "Mon profil entreprise",
    url: "https://app.justice.cool/entreprise",
    icon: Briefcase,
    isExternal: true,
  },
  {
    title: "Mes organisations",
    url: "https://app.justice.cool/organisations",
    icon: Building2,
    isExternal: true,
  },
  {
    title: "Mes articles",
    url: "/user/articles",
    icon: FileText,
  },
]


// Composant principal de la sidebar
const AppSidebar = () => {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"
  
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-primary-foreground">
            <JusticeCoolLogo className="h-5 w-5" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Justice.cool</span>
              <span className="text-xs text-muted-foreground">Site Grand Public</span>
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        {/* Menu Principal */}
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems[0].items.map((item, itemIndex) => (
                <SidebarMenuItem key={itemIndex}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        {/* Menu secondaire */}
        <SidebarMenu>
          {secondaryMenuItems.map((item, itemIndex) => (
            <SidebarMenuItem key={itemIndex}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        
        {/* Séparateur */}
        <SidebarSeparator />
        
        {/* Menu utilisateur */}
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton 
                  className={`w-full ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                >
                  <Avatar className={`${isCollapsed ? 'h-6 w-6' : 'h-8 w-8'}`}>
                    <AvatarFallback className={`${isCollapsed ? 'text-xs' : 'text-sm'} bg-blue-500 text-white`}>RD</AvatarFallback>
                  </Avatar>
                  {!isCollapsed && (
                    <>
                      <div className="flex flex-col items-start min-w-0">
                        <span className="text-sm font-medium truncate">Romain DROSNE</span>
                        <span className="text-xs text-muted-foreground truncate">Fondateur Justice.cool</span>
                      </div>
                      <ChevronDown className="h-4 w-4 ml-auto" />
                    </>
                  )}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                {/* Section Dossiers */}
                <DropdownMenuLabel className="text-xs font-medium text-muted-foreground px-2 py-1.5">
                  Dossiers
                </DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://app.justice.cool/dossiers" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full"
                  >
                    <FolderOpen className="mr-2 h-4 w-4" />
                    <span>Mes dossiers en cours</span>
                    <svg className="ml-auto h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                {/* Section Compte */}
                <DropdownMenuLabel className="text-xs font-medium text-muted-foreground px-2 py-1.5">
                  Compte
                </DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <a 
                    href="/user/public" 
                    className="flex items-center w-full"
                  >
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>Espace utilisateur public</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="/user/profil" 
                    className="flex items-center w-full"
                  >
                    <UserCheck className="mr-2 h-4 w-4" />
                    <span>Mon profil utilisateur</span>
                  </a>
                </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a 
                        href="https://app.justice.cool/entreprise" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full"
                      >
                        <Network className="mr-2 h-4 w-4" />
                        <span>Mon profil entreprise</span>
                        <svg className="ml-auto h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a 
                        href="https://app.justice.cool/organisations" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full"
                      >
                        <Earth className="mr-2 h-4 w-4" />
                        <span>Mes organisations</span>
                        <svg className="ml-auto h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="/user/articles" 
                    className="flex items-center w-full"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Mes articles</span>
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Paramètres</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Se déconnecter</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

// Composant principal de l'application
export default function App() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">Justice.cool - Site Grand Public</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}