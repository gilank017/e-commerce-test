import React from "react"
import { MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import { ModalsProvider } from "@mantine/modals"

import '@mantine/core/styles.css'
import "@mantine/notifications/styles.css"

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
      }}
    >
      <Notifications autoClose={3000} position="top-right" limit={3} />
      <ModalsProvider>
        <div>
          <h1>App</h1>
        </div>
      </ModalsProvider>
    </MantineProvider>
  )
}
