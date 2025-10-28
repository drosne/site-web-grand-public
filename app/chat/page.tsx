"use client"

import React, { useState } from "react"
import { ChatInterface } from "@/components/chat/chat-interface"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/page"

export default function ChatPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <div className="flex flex-1 flex-col h-screen">
        <ChatInterface />
      </div>
    </SidebarProvider>
  )
}
