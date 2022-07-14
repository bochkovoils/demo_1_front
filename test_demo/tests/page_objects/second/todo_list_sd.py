from tests.page_objects.abstracts.todo_list import TodoList
from tests.decorators import second_design
from selenium.webdriver.common.by import By
from tests.page_elements.second.todo_list_item_si import TodoListItemSecondImpl


@second_design
class TodoListSecondDesignImpl(TodoList):

    def __init__(self, driver, *args, **kwargs):
        super().__init__(driver, *args, **kwargs)

    def create_new_item(self, text):
        element = self.driver.find_element(By.CSS_SELECTOR, "div.TodoListInput")
        element.click()

        input_element = self.driver.find_element(By.CSS_SELECTOR, "div.ContextMenu input")
        input_element.send_keys(text)

        element = self.driver.find_element(By.CSS_SELECTOR, "div.ContextMenu button")
        element.click()

        return self

    def get_items(self):
        return [TodoListItemSecondImpl(self.driver, elem) for elem in self.driver.find_elements(*self.item_locator())]
