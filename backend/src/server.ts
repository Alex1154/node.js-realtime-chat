import { serverHttp } from "./http"
import "./websocket"

const port = process.env.PORT || 4000

serverHttp.listen(port, () => {
  console.log(`Server running on PORT ${port}`)
})
