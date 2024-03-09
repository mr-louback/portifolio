import SmoothScroll from "../js/classes/SmoothScroll.js";
import ListItems from "../js/classes/ListItems.js";
import data from "./data/dataLinks.js";
import TermsPolitics from '../js/classes/TermsPolitics.js'

new TermsPolitics()
new SmoothScroll("a[href^='#']");
new ListItems(data);

