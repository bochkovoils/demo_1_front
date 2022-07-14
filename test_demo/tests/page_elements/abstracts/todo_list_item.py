from abc import abstractmethod


class TodoListItem:

    def __init__(self, driver, element):
        self.driver = driver
        self.element = element

    @abstractmethod
    def change_status(self):
        pass

    @abstractmethod
    def is_done(self):
        pass

    @abstractmethod
    def get_text(self):
        pass
