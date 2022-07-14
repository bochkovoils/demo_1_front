from tests.page_elements.abstracts import TodoListItem
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

class TodoListItemFirsImpl(TodoListItem):

    def __init__(self, driver, element):
        super().__init__(driver, element)

    def change_status(self):
        self.element.click()

    def is_done(self):
        try:
            self.element.find_element(By.CSS_SELECTOR, " p s ")
            return True
        except NoSuchElementException:
            return False

    def get_text(self):
        if self.is_done():
            return self.element.find_element(By.CSS_SELECTOR, " p s ").text
        else:
            return self.element.find_element(By.CSS_SELECTOR, " p ").text
