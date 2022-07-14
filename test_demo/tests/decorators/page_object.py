from tests.registers.page_objects_register import PageObjectsRegister


def page_object(name):
    def cls_register(cls):
        PageObjectsRegister.abstractions.append(cls)
        return cls
    return cls_register
