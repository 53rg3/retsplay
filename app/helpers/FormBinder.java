package helpers;

import play.data.FormFactory;

public class FormBinder {

    public static <T> T get(FormFactory formFactory, Class<T> clazz) {
        return formFactory.form(clazz).bindFromRequest().get();
    }

}
