import SmoothScroll from "../js/classes/SmoothScroll.js";
import ListItems from "../js/classes/ListItems.js";
import data from "./data/dataLinks.js";

new SmoothScroll("a[href^='#']");
new ListItems(data);
