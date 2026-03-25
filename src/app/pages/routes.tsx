
import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Home";
import { Menu } from "./Menu";
import { Gallery } from "./Gallery";
import { About } from "./About";
import { Contact } from "./Contact";
import { Root } from "./Root";
import { NotFound } from "./NotFound";
import { Success } from "./Success";

/* STEP 5 NEW PAGES */

import OrderSuccess from "./OrderSuccess";
import Orders from "./Orders";
import AdminOrders from "./AdminOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      { index: true, Component: Home },

      { path: "menu", Component: Menu },

      { path: "gallery", Component: Gallery },

      { path: "about", Component: About },

      { path: "contact", Component: Contact },

      /* NEW ROUTES */

      { path: "success", Component: OrderSuccess },

      { path: "orders", Component: Orders },

      { path: "admin", Component: AdminOrders },

      { path: "*", Component: NotFound },
      { path: "success", Component: Success },
    ],
  },
]);