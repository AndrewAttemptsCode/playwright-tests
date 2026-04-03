import { type Page } from "@playwright/test";
import SideNav from "../pageObjects/SideNav";
import DatePickerPage from "../pageObjects/DatePickerPage";
import FormLayoutsPage from "../pageObjects/FormLayoutsPage";

class PageManager {
  private readonly page: Page;
  private readonly SideNav: SideNav;
  private readonly DatePickerPage: DatePickerPage;
  private readonly FormLayoutsPage: FormLayoutsPage;
  
  constructor(page: Page) {
    this.page = page;
    this.SideNav = new SideNav(this.page);
    this.DatePickerPage = new DatePickerPage(this.page);
    this.FormLayoutsPage = new FormLayoutsPage(this.page);
  }

  navigateTo() {
    return this.SideNav;
  }

  onDatePickerPage() {
    return this.DatePickerPage;
  }

  onFormLayoutsPage() {
    return this.FormLayoutsPage;
  }

}

export default PageManager;
