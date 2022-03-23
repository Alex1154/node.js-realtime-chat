import { io } from "./http"
import { Server } from "socket.io"
io.on("connection", (socket) => {
  console.log(`user ${socket.id} was connected`)
  socket.on("disconnect", () => {
    console.log("user disconnected")
  })
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg)
  })
})
