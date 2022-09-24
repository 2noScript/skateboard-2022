// empty layout
import { Fragment } from "react";
import MainLayout from "../../layouts/MainLayout";
// pages
import Discover from "../../pages/Discover";
import Trending from "../../pages/Trending";
const publicRoutes = [
  {
    path: "/discover",
    page: Discover,
    layout: MainLayout,
  },
  {
    path: "/trending",
    page: Trending,
    layout: MainLayout,
  },
];
const clientRoutes = [];
const adminRoutes = [];

export { clientRoutes, adminRoutes, publicRoutes };
