(function() {
    class Templator {
        constructor(template) {
            console.log("1", this);
            this._template = template;
        }

        compile(ctx) {
            console.log("2", this);
            console.log("ctx", ctx);
            console.log("PROB", this._template.indexOf('chat'));
            //console.log("_template", this._template.replace("name", ctx.name));

            //console.log("RESULT",result);
            if (this._template.indexOf('name') === -1) {
                let result = this._template;
                result = result.replace("{{ className }}", ctx.className);
                result = result.replace("{{chat.id}}", ctx.chat.id);
                window.handleClick = ctx.handleClick;
                result = result.replace("{{handleClick}}", "window.handleClick()");
                console.log("RETURN 2", result);
                result = result.replace("{{ items }}", ctx.items);
                return result;
            } else {
                console.log("RETURN 1", this._template.replace("name", ctx.name));
                return this._template.replace("{{name}}", ctx.name);
            }

            //return "<p>Моя разметка живет тут</p>";
            //return (this._template.replace("name", ctx.name));
        }
    }

    window.Templator = Templator;
})();