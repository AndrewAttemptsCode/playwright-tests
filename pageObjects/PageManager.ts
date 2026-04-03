import { type Page } from "@playwright/test";
import SideNav from "../pageObjects/SideNav";
import DatePickerPage from "../pageObjects/DatePickerPage";
import FormLayoutsPage from "../pageObjects/FormLayoutsPage";

class PageManager {
  private readonly page: Page;
  private readonly sideNav: SideNav;
  private readonly datePickerPage: DatePickerPage;
  private readonly formLayoutsPage: FormLayoutsPage;
  
  constructor(page: Page) {
    this.page = page;
    this.sideNav = new SideNav(this.page);
    this.datePickerPage = new DatePickerPage(this.page);
    this.formLayoutsPage = new FormLayoutsPage(this.page);
  }

  navigateTo() {
    return this.sideNav;
  }

  onDatePickerPage() {
    return this.datePickerPage;
  }

  onFormLayoutsPage() {
    return this.formLayoutsPage;
  }

}

export default PageManager;
