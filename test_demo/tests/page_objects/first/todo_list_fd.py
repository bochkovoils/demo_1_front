from tests.page_objects.abstracts.todo_list import TodoList
from tests.decorators.first_design import first_design
from selenium.webdriver.common.by import By
from tests.page_elements.first.todo_list_item_fi import TodoListItemFirsImpl


@first_design
class TodoListFirstDesignImpl(TodoList):

    def create_new_item(self, text):
        input_element = self.driver.find_element(By.CSS_SELECTOR, "div.TodoListInput input")
        input_element.send_keys(text)

        element = self.driver.find_element(By.CSS_SELECTOR, "div.TodoListInput button")
        element.click()

        return self

    def get_items(self):
        return [TodoListItemFirsImpl(self.driver, elem) for elem in self.driver.find_elements(*self.item_locator())]


    def __init__(self, driver, *args, **kwargs):
        super().__init__(driver, *args, **kwargs)



