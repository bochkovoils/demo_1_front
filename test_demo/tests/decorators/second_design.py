from tests.registers.page_objects_register import PageObjectsRegister


def second_design(cls):
    if "second" not in PageObjectsRegister.implementations:
        PageObjectsRegister.implementations["second"] = {}
    base = [parent for parent in cls.__bases__ if parent in PageObjectsRegister.abstractions][0]
    PageObjectsRegister.implementations["second"][base] = cls
    return cls
