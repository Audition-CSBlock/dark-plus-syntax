module.exports = [
    {
        "settings": {
            "foreground": "#d4d4d4ff",
            "background": "#1e1e1eff"
        }
    },
    {
        "scope": [
            "comment",
            "comment.line.double-slash.js",
        ],
        "settings": { "foreground": "#505050" }
    },
    {
        "name": "Special Comments",
        "scope": [
            "meta.tag.sgml.html",
            "meta.tag.sgml.doctype.html",
            "comment.block.js",
            "comment.line.shebang.js",
            "comment.block.documentation.js",
            "comment.line.number-sign.ruby",
            "punctuation.definition.comment.ruby",
            // "meta.tag.ts",
            "comment.block.documentation.ts",
            // "comment.line.triple-slash.directive.ts",
        ],
        "settings": { "foreground": "#608b4e" }
    },
    {
        "name": "Curly Braces, Semicolons, etc.",
        "scope": [
            "meta.structure.dictionary.json",
            "punctuation.definition.array.begin.json",
            "punctuation.separator.array.json",
            "punctuation.terminator.statement.js",
            "punctuation.terminator.statement.ts",
            // "punctuation.separator.statement.ruby",
            "meta.property-list.scss",
            "punctuation.terminator.rule.css",
            "punctuation.separator.list.comma.css",
            "punctuation.section.property-list.begin.bracket.curly.css",
            "punctuation.section.property-list.end.bracket.curly.css",
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown",
            "punctuation.definition.metadata.markdown",
            "invalid.illegal.bad-comments-or-CDATA.html",
            "punctuation.definition.italic.markdown",
            "punctuation.definition.bold.markdown"
        ],
        "settings": { "foreground": "#505050" }
    },
    {
        "scope": "constant.character.escape.backslash.regexp",
        "settings": { "foreground": "#d7ba7d" }
    },
    {
        "scope": "constant.other.character-class.regexp",
        "settings": { "foreground": "#4ec9b0" }
    },
    {
        "scope": "constant.numeric",
        "settings": { "foreground": "#b5cea8" }
    },
    {
        "scope": "constant.regexp",
        "settings": { "foreground": "#d16969" }
    },
    {
        "scope": "invalid",
        "settings": { "foreground": "#f44747" }
    },
    {
        "scope": "meta.selector",
        "settings": { "foreground": "#d7ba7d" }
    },
    {
        "scope": "meta.preprocessor",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "meta.preprocessor.numeric",
        "settings": { "foreground": "#b5cea8" }
    },
    {
        "scope": "meta.diff.header",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": [
            "string",
            "string.tag",
            "string.value",
            "meta.preprocessor.string",
        ],
        "settings": { "foreground": "#ce9178" }
    },
    {
        "scope": "string.regexp",
        "settings": { "foreground": "#d16969" }
    },
    {
        "scope": [
            "storage",
            "storage.type",
            "storage.modifier",
            "keyword",
            "keyword.control",
            "constant.language",
            "keyword.control.anchor.regexp",
            "keyword.operator.new",
            "keyword.operator.expression",
            "keyword.operator.cast",
            "keyword.operator.sizeof",
        ],
        "settings": { "foreground": "#569cd6" }
    },
    // {
    //     "scope": "keyword.operator",
    //     "settings": { "foreground": "#d4d4d4" }
    // },
    {
        "scope": "keyword.other.unit",
        "settings": { "foreground": "#b5cea8" }
    },
    {
        "scope": [
            "entity.name.function",
            "support.function",
            "support.constant.handlebars"
        ],
        "settings": {"foreground": "#dcdcaa"}
    },
    {
        "name": "Type declaration and references",
        "scope": [
            "meta.return-type",
            "support.class",
            "support.type",
            "entity.name.type",
            "entity.name.class",
            "storage.type.cs",
            "storage.type.generic.cs",
            "storage.type.modifier.cs",
            "storage.type.variable.cs",
            "storage.type.annotation.java",
            "storage.type.generic.java",
            "storage.type.java",
            "storage.type.object.array.java",
            "storage.type.primitive.array.java",
            "storage.type.primitive.java",
            "storage.type.token.java",
            "storage.type.groovy",
            "storage.type.annotation.groovy",
            "storage.type.parameters.groovy",
            "storage.type.generic.groovy",
            "storage.type.object.array.groovy",
            "storage.type.primitive.array.groovy",
            "storage.type.primitive.groovy"
        ],
        "settings": {"foreground": "#4ec9b0"}
    },
    {
        "name": "Types declaration and references, TS grammar specific",
        "scope": [
            "meta.type.cast.expr",
            "meta.type.new.expr",
            "support.constant.math",
            "support.constant.dom",
            "support.constant.json",
            "entity.other.inherited-class"
        ],
        "settings": {"foreground": "#4ec9b0"}
    },
    {
        "name": "Control flow keywords",
        "scope": [
            "keyword.control",
            "keyword.operator"
        ],
        "settings": {"foreground": "#C586C0"}
    },
    {
        "scope": [
            "variable",
            "support.variable",
            "meta.definition.variable.name",
        ],
        "settings": {"foreground": "#9cdcfe"}
    },
    {
        "scope": "support.function.git-rebase",
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": "constant.sha.git-rebase",
        "settings": { "foreground": "#b5cea8" }
    },
    {
        "scope": "constant.character.escape",
        "settings": {"foreground": "#d7ba7d"}
    },
    {
        "scope": "token.info-token",
        "settings": { "foreground": "#6796e6" }
    },
    {
        "scope": "token.warn-token",
        "settings": { "foreground": "#cd9731" }
    },
    {
        "scope": "token.error-token",
        "settings": { "foreground": "#f44747" }
    },
    {
        "scope": "token.debug-token",
        "settings": { "foreground": "#b267e6" }
    }
]
