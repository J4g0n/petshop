package controllers;

import play.mvc.*;
import views.html.*;
import play.data.FormFactory;
import javax.inject.Inject;


public class Application extends Controller {

    @Inject
    FormFactory formFactory;

    public Result index() {
        return ok(index.render());
    }
}
