(this.webpackJsonpappcraft = this.webpackJsonpappcraft || []).push([[10], {
    2637: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isAnyTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("AnyTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isArgumentPlaceholder = function(e, t) {
            if (!e)
                return !1;
            if ("ArgumentPlaceholder" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isArrayExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ArrayExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isArrayPattern = function(e, t) {
            if (!e)
                return !1;
            if ("ArrayPattern" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isArrayTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("ArrayTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isArrowFunctionExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ArrowFunctionExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isAssignmentExpression = function(e, t) {
            if (!e)
                return !1;
            if ("AssignmentExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isAssignmentPattern = function(e, t) {
            if (!e)
                return !1;
            if ("AssignmentPattern" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isAwaitExpression = function(e, t) {
            if (!e)
                return !1;
            if ("AwaitExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBigIntLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("BigIntLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBinary = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BinaryExpression" === n || "LogicalExpression" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBinaryExpression = function(e, t) {
            if (!e)
                return !1;
            if ("BinaryExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBindExpression = function(e, t) {
            if (!e)
                return !1;
            if ("BindExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBlock = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BlockStatement" === n || "Program" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBlockParent = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BlockStatement" === n || "CatchClause" === n || "DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "Program" === n || "ObjectMethod" === n || "SwitchStatement" === n || "WhileStatement" === n || "ArrowFunctionExpression" === n || "ForOfStatement" === n || "ClassMethod" === n || "ClassPrivateMethod" === n || "StaticBlock" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBlockStatement = function(e, t) {
            if (!e)
                return !1;
            if ("BlockStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBooleanLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("BooleanLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBooleanLiteralTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("BooleanLiteralTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBooleanTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("BooleanTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBreakStatement = function(e, t) {
            if (!e)
                return !1;
            if ("BreakStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isCallExpression = function(e, t) {
            if (!e)
                return !1;
            if ("CallExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isCatchClause = function(e, t) {
            if (!e)
                return !1;
            if ("CatchClause" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClass = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ClassExpression" === n || "ClassDeclaration" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassBody = function(e, t) {
            if (!e)
                return !1;
            if ("ClassBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("ClassDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ClassExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassImplements = function(e, t) {
            if (!e)
                return !1;
            if ("ClassImplements" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassMethod = function(e, t) {
            if (!e)
                return !1;
            if ("ClassMethod" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassPrivateMethod = function(e, t) {
            if (!e)
                return !1;
            if ("ClassPrivateMethod" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassPrivateProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ClassPrivateProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ClassProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isCompletionStatement = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BreakStatement" === n || "ContinueStatement" === n || "ReturnStatement" === n || "ThrowStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isConditional = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ConditionalExpression" === n || "IfStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isConditionalExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ConditionalExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isContinueStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ContinueStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDebuggerStatement = function(e, t) {
            if (!e)
                return !1;
            if ("DebuggerStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDecimalLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("DecimalLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclaration = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("FunctionDeclaration" === n || "VariableDeclaration" === n || "ClassDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ImportDeclaration" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n || "EnumDeclaration" === n || "TSDeclareFunction" === n || "TSInterfaceDeclaration" === n || "TSTypeAliasDeclaration" === n || "TSEnumDeclaration" === n || "TSModuleDeclaration" === n || "Placeholder" === n && "Declaration" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareClass = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareClass" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareExportAllDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareExportAllDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareExportDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareExportDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareFunction = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareFunction" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareInterface = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareInterface" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareModule = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareModule" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareModuleExports = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareModuleExports" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareOpaqueType = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareOpaqueType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareTypeAlias = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareTypeAlias" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareVariable = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareVariable" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclaredPredicate = function(e, t) {
            if (!e)
                return !1;
            if ("DeclaredPredicate" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDecorator = function(e, t) {
            if (!e)
                return !1;
            if ("Decorator" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDirective = function(e, t) {
            if (!e)
                return !1;
            if ("Directive" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDirectiveLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("DirectiveLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDoExpression = function(e, t) {
            if (!e)
                return !1;
            if ("DoExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDoWhileStatement = function(e, t) {
            if (!e)
                return !1;
            if ("DoWhileStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEmptyStatement = function(e, t) {
            if (!e)
                return !1;
            if ("EmptyStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEmptyTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("EmptyTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumBody = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("EnumBooleanBody" === n || "EnumNumberBody" === n || "EnumStringBody" === n || "EnumSymbolBody" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumBooleanBody = function(e, t) {
            if (!e)
                return !1;
            if ("EnumBooleanBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumBooleanMember = function(e, t) {
            if (!e)
                return !1;
            if ("EnumBooleanMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("EnumDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumDefaultedMember = function(e, t) {
            if (!e)
                return !1;
            if ("EnumDefaultedMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumMember = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("EnumBooleanMember" === n || "EnumNumberMember" === n || "EnumStringMember" === n || "EnumDefaultedMember" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumNumberBody = function(e, t) {
            if (!e)
                return !1;
            if ("EnumNumberBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumNumberMember = function(e, t) {
            if (!e)
                return !1;
            if ("EnumNumberMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumStringBody = function(e, t) {
            if (!e)
                return !1;
            if ("EnumStringBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumStringMember = function(e, t) {
            if (!e)
                return !1;
            if ("EnumStringMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumSymbolBody = function(e, t) {
            if (!e)
                return !1;
            if ("EnumSymbolBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExistsTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("ExistsTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportAllDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("ExportAllDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportDeclaration = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportDefaultDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("ExportDefaultDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportDefaultSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ExportDefaultSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportNamedDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("ExportNamedDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportNamespaceSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ExportNamespaceSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ExportSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExpression = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ArrayExpression" === n || "AssignmentExpression" === n || "BinaryExpression" === n || "CallExpression" === n || "ConditionalExpression" === n || "FunctionExpression" === n || "Identifier" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "LogicalExpression" === n || "MemberExpression" === n || "NewExpression" === n || "ObjectExpression" === n || "SequenceExpression" === n || "ParenthesizedExpression" === n || "ThisExpression" === n || "UnaryExpression" === n || "UpdateExpression" === n || "ArrowFunctionExpression" === n || "ClassExpression" === n || "MetaProperty" === n || "Super" === n || "TaggedTemplateExpression" === n || "TemplateLiteral" === n || "YieldExpression" === n || "AwaitExpression" === n || "Import" === n || "BigIntLiteral" === n || "OptionalMemberExpression" === n || "OptionalCallExpression" === n || "TypeCastExpression" === n || "JSXElement" === n || "JSXFragment" === n || "BindExpression" === n || "DoExpression" === n || "RecordExpression" === n || "TupleExpression" === n || "DecimalLiteral" === n || "ModuleExpression" === n || "TopicReference" === n || "PipelineTopicExpression" === n || "PipelineBareFunction" === n || "PipelinePrimaryTopicReference" === n || "TSAsExpression" === n || "TSTypeAssertion" === n || "TSNonNullExpression" === n || "Placeholder" === n && ("Expression" === e.expectedNode || "Identifier" === e.expectedNode || "StringLiteral" === e.expectedNode))
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExpressionStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ExpressionStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExpressionWrapper = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ExpressionStatement" === n || "ParenthesizedExpression" === n || "TypeCastExpression" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFile = function(e, t) {
            if (!e)
                return !1;
            if ("File" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFlow = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("AnyTypeAnnotation" === n || "ArrayTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "BooleanLiteralTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "ClassImplements" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "DeclaredPredicate" === n || "ExistsTypeAnnotation" === n || "FunctionTypeAnnotation" === n || "FunctionTypeParam" === n || "GenericTypeAnnotation" === n || "InferredPredicate" === n || "InterfaceExtends" === n || "InterfaceDeclaration" === n || "InterfaceTypeAnnotation" === n || "IntersectionTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NullableTypeAnnotation" === n || "NumberLiteralTypeAnnotation" === n || "NumberTypeAnnotation" === n || "ObjectTypeAnnotation" === n || "ObjectTypeInternalSlot" === n || "ObjectTypeCallProperty" === n || "ObjectTypeIndexer" === n || "ObjectTypeProperty" === n || "ObjectTypeSpreadProperty" === n || "OpaqueType" === n || "QualifiedTypeIdentifier" === n || "StringLiteralTypeAnnotation" === n || "StringTypeAnnotation" === n || "SymbolTypeAnnotation" === n || "ThisTypeAnnotation" === n || "TupleTypeAnnotation" === n || "TypeofTypeAnnotation" === n || "TypeAlias" === n || "TypeAnnotation" === n || "TypeCastExpression" === n || "TypeParameter" === n || "TypeParameterDeclaration" === n || "TypeParameterInstantiation" === n || "UnionTypeAnnotation" === n || "Variance" === n || "VoidTypeAnnotation" === n || "EnumDeclaration" === n || "EnumBooleanBody" === n || "EnumNumberBody" === n || "EnumStringBody" === n || "EnumSymbolBody" === n || "EnumBooleanMember" === n || "EnumNumberMember" === n || "EnumStringMember" === n || "EnumDefaultedMember" === n || "IndexedAccessType" === n || "OptionalIndexedAccessType" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFlowBaseAnnotation = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("AnyTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NumberTypeAnnotation" === n || "StringTypeAnnotation" === n || "SymbolTypeAnnotation" === n || "ThisTypeAnnotation" === n || "VoidTypeAnnotation" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFlowDeclaration = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFlowPredicate = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("DeclaredPredicate" === n || "InferredPredicate" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFlowType = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("AnyTypeAnnotation" === n || "ArrayTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "BooleanLiteralTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "ExistsTypeAnnotation" === n || "FunctionTypeAnnotation" === n || "GenericTypeAnnotation" === n || "InterfaceTypeAnnotation" === n || "IntersectionTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NullableTypeAnnotation" === n || "NumberLiteralTypeAnnotation" === n || "NumberTypeAnnotation" === n || "ObjectTypeAnnotation" === n || "StringLiteralTypeAnnotation" === n || "StringTypeAnnotation" === n || "SymbolTypeAnnotation" === n || "ThisTypeAnnotation" === n || "TupleTypeAnnotation" === n || "TypeofTypeAnnotation" === n || "UnionTypeAnnotation" === n || "VoidTypeAnnotation" === n || "IndexedAccessType" === n || "OptionalIndexedAccessType" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFor = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ForInStatement" === n || "ForStatement" === n || "ForOfStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isForInStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ForInStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isForOfStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ForOfStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isForStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ForStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isForXStatement = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ForInStatement" === n || "ForOfStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunction = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("FunctionDeclaration" === n || "FunctionExpression" === n || "ObjectMethod" === n || "ArrowFunctionExpression" === n || "ClassMethod" === n || "ClassPrivateMethod" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunctionDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("FunctionDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunctionExpression = function(e, t) {
            if (!e)
                return !1;
            if ("FunctionExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunctionParent = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("FunctionDeclaration" === n || "FunctionExpression" === n || "ObjectMethod" === n || "ArrowFunctionExpression" === n || "ClassMethod" === n || "ClassPrivateMethod" === n || "StaticBlock" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunctionTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("FunctionTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunctionTypeParam = function(e, t) {
            if (!e)
                return !1;
            if ("FunctionTypeParam" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isGenericTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("GenericTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isIdentifier = function(e, t) {
            if (!e)
                return !1;
            if ("Identifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isIfStatement = function(e, t) {
            if (!e)
                return !1;
            if ("IfStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImmutable = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "BigIntLiteral" === n || "JSXAttribute" === n || "JSXClosingElement" === n || "JSXElement" === n || "JSXExpressionContainer" === n || "JSXSpreadChild" === n || "JSXOpeningElement" === n || "JSXText" === n || "JSXFragment" === n || "JSXOpeningFragment" === n || "JSXClosingFragment" === n || "DecimalLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImport = function(e, t) {
            if (!e)
                return !1;
            if ("Import" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImportAttribute = function(e, t) {
            if (!e)
                return !1;
            if ("ImportAttribute" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImportDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("ImportDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImportDefaultSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ImportDefaultSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImportNamespaceSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ImportNamespaceSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImportSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ImportSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isIndexedAccessType = function(e, t) {
            if (!e)
                return !1;
            if ("IndexedAccessType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isInferredPredicate = function(e, t) {
            if (!e)
                return !1;
            if ("InferredPredicate" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isInterfaceDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("InterfaceDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isInterfaceExtends = function(e, t) {
            if (!e)
                return !1;
            if ("InterfaceExtends" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isInterfaceTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("InterfaceTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isInterpreterDirective = function(e, t) {
            if (!e)
                return !1;
            if ("InterpreterDirective" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isIntersectionTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("IntersectionTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSX = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("JSXAttribute" === n || "JSXClosingElement" === n || "JSXElement" === n || "JSXEmptyExpression" === n || "JSXExpressionContainer" === n || "JSXSpreadChild" === n || "JSXIdentifier" === n || "JSXMemberExpression" === n || "JSXNamespacedName" === n || "JSXOpeningElement" === n || "JSXSpreadAttribute" === n || "JSXText" === n || "JSXFragment" === n || "JSXOpeningFragment" === n || "JSXClosingFragment" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXAttribute = function(e, t) {
            if (!e)
                return !1;
            if ("JSXAttribute" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXClosingElement = function(e, t) {
            if (!e)
                return !1;
            if ("JSXClosingElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXClosingFragment = function(e, t) {
            if (!e)
                return !1;
            if ("JSXClosingFragment" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXElement = function(e, t) {
            if (!e)
                return !1;
            if ("JSXElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXEmptyExpression = function(e, t) {
            if (!e)
                return !1;
            if ("JSXEmptyExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXExpressionContainer = function(e, t) {
            if (!e)
                return !1;
            if ("JSXExpressionContainer" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXFragment = function(e, t) {
            if (!e)
                return !1;
            if ("JSXFragment" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXIdentifier = function(e, t) {
            if (!e)
                return !1;
            if ("JSXIdentifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXMemberExpression = function(e, t) {
            if (!e)
                return !1;
            if ("JSXMemberExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXNamespacedName = function(e, t) {
            if (!e)
                return !1;
            if ("JSXNamespacedName" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXOpeningElement = function(e, t) {
            if (!e)
                return !1;
            if ("JSXOpeningElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXOpeningFragment = function(e, t) {
            if (!e)
                return !1;
            if ("JSXOpeningFragment" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXSpreadAttribute = function(e, t) {
            if (!e)
                return !1;
            if ("JSXSpreadAttribute" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXSpreadChild = function(e, t) {
            if (!e)
                return !1;
            if ("JSXSpreadChild" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXText = function(e, t) {
            if (!e)
                return !1;
            if ("JSXText" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isLVal = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("Identifier" === n || "MemberExpression" === n || "RestElement" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "TSParameterProperty" === n || "Placeholder" === n && ("Pattern" === e.expectedNode || "Identifier" === e.expectedNode))
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isLabeledStatement = function(e, t) {
            if (!e)
                return !1;
            if ("LabeledStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isLiteral = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "TemplateLiteral" === n || "BigIntLiteral" === n || "DecimalLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isLogicalExpression = function(e, t) {
            if (!e)
                return !1;
            if ("LogicalExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isLoop = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "WhileStatement" === n || "ForOfStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isMemberExpression = function(e, t) {
            if (!e)
                return !1;
            if ("MemberExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isMetaProperty = function(e, t) {
            if (!e)
                return !1;
            if ("MetaProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isMethod = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ObjectMethod" === n || "ClassMethod" === n || "ClassPrivateMethod" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isMiscellaneous = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("Noop" === n || "Placeholder" === n || "V8IntrinsicIdentifier" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isMixedTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("MixedTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isModuleDeclaration = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ImportDeclaration" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isModuleExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ModuleExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isModuleSpecifier = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ExportSpecifier" === n || "ImportDefaultSpecifier" === n || "ImportNamespaceSpecifier" === n || "ImportSpecifier" === n || "ExportNamespaceSpecifier" === n || "ExportDefaultSpecifier" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNewExpression = function(e, t) {
            if (!e)
                return !1;
            if ("NewExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNoop = function(e, t) {
            if (!e)
                return !1;
            if ("Noop" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNullLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("NullLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNullLiteralTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("NullLiteralTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNullableTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("NullableTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNumberLiteral = function(e, t) {
            if (console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),
            !e)
                return !1;
            if ("NumberLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNumberLiteralTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("NumberLiteralTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNumberTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("NumberTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNumericLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("NumericLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectMember = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ObjectMethod" === n || "ObjectProperty" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectMethod = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectMethod" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectPattern = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectPattern" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeCallProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeCallProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeIndexer = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeIndexer" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeInternalSlot = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeInternalSlot" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeSpreadProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeSpreadProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isOpaqueType = function(e, t) {
            if (!e)
                return !1;
            if ("OpaqueType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isOptionalCallExpression = function(e, t) {
            if (!e)
                return !1;
            if ("OptionalCallExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isOptionalIndexedAccessType = function(e, t) {
            if (!e)
                return !1;
            if ("OptionalIndexedAccessType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isOptionalMemberExpression = function(e, t) {
            if (!e)
                return !1;
            if ("OptionalMemberExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isParenthesizedExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ParenthesizedExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPattern = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "Placeholder" === n && "Pattern" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPatternLike = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("Identifier" === n || "RestElement" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "Placeholder" === n && ("Pattern" === e.expectedNode || "Identifier" === e.expectedNode))
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPipelineBareFunction = function(e, t) {
            if (!e)
                return !1;
            if ("PipelineBareFunction" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPipelinePrimaryTopicReference = function(e, t) {
            if (!e)
                return !1;
            if ("PipelinePrimaryTopicReference" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPipelineTopicExpression = function(e, t) {
            if (!e)
                return !1;
            if ("PipelineTopicExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPlaceholder = function(e, t) {
            if (!e)
                return !1;
            if ("Placeholder" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPrivate = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ClassPrivateProperty" === n || "ClassPrivateMethod" === n || "PrivateName" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPrivateName = function(e, t) {
            if (!e)
                return !1;
            if ("PrivateName" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isProgram = function(e, t) {
            if (!e)
                return !1;
            if ("Program" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isProperty = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ObjectProperty" === n || "ClassProperty" === n || "ClassPrivateProperty" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPureish = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("FunctionDeclaration" === n || "FunctionExpression" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "ArrowFunctionExpression" === n || "BigIntLiteral" === n || "DecimalLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isQualifiedTypeIdentifier = function(e, t) {
            if (!e)
                return !1;
            if ("QualifiedTypeIdentifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isRecordExpression = function(e, t) {
            if (!e)
                return !1;
            if ("RecordExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isRegExpLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("RegExpLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isRegexLiteral = function(e, t) {
            if (console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),
            !e)
                return !1;
            if ("RegexLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isRestElement = function(e, t) {
            if (!e)
                return !1;
            if ("RestElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isRestProperty = function(e, t) {
            if (console.trace("The node type RestProperty has been renamed to RestElement"),
            !e)
                return !1;
            if ("RestProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isReturnStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ReturnStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isScopable = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BlockStatement" === n || "CatchClause" === n || "DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "Program" === n || "ObjectMethod" === n || "SwitchStatement" === n || "WhileStatement" === n || "ArrowFunctionExpression" === n || "ClassExpression" === n || "ClassDeclaration" === n || "ForOfStatement" === n || "ClassMethod" === n || "ClassPrivateMethod" === n || "StaticBlock" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSequenceExpression = function(e, t) {
            if (!e)
                return !1;
            if ("SequenceExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSpreadElement = function(e, t) {
            if (!e)
                return !1;
            if ("SpreadElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSpreadProperty = function(e, t) {
            if (console.trace("The node type SpreadProperty has been renamed to SpreadElement"),
            !e)
                return !1;
            if ("SpreadProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStandardized = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ArrayExpression" === n || "AssignmentExpression" === n || "BinaryExpression" === n || "InterpreterDirective" === n || "Directive" === n || "DirectiveLiteral" === n || "BlockStatement" === n || "BreakStatement" === n || "CallExpression" === n || "CatchClause" === n || "ConditionalExpression" === n || "ContinueStatement" === n || "DebuggerStatement" === n || "DoWhileStatement" === n || "EmptyStatement" === n || "ExpressionStatement" === n || "File" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "Identifier" === n || "IfStatement" === n || "LabeledStatement" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "LogicalExpression" === n || "MemberExpression" === n || "NewExpression" === n || "Program" === n || "ObjectExpression" === n || "ObjectMethod" === n || "ObjectProperty" === n || "RestElement" === n || "ReturnStatement" === n || "SequenceExpression" === n || "ParenthesizedExpression" === n || "SwitchCase" === n || "SwitchStatement" === n || "ThisExpression" === n || "ThrowStatement" === n || "TryStatement" === n || "UnaryExpression" === n || "UpdateExpression" === n || "VariableDeclaration" === n || "VariableDeclarator" === n || "WhileStatement" === n || "WithStatement" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ArrowFunctionExpression" === n || "ClassBody" === n || "ClassExpression" === n || "ClassDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ExportSpecifier" === n || "ForOfStatement" === n || "ImportDeclaration" === n || "ImportDefaultSpecifier" === n || "ImportNamespaceSpecifier" === n || "ImportSpecifier" === n || "MetaProperty" === n || "ClassMethod" === n || "ObjectPattern" === n || "SpreadElement" === n || "Super" === n || "TaggedTemplateExpression" === n || "TemplateElement" === n || "TemplateLiteral" === n || "YieldExpression" === n || "AwaitExpression" === n || "Import" === n || "BigIntLiteral" === n || "ExportNamespaceSpecifier" === n || "OptionalMemberExpression" === n || "OptionalCallExpression" === n || "ClassProperty" === n || "ClassPrivateProperty" === n || "ClassPrivateMethod" === n || "PrivateName" === n || "StaticBlock" === n || "Placeholder" === n && ("Identifier" === e.expectedNode || "StringLiteral" === e.expectedNode || "BlockStatement" === e.expectedNode || "ClassBody" === e.expectedNode))
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStatement = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BlockStatement" === n || "BreakStatement" === n || "ContinueStatement" === n || "DebuggerStatement" === n || "DoWhileStatement" === n || "EmptyStatement" === n || "ExpressionStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "IfStatement" === n || "LabeledStatement" === n || "ReturnStatement" === n || "SwitchStatement" === n || "ThrowStatement" === n || "TryStatement" === n || "VariableDeclaration" === n || "WhileStatement" === n || "WithStatement" === n || "ClassDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ForOfStatement" === n || "ImportDeclaration" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n || "EnumDeclaration" === n || "TSDeclareFunction" === n || "TSInterfaceDeclaration" === n || "TSTypeAliasDeclaration" === n || "TSEnumDeclaration" === n || "TSModuleDeclaration" === n || "TSImportEqualsDeclaration" === n || "TSExportAssignment" === n || "TSNamespaceExportDeclaration" === n || "Placeholder" === n && ("Statement" === e.expectedNode || "Declaration" === e.expectedNode || "BlockStatement" === e.expectedNode))
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStaticBlock = function(e, t) {
            if (!e)
                return !1;
            if ("StaticBlock" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStringLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("StringLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStringLiteralTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("StringLiteralTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStringTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("StringTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSuper = function(e, t) {
            if (!e)
                return !1;
            if ("Super" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSwitchCase = function(e, t) {
            if (!e)
                return !1;
            if ("SwitchCase" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSwitchStatement = function(e, t) {
            if (!e)
                return !1;
            if ("SwitchStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSymbolTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("SymbolTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSAnyKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSAnyKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSArrayType = function(e, t) {
            if (!e)
                return !1;
            if ("TSArrayType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSAsExpression = function(e, t) {
            if (!e)
                return !1;
            if ("TSAsExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSBaseType = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("TSAnyKeyword" === n || "TSBooleanKeyword" === n || "TSBigIntKeyword" === n || "TSIntrinsicKeyword" === n || "TSNeverKeyword" === n || "TSNullKeyword" === n || "TSNumberKeyword" === n || "TSObjectKeyword" === n || "TSStringKeyword" === n || "TSSymbolKeyword" === n || "TSUndefinedKeyword" === n || "TSUnknownKeyword" === n || "TSVoidKeyword" === n || "TSThisType" === n || "TSLiteralType" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSBigIntKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSBigIntKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSBooleanKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSBooleanKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSCallSignatureDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSCallSignatureDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSConditionalType = function(e, t) {
            if (!e)
                return !1;
            if ("TSConditionalType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSConstructSignatureDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSConstructSignatureDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSConstructorType = function(e, t) {
            if (!e)
                return !1;
            if ("TSConstructorType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSDeclareFunction = function(e, t) {
            if (!e)
                return !1;
            if ("TSDeclareFunction" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSDeclareMethod = function(e, t) {
            if (!e)
                return !1;
            if ("TSDeclareMethod" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSEntityName = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("Identifier" === n || "TSQualifiedName" === n || "Placeholder" === n && "Identifier" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSEnumDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSEnumDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSEnumMember = function(e, t) {
            if (!e)
                return !1;
            if ("TSEnumMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSExportAssignment = function(e, t) {
            if (!e)
                return !1;
            if ("TSExportAssignment" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSExpressionWithTypeArguments = function(e, t) {
            if (!e)
                return !1;
            if ("TSExpressionWithTypeArguments" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSExternalModuleReference = function(e, t) {
            if (!e)
                return !1;
            if ("TSExternalModuleReference" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSFunctionType = function(e, t) {
            if (!e)
                return !1;
            if ("TSFunctionType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSImportEqualsDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSImportEqualsDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSImportType = function(e, t) {
            if (!e)
                return !1;
            if ("TSImportType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSIndexSignature = function(e, t) {
            if (!e)
                return !1;
            if ("TSIndexSignature" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSIndexedAccessType = function(e, t) {
            if (!e)
                return !1;
            if ("TSIndexedAccessType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSInferType = function(e, t) {
            if (!e)
                return !1;
            if ("TSInferType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSInterfaceBody = function(e, t) {
            if (!e)
                return !1;
            if ("TSInterfaceBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSInterfaceDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSInterfaceDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSIntersectionType = function(e, t) {
            if (!e)
                return !1;
            if ("TSIntersectionType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSIntrinsicKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSIntrinsicKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSLiteralType = function(e, t) {
            if (!e)
                return !1;
            if ("TSLiteralType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSMappedType = function(e, t) {
            if (!e)
                return !1;
            if ("TSMappedType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSMethodSignature = function(e, t) {
            if (!e)
                return !1;
            if ("TSMethodSignature" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSModuleBlock = function(e, t) {
            if (!e)
                return !1;
            if ("TSModuleBlock" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSModuleDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSModuleDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNamedTupleMember = function(e, t) {
            if (!e)
                return !1;
            if ("TSNamedTupleMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNamespaceExportDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSNamespaceExportDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNeverKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSNeverKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNonNullExpression = function(e, t) {
            if (!e)
                return !1;
            if ("TSNonNullExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNullKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSNullKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNumberKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSNumberKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSObjectKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSObjectKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSOptionalType = function(e, t) {
            if (!e)
                return !1;
            if ("TSOptionalType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSParameterProperty = function(e, t) {
            if (!e)
                return !1;
            if ("TSParameterProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSParenthesizedType = function(e, t) {
            if (!e)
                return !1;
            if ("TSParenthesizedType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSPropertySignature = function(e, t) {
            if (!e)
                return !1;
            if ("TSPropertySignature" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSQualifiedName = function(e, t) {
            if (!e)
                return !1;
            if ("TSQualifiedName" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSRestType = function(e, t) {
            if (!e)
                return !1;
            if ("TSRestType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSStringKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSStringKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSSymbolKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSSymbolKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSThisType = function(e, t) {
            if (!e)
                return !1;
            if ("TSThisType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTupleType = function(e, t) {
            if (!e)
                return !1;
            if ("TSTupleType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSType = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("TSAnyKeyword" === n || "TSBooleanKeyword" === n || "TSBigIntKeyword" === n || "TSIntrinsicKeyword" === n || "TSNeverKeyword" === n || "TSNullKeyword" === n || "TSNumberKeyword" === n || "TSObjectKeyword" === n || "TSStringKeyword" === n || "TSSymbolKeyword" === n || "TSUndefinedKeyword" === n || "TSUnknownKeyword" === n || "TSVoidKeyword" === n || "TSThisType" === n || "TSFunctionType" === n || "TSConstructorType" === n || "TSTypeReference" === n || "TSTypePredicate" === n || "TSTypeQuery" === n || "TSTypeLiteral" === n || "TSArrayType" === n || "TSTupleType" === n || "TSOptionalType" === n || "TSRestType" === n || "TSUnionType" === n || "TSIntersectionType" === n || "TSConditionalType" === n || "TSInferType" === n || "TSParenthesizedType" === n || "TSTypeOperator" === n || "TSIndexedAccessType" === n || "TSMappedType" === n || "TSLiteralType" === n || "TSExpressionWithTypeArguments" === n || "TSImportType" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeAliasDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeAliasDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeAssertion = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeAssertion" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeElement = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("TSCallSignatureDeclaration" === n || "TSConstructSignatureDeclaration" === n || "TSPropertySignature" === n || "TSMethodSignature" === n || "TSIndexSignature" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeOperator = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeOperator" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeParameter = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeParameter" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeParameterDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeParameterDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeParameterInstantiation = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeParameterInstantiation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypePredicate = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypePredicate" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeQuery = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeQuery" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeReference = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeReference" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSUndefinedKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSUndefinedKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSUnionType = function(e, t) {
            if (!e)
                return !1;
            if ("TSUnionType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSUnknownKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSUnknownKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSVoidKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSVoidKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTaggedTemplateExpression = function(e, t) {
            if (!e)
                return !1;
            if ("TaggedTemplateExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTemplateElement = function(e, t) {
            if (!e)
                return !1;
            if ("TemplateElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTemplateLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("TemplateLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTerminatorless = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BreakStatement" === n || "ContinueStatement" === n || "ReturnStatement" === n || "ThrowStatement" === n || "YieldExpression" === n || "AwaitExpression" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isThisExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ThisExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isThisTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("ThisTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isThrowStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ThrowStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTopicReference = function(e, t) {
            if (!e)
                return !1;
            if ("TopicReference" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTryStatement = function(e, t) {
            if (!e)
                return !1;
            if ("TryStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTupleExpression = function(e, t) {
            if (!e)
                return !1;
            if ("TupleExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTupleTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("TupleTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeAlias = function(e, t) {
            if (!e)
                return !1;
            if ("TypeAlias" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("TypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeCastExpression = function(e, t) {
            if (!e)
                return !1;
            if ("TypeCastExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeParameter = function(e, t) {
            if (!e)
                return !1;
            if ("TypeParameter" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeParameterDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TypeParameterDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeParameterInstantiation = function(e, t) {
            if (!e)
                return !1;
            if ("TypeParameterInstantiation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeScript = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("TSParameterProperty" === n || "TSDeclareFunction" === n || "TSDeclareMethod" === n || "TSQualifiedName" === n || "TSCallSignatureDeclaration" === n || "TSConstructSignatureDeclaration" === n || "TSPropertySignature" === n || "TSMethodSignature" === n || "TSIndexSignature" === n || "TSAnyKeyword" === n || "TSBooleanKeyword" === n || "TSBigIntKeyword" === n || "TSIntrinsicKeyword" === n || "TSNeverKeyword" === n || "TSNullKeyword" === n || "TSNumberKeyword" === n || "TSObjectKeyword" === n || "TSStringKeyword" === n || "TSSymbolKeyword" === n || "TSUndefinedKeyword" === n || "TSUnknownKeyword" === n || "TSVoidKeyword" === n || "TSThisType" === n || "TSFunctionType" === n || "TSConstructorType" === n || "TSTypeReference" === n || "TSTypePredicate" === n || "TSTypeQuery" === n || "TSTypeLiteral" === n || "TSArrayType" === n || "TSTupleType" === n || "TSOptionalType" === n || "TSRestType" === n || "TSNamedTupleMember" === n || "TSUnionType" === n || "TSIntersectionType" === n || "TSConditionalType" === n || "TSInferType" === n || "TSParenthesizedType" === n || "TSTypeOperator" === n || "TSIndexedAccessType" === n || "TSMappedType" === n || "TSLiteralType" === n || "TSExpressionWithTypeArguments" === n || "TSInterfaceDeclaration" === n || "TSInterfaceBody" === n || "TSTypeAliasDeclaration" === n || "TSAsExpression" === n || "TSTypeAssertion" === n || "TSEnumDeclaration" === n || "TSEnumMember" === n || "TSModuleDeclaration" === n || "TSModuleBlock" === n || "TSImportType" === n || "TSImportEqualsDeclaration" === n || "TSExternalModuleReference" === n || "TSNonNullExpression" === n || "TSExportAssignment" === n || "TSNamespaceExportDeclaration" === n || "TSTypeAnnotation" === n || "TSTypeParameterInstantiation" === n || "TSTypeParameterDeclaration" === n || "TSTypeParameter" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeofTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("TypeofTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isUnaryExpression = function(e, t) {
            if (!e)
                return !1;
            if ("UnaryExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isUnaryLike = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("UnaryExpression" === n || "SpreadElement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isUnionTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("UnionTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isUpdateExpression = function(e, t) {
            if (!e)
                return !1;
            if ("UpdateExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isUserWhitespacable = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ObjectMethod" === n || "ObjectProperty" === n || "ObjectTypeInternalSlot" === n || "ObjectTypeCallProperty" === n || "ObjectTypeIndexer" === n || "ObjectTypeProperty" === n || "ObjectTypeSpreadProperty" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isV8IntrinsicIdentifier = function(e, t) {
            if (!e)
                return !1;
            if ("V8IntrinsicIdentifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isVariableDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("VariableDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isVariableDeclarator = function(e, t) {
            if (!e)
                return !1;
            if ("VariableDeclarator" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isVariance = function(e, t) {
            if (!e)
                return !1;
            if ("Variance" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isVoidTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("VoidTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isWhile = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("DoWhileStatement" === n || "WhileStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isWhileStatement = function(e, t) {
            if (!e)
                return !1;
            if ("WhileStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isWithStatement = function(e, t) {
            if (!e)
                return !1;
            if ("WithStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isYieldExpression = function(e, t) {
            if (!e)
                return !1;
            if ("YieldExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ;
        var r = n(2718)
    },
    2638: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isAnyTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("AnyTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isArgumentPlaceholder = function(e, t) {
            if (!e)
                return !1;
            if ("ArgumentPlaceholder" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isArrayExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ArrayExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isArrayPattern = function(e, t) {
            if (!e)
                return !1;
            if ("ArrayPattern" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isArrayTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("ArrayTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isArrowFunctionExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ArrowFunctionExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isAssignmentExpression = function(e, t) {
            if (!e)
                return !1;
            if ("AssignmentExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isAssignmentPattern = function(e, t) {
            if (!e)
                return !1;
            if ("AssignmentPattern" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isAwaitExpression = function(e, t) {
            if (!e)
                return !1;
            if ("AwaitExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBigIntLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("BigIntLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBinary = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BinaryExpression" === n || "LogicalExpression" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBinaryExpression = function(e, t) {
            if (!e)
                return !1;
            if ("BinaryExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBindExpression = function(e, t) {
            if (!e)
                return !1;
            if ("BindExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBlock = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BlockStatement" === n || "Program" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBlockParent = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BlockStatement" === n || "CatchClause" === n || "DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "Program" === n || "ObjectMethod" === n || "SwitchStatement" === n || "WhileStatement" === n || "ArrowFunctionExpression" === n || "ForOfStatement" === n || "ClassMethod" === n || "ClassPrivateMethod" === n || "StaticBlock" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBlockStatement = function(e, t) {
            if (!e)
                return !1;
            if ("BlockStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBooleanLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("BooleanLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBooleanLiteralTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("BooleanLiteralTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBooleanTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("BooleanTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isBreakStatement = function(e, t) {
            if (!e)
                return !1;
            if ("BreakStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isCallExpression = function(e, t) {
            if (!e)
                return !1;
            if ("CallExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isCatchClause = function(e, t) {
            if (!e)
                return !1;
            if ("CatchClause" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClass = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ClassExpression" === n || "ClassDeclaration" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassBody = function(e, t) {
            if (!e)
                return !1;
            if ("ClassBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("ClassDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ClassExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassImplements = function(e, t) {
            if (!e)
                return !1;
            if ("ClassImplements" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassMethod = function(e, t) {
            if (!e)
                return !1;
            if ("ClassMethod" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassPrivateMethod = function(e, t) {
            if (!e)
                return !1;
            if ("ClassPrivateMethod" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassPrivateProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ClassPrivateProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isClassProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ClassProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isCompletionStatement = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BreakStatement" === n || "ContinueStatement" === n || "ReturnStatement" === n || "ThrowStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isConditional = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ConditionalExpression" === n || "IfStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isConditionalExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ConditionalExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isContinueStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ContinueStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDebuggerStatement = function(e, t) {
            if (!e)
                return !1;
            if ("DebuggerStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDecimalLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("DecimalLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclaration = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("FunctionDeclaration" === n || "VariableDeclaration" === n || "ClassDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ImportDeclaration" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n || "EnumDeclaration" === n || "TSDeclareFunction" === n || "TSInterfaceDeclaration" === n || "TSTypeAliasDeclaration" === n || "TSEnumDeclaration" === n || "TSModuleDeclaration" === n || "Placeholder" === n && "Declaration" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareClass = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareClass" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareExportAllDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareExportAllDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareExportDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareExportDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareFunction = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareFunction" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareInterface = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareInterface" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareModule = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareModule" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareModuleExports = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareModuleExports" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareOpaqueType = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareOpaqueType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareTypeAlias = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareTypeAlias" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclareVariable = function(e, t) {
            if (!e)
                return !1;
            if ("DeclareVariable" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDeclaredPredicate = function(e, t) {
            if (!e)
                return !1;
            if ("DeclaredPredicate" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDecorator = function(e, t) {
            if (!e)
                return !1;
            if ("Decorator" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDirective = function(e, t) {
            if (!e)
                return !1;
            if ("Directive" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDirectiveLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("DirectiveLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDoExpression = function(e, t) {
            if (!e)
                return !1;
            if ("DoExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isDoWhileStatement = function(e, t) {
            if (!e)
                return !1;
            if ("DoWhileStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEmptyStatement = function(e, t) {
            if (!e)
                return !1;
            if ("EmptyStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEmptyTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("EmptyTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumBody = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("EnumBooleanBody" === n || "EnumNumberBody" === n || "EnumStringBody" === n || "EnumSymbolBody" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumBooleanBody = function(e, t) {
            if (!e)
                return !1;
            if ("EnumBooleanBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumBooleanMember = function(e, t) {
            if (!e)
                return !1;
            if ("EnumBooleanMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("EnumDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumDefaultedMember = function(e, t) {
            if (!e)
                return !1;
            if ("EnumDefaultedMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumMember = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("EnumBooleanMember" === n || "EnumNumberMember" === n || "EnumStringMember" === n || "EnumDefaultedMember" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumNumberBody = function(e, t) {
            if (!e)
                return !1;
            if ("EnumNumberBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumNumberMember = function(e, t) {
            if (!e)
                return !1;
            if ("EnumNumberMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumStringBody = function(e, t) {
            if (!e)
                return !1;
            if ("EnumStringBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumStringMember = function(e, t) {
            if (!e)
                return !1;
            if ("EnumStringMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isEnumSymbolBody = function(e, t) {
            if (!e)
                return !1;
            if ("EnumSymbolBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExistsTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("ExistsTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportAllDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("ExportAllDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportDeclaration = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportDefaultDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("ExportDefaultDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportDefaultSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ExportDefaultSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportNamedDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("ExportNamedDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportNamespaceSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ExportNamespaceSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExportSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ExportSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExpression = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ArrayExpression" === n || "AssignmentExpression" === n || "BinaryExpression" === n || "CallExpression" === n || "ConditionalExpression" === n || "FunctionExpression" === n || "Identifier" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "LogicalExpression" === n || "MemberExpression" === n || "NewExpression" === n || "ObjectExpression" === n || "SequenceExpression" === n || "ParenthesizedExpression" === n || "ThisExpression" === n || "UnaryExpression" === n || "UpdateExpression" === n || "ArrowFunctionExpression" === n || "ClassExpression" === n || "MetaProperty" === n || "Super" === n || "TaggedTemplateExpression" === n || "TemplateLiteral" === n || "YieldExpression" === n || "AwaitExpression" === n || "Import" === n || "BigIntLiteral" === n || "OptionalMemberExpression" === n || "OptionalCallExpression" === n || "TypeCastExpression" === n || "JSXElement" === n || "JSXFragment" === n || "BindExpression" === n || "DoExpression" === n || "RecordExpression" === n || "TupleExpression" === n || "DecimalLiteral" === n || "ModuleExpression" === n || "TopicReference" === n || "PipelineTopicExpression" === n || "PipelineBareFunction" === n || "PipelinePrimaryTopicReference" === n || "TSAsExpression" === n || "TSTypeAssertion" === n || "TSNonNullExpression" === n || "Placeholder" === n && ("Expression" === e.expectedNode || "Identifier" === e.expectedNode || "StringLiteral" === e.expectedNode))
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExpressionStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ExpressionStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isExpressionWrapper = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ExpressionStatement" === n || "ParenthesizedExpression" === n || "TypeCastExpression" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFile = function(e, t) {
            if (!e)
                return !1;
            if ("File" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFlow = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("AnyTypeAnnotation" === n || "ArrayTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "BooleanLiteralTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "ClassImplements" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "DeclaredPredicate" === n || "ExistsTypeAnnotation" === n || "FunctionTypeAnnotation" === n || "FunctionTypeParam" === n || "GenericTypeAnnotation" === n || "InferredPredicate" === n || "InterfaceExtends" === n || "InterfaceDeclaration" === n || "InterfaceTypeAnnotation" === n || "IntersectionTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NullableTypeAnnotation" === n || "NumberLiteralTypeAnnotation" === n || "NumberTypeAnnotation" === n || "ObjectTypeAnnotation" === n || "ObjectTypeInternalSlot" === n || "ObjectTypeCallProperty" === n || "ObjectTypeIndexer" === n || "ObjectTypeProperty" === n || "ObjectTypeSpreadProperty" === n || "OpaqueType" === n || "QualifiedTypeIdentifier" === n || "StringLiteralTypeAnnotation" === n || "StringTypeAnnotation" === n || "SymbolTypeAnnotation" === n || "ThisTypeAnnotation" === n || "TupleTypeAnnotation" === n || "TypeofTypeAnnotation" === n || "TypeAlias" === n || "TypeAnnotation" === n || "TypeCastExpression" === n || "TypeParameter" === n || "TypeParameterDeclaration" === n || "TypeParameterInstantiation" === n || "UnionTypeAnnotation" === n || "Variance" === n || "VoidTypeAnnotation" === n || "EnumDeclaration" === n || "EnumBooleanBody" === n || "EnumNumberBody" === n || "EnumStringBody" === n || "EnumSymbolBody" === n || "EnumBooleanMember" === n || "EnumNumberMember" === n || "EnumStringMember" === n || "EnumDefaultedMember" === n || "IndexedAccessType" === n || "OptionalIndexedAccessType" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFlowBaseAnnotation = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("AnyTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NumberTypeAnnotation" === n || "StringTypeAnnotation" === n || "SymbolTypeAnnotation" === n || "ThisTypeAnnotation" === n || "VoidTypeAnnotation" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFlowDeclaration = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFlowPredicate = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("DeclaredPredicate" === n || "InferredPredicate" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFlowType = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("AnyTypeAnnotation" === n || "ArrayTypeAnnotation" === n || "BooleanTypeAnnotation" === n || "BooleanLiteralTypeAnnotation" === n || "NullLiteralTypeAnnotation" === n || "ExistsTypeAnnotation" === n || "FunctionTypeAnnotation" === n || "GenericTypeAnnotation" === n || "InterfaceTypeAnnotation" === n || "IntersectionTypeAnnotation" === n || "MixedTypeAnnotation" === n || "EmptyTypeAnnotation" === n || "NullableTypeAnnotation" === n || "NumberLiteralTypeAnnotation" === n || "NumberTypeAnnotation" === n || "ObjectTypeAnnotation" === n || "StringLiteralTypeAnnotation" === n || "StringTypeAnnotation" === n || "SymbolTypeAnnotation" === n || "ThisTypeAnnotation" === n || "TupleTypeAnnotation" === n || "TypeofTypeAnnotation" === n || "UnionTypeAnnotation" === n || "VoidTypeAnnotation" === n || "IndexedAccessType" === n || "OptionalIndexedAccessType" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFor = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ForInStatement" === n || "ForStatement" === n || "ForOfStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isForInStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ForInStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isForOfStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ForOfStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isForStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ForStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isForXStatement = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ForInStatement" === n || "ForOfStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunction = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("FunctionDeclaration" === n || "FunctionExpression" === n || "ObjectMethod" === n || "ArrowFunctionExpression" === n || "ClassMethod" === n || "ClassPrivateMethod" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunctionDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("FunctionDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunctionExpression = function(e, t) {
            if (!e)
                return !1;
            if ("FunctionExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunctionParent = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("FunctionDeclaration" === n || "FunctionExpression" === n || "ObjectMethod" === n || "ArrowFunctionExpression" === n || "ClassMethod" === n || "ClassPrivateMethod" === n || "StaticBlock" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunctionTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("FunctionTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isFunctionTypeParam = function(e, t) {
            if (!e)
                return !1;
            if ("FunctionTypeParam" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isGenericTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("GenericTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isIdentifier = function(e, t) {
            if (!e)
                return !1;
            if ("Identifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isIfStatement = function(e, t) {
            if (!e)
                return !1;
            if ("IfStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImmutable = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "BigIntLiteral" === n || "JSXAttribute" === n || "JSXClosingElement" === n || "JSXElement" === n || "JSXExpressionContainer" === n || "JSXSpreadChild" === n || "JSXOpeningElement" === n || "JSXText" === n || "JSXFragment" === n || "JSXOpeningFragment" === n || "JSXClosingFragment" === n || "DecimalLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImport = function(e, t) {
            if (!e)
                return !1;
            if ("Import" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImportAttribute = function(e, t) {
            if (!e)
                return !1;
            if ("ImportAttribute" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImportDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("ImportDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImportDefaultSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ImportDefaultSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImportNamespaceSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ImportNamespaceSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isImportSpecifier = function(e, t) {
            if (!e)
                return !1;
            if ("ImportSpecifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isIndexedAccessType = function(e, t) {
            if (!e)
                return !1;
            if ("IndexedAccessType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isInferredPredicate = function(e, t) {
            if (!e)
                return !1;
            if ("InferredPredicate" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isInterfaceDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("InterfaceDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isInterfaceExtends = function(e, t) {
            if (!e)
                return !1;
            if ("InterfaceExtends" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isInterfaceTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("InterfaceTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isInterpreterDirective = function(e, t) {
            if (!e)
                return !1;
            if ("InterpreterDirective" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isIntersectionTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("IntersectionTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSX = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("JSXAttribute" === n || "JSXClosingElement" === n || "JSXElement" === n || "JSXEmptyExpression" === n || "JSXExpressionContainer" === n || "JSXSpreadChild" === n || "JSXIdentifier" === n || "JSXMemberExpression" === n || "JSXNamespacedName" === n || "JSXOpeningElement" === n || "JSXSpreadAttribute" === n || "JSXText" === n || "JSXFragment" === n || "JSXOpeningFragment" === n || "JSXClosingFragment" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXAttribute = function(e, t) {
            if (!e)
                return !1;
            if ("JSXAttribute" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXClosingElement = function(e, t) {
            if (!e)
                return !1;
            if ("JSXClosingElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXClosingFragment = function(e, t) {
            if (!e)
                return !1;
            if ("JSXClosingFragment" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXElement = function(e, t) {
            if (!e)
                return !1;
            if ("JSXElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXEmptyExpression = function(e, t) {
            if (!e)
                return !1;
            if ("JSXEmptyExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXExpressionContainer = function(e, t) {
            if (!e)
                return !1;
            if ("JSXExpressionContainer" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXFragment = function(e, t) {
            if (!e)
                return !1;
            if ("JSXFragment" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXIdentifier = function(e, t) {
            if (!e)
                return !1;
            if ("JSXIdentifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXMemberExpression = function(e, t) {
            if (!e)
                return !1;
            if ("JSXMemberExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXNamespacedName = function(e, t) {
            if (!e)
                return !1;
            if ("JSXNamespacedName" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXOpeningElement = function(e, t) {
            if (!e)
                return !1;
            if ("JSXOpeningElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXOpeningFragment = function(e, t) {
            if (!e)
                return !1;
            if ("JSXOpeningFragment" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXSpreadAttribute = function(e, t) {
            if (!e)
                return !1;
            if ("JSXSpreadAttribute" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXSpreadChild = function(e, t) {
            if (!e)
                return !1;
            if ("JSXSpreadChild" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isJSXText = function(e, t) {
            if (!e)
                return !1;
            if ("JSXText" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isLVal = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("Identifier" === n || "MemberExpression" === n || "RestElement" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "TSParameterProperty" === n || "Placeholder" === n && ("Pattern" === e.expectedNode || "Identifier" === e.expectedNode))
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isLabeledStatement = function(e, t) {
            if (!e)
                return !1;
            if ("LabeledStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isLiteral = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "TemplateLiteral" === n || "BigIntLiteral" === n || "DecimalLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isLogicalExpression = function(e, t) {
            if (!e)
                return !1;
            if ("LogicalExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isLoop = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "WhileStatement" === n || "ForOfStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isMemberExpression = function(e, t) {
            if (!e)
                return !1;
            if ("MemberExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isMetaProperty = function(e, t) {
            if (!e)
                return !1;
            if ("MetaProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isMethod = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ObjectMethod" === n || "ClassMethod" === n || "ClassPrivateMethod" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isMiscellaneous = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("Noop" === n || "Placeholder" === n || "V8IntrinsicIdentifier" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isMixedTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("MixedTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isModuleDeclaration = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ImportDeclaration" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isModuleExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ModuleExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isModuleSpecifier = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ExportSpecifier" === n || "ImportDefaultSpecifier" === n || "ImportNamespaceSpecifier" === n || "ImportSpecifier" === n || "ExportNamespaceSpecifier" === n || "ExportDefaultSpecifier" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNewExpression = function(e, t) {
            if (!e)
                return !1;
            if ("NewExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNoop = function(e, t) {
            if (!e)
                return !1;
            if ("Noop" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNullLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("NullLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNullLiteralTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("NullLiteralTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNullableTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("NullableTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNumberLiteral = function(e, t) {
            if (console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),
            !e)
                return !1;
            if ("NumberLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNumberLiteralTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("NumberLiteralTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNumberTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("NumberTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isNumericLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("NumericLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectMember = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ObjectMethod" === n || "ObjectProperty" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectMethod = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectMethod" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectPattern = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectPattern" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeCallProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeCallProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeIndexer = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeIndexer" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeInternalSlot = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeInternalSlot" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isObjectTypeSpreadProperty = function(e, t) {
            if (!e)
                return !1;
            if ("ObjectTypeSpreadProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isOpaqueType = function(e, t) {
            if (!e)
                return !1;
            if ("OpaqueType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isOptionalCallExpression = function(e, t) {
            if (!e)
                return !1;
            if ("OptionalCallExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isOptionalIndexedAccessType = function(e, t) {
            if (!e)
                return !1;
            if ("OptionalIndexedAccessType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isOptionalMemberExpression = function(e, t) {
            if (!e)
                return !1;
            if ("OptionalMemberExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isParenthesizedExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ParenthesizedExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPattern = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "Placeholder" === n && "Pattern" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPatternLike = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("Identifier" === n || "RestElement" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ObjectPattern" === n || "Placeholder" === n && ("Pattern" === e.expectedNode || "Identifier" === e.expectedNode))
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPipelineBareFunction = function(e, t) {
            if (!e)
                return !1;
            if ("PipelineBareFunction" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPipelinePrimaryTopicReference = function(e, t) {
            if (!e)
                return !1;
            if ("PipelinePrimaryTopicReference" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPipelineTopicExpression = function(e, t) {
            if (!e)
                return !1;
            if ("PipelineTopicExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPlaceholder = function(e, t) {
            if (!e)
                return !1;
            if ("Placeholder" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPrivate = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ClassPrivateProperty" === n || "ClassPrivateMethod" === n || "PrivateName" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPrivateName = function(e, t) {
            if (!e)
                return !1;
            if ("PrivateName" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isProgram = function(e, t) {
            if (!e)
                return !1;
            if ("Program" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isProperty = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ObjectProperty" === n || "ClassProperty" === n || "ClassPrivateProperty" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isPureish = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("FunctionDeclaration" === n || "FunctionExpression" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "ArrowFunctionExpression" === n || "BigIntLiteral" === n || "DecimalLiteral" === n || "Placeholder" === n && "StringLiteral" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isQualifiedTypeIdentifier = function(e, t) {
            if (!e)
                return !1;
            if ("QualifiedTypeIdentifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isRecordExpression = function(e, t) {
            if (!e)
                return !1;
            if ("RecordExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isRegExpLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("RegExpLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isRegexLiteral = function(e, t) {
            if (console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),
            !e)
                return !1;
            if ("RegexLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isRestElement = function(e, t) {
            if (!e)
                return !1;
            if ("RestElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isRestProperty = function(e, t) {
            if (console.trace("The node type RestProperty has been renamed to RestElement"),
            !e)
                return !1;
            if ("RestProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isReturnStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ReturnStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isScopable = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BlockStatement" === n || "CatchClause" === n || "DoWhileStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "Program" === n || "ObjectMethod" === n || "SwitchStatement" === n || "WhileStatement" === n || "ArrowFunctionExpression" === n || "ClassExpression" === n || "ClassDeclaration" === n || "ForOfStatement" === n || "ClassMethod" === n || "ClassPrivateMethod" === n || "StaticBlock" === n || "TSModuleBlock" === n || "Placeholder" === n && "BlockStatement" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSequenceExpression = function(e, t) {
            if (!e)
                return !1;
            if ("SequenceExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSpreadElement = function(e, t) {
            if (!e)
                return !1;
            if ("SpreadElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSpreadProperty = function(e, t) {
            if (console.trace("The node type SpreadProperty has been renamed to SpreadElement"),
            !e)
                return !1;
            if ("SpreadProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStandardized = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ArrayExpression" === n || "AssignmentExpression" === n || "BinaryExpression" === n || "InterpreterDirective" === n || "Directive" === n || "DirectiveLiteral" === n || "BlockStatement" === n || "BreakStatement" === n || "CallExpression" === n || "CatchClause" === n || "ConditionalExpression" === n || "ContinueStatement" === n || "DebuggerStatement" === n || "DoWhileStatement" === n || "EmptyStatement" === n || "ExpressionStatement" === n || "File" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "FunctionExpression" === n || "Identifier" === n || "IfStatement" === n || "LabeledStatement" === n || "StringLiteral" === n || "NumericLiteral" === n || "NullLiteral" === n || "BooleanLiteral" === n || "RegExpLiteral" === n || "LogicalExpression" === n || "MemberExpression" === n || "NewExpression" === n || "Program" === n || "ObjectExpression" === n || "ObjectMethod" === n || "ObjectProperty" === n || "RestElement" === n || "ReturnStatement" === n || "SequenceExpression" === n || "ParenthesizedExpression" === n || "SwitchCase" === n || "SwitchStatement" === n || "ThisExpression" === n || "ThrowStatement" === n || "TryStatement" === n || "UnaryExpression" === n || "UpdateExpression" === n || "VariableDeclaration" === n || "VariableDeclarator" === n || "WhileStatement" === n || "WithStatement" === n || "AssignmentPattern" === n || "ArrayPattern" === n || "ArrowFunctionExpression" === n || "ClassBody" === n || "ClassExpression" === n || "ClassDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ExportSpecifier" === n || "ForOfStatement" === n || "ImportDeclaration" === n || "ImportDefaultSpecifier" === n || "ImportNamespaceSpecifier" === n || "ImportSpecifier" === n || "MetaProperty" === n || "ClassMethod" === n || "ObjectPattern" === n || "SpreadElement" === n || "Super" === n || "TaggedTemplateExpression" === n || "TemplateElement" === n || "TemplateLiteral" === n || "YieldExpression" === n || "AwaitExpression" === n || "Import" === n || "BigIntLiteral" === n || "ExportNamespaceSpecifier" === n || "OptionalMemberExpression" === n || "OptionalCallExpression" === n || "ClassProperty" === n || "ClassPrivateProperty" === n || "ClassPrivateMethod" === n || "PrivateName" === n || "StaticBlock" === n || "Placeholder" === n && ("Identifier" === e.expectedNode || "StringLiteral" === e.expectedNode || "BlockStatement" === e.expectedNode || "ClassBody" === e.expectedNode))
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStatement = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BlockStatement" === n || "BreakStatement" === n || "ContinueStatement" === n || "DebuggerStatement" === n || "DoWhileStatement" === n || "EmptyStatement" === n || "ExpressionStatement" === n || "ForInStatement" === n || "ForStatement" === n || "FunctionDeclaration" === n || "IfStatement" === n || "LabeledStatement" === n || "ReturnStatement" === n || "SwitchStatement" === n || "ThrowStatement" === n || "TryStatement" === n || "VariableDeclaration" === n || "WhileStatement" === n || "WithStatement" === n || "ClassDeclaration" === n || "ExportAllDeclaration" === n || "ExportDefaultDeclaration" === n || "ExportNamedDeclaration" === n || "ForOfStatement" === n || "ImportDeclaration" === n || "DeclareClass" === n || "DeclareFunction" === n || "DeclareInterface" === n || "DeclareModule" === n || "DeclareModuleExports" === n || "DeclareTypeAlias" === n || "DeclareOpaqueType" === n || "DeclareVariable" === n || "DeclareExportDeclaration" === n || "DeclareExportAllDeclaration" === n || "InterfaceDeclaration" === n || "OpaqueType" === n || "TypeAlias" === n || "EnumDeclaration" === n || "TSDeclareFunction" === n || "TSInterfaceDeclaration" === n || "TSTypeAliasDeclaration" === n || "TSEnumDeclaration" === n || "TSModuleDeclaration" === n || "TSImportEqualsDeclaration" === n || "TSExportAssignment" === n || "TSNamespaceExportDeclaration" === n || "Placeholder" === n && ("Statement" === e.expectedNode || "Declaration" === e.expectedNode || "BlockStatement" === e.expectedNode))
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStaticBlock = function(e, t) {
            if (!e)
                return !1;
            if ("StaticBlock" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStringLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("StringLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStringLiteralTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("StringLiteralTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isStringTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("StringTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSuper = function(e, t) {
            if (!e)
                return !1;
            if ("Super" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSwitchCase = function(e, t) {
            if (!e)
                return !1;
            if ("SwitchCase" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSwitchStatement = function(e, t) {
            if (!e)
                return !1;
            if ("SwitchStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isSymbolTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("SymbolTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSAnyKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSAnyKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSArrayType = function(e, t) {
            if (!e)
                return !1;
            if ("TSArrayType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSAsExpression = function(e, t) {
            if (!e)
                return !1;
            if ("TSAsExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSBaseType = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("TSAnyKeyword" === n || "TSBooleanKeyword" === n || "TSBigIntKeyword" === n || "TSIntrinsicKeyword" === n || "TSNeverKeyword" === n || "TSNullKeyword" === n || "TSNumberKeyword" === n || "TSObjectKeyword" === n || "TSStringKeyword" === n || "TSSymbolKeyword" === n || "TSUndefinedKeyword" === n || "TSUnknownKeyword" === n || "TSVoidKeyword" === n || "TSThisType" === n || "TSLiteralType" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSBigIntKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSBigIntKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSBooleanKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSBooleanKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSCallSignatureDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSCallSignatureDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSConditionalType = function(e, t) {
            if (!e)
                return !1;
            if ("TSConditionalType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSConstructSignatureDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSConstructSignatureDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSConstructorType = function(e, t) {
            if (!e)
                return !1;
            if ("TSConstructorType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSDeclareFunction = function(e, t) {
            if (!e)
                return !1;
            if ("TSDeclareFunction" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSDeclareMethod = function(e, t) {
            if (!e)
                return !1;
            if ("TSDeclareMethod" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSEntityName = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("Identifier" === n || "TSQualifiedName" === n || "Placeholder" === n && "Identifier" === e.expectedNode)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSEnumDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSEnumDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSEnumMember = function(e, t) {
            if (!e)
                return !1;
            if ("TSEnumMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSExportAssignment = function(e, t) {
            if (!e)
                return !1;
            if ("TSExportAssignment" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSExpressionWithTypeArguments = function(e, t) {
            if (!e)
                return !1;
            if ("TSExpressionWithTypeArguments" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSExternalModuleReference = function(e, t) {
            if (!e)
                return !1;
            if ("TSExternalModuleReference" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSFunctionType = function(e, t) {
            if (!e)
                return !1;
            if ("TSFunctionType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSImportEqualsDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSImportEqualsDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSImportType = function(e, t) {
            if (!e)
                return !1;
            if ("TSImportType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSIndexSignature = function(e, t) {
            if (!e)
                return !1;
            if ("TSIndexSignature" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSIndexedAccessType = function(e, t) {
            if (!e)
                return !1;
            if ("TSIndexedAccessType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSInferType = function(e, t) {
            if (!e)
                return !1;
            if ("TSInferType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSInterfaceBody = function(e, t) {
            if (!e)
                return !1;
            if ("TSInterfaceBody" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSInterfaceDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSInterfaceDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSIntersectionType = function(e, t) {
            if (!e)
                return !1;
            if ("TSIntersectionType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSIntrinsicKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSIntrinsicKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSLiteralType = function(e, t) {
            if (!e)
                return !1;
            if ("TSLiteralType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSMappedType = function(e, t) {
            if (!e)
                return !1;
            if ("TSMappedType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSMethodSignature = function(e, t) {
            if (!e)
                return !1;
            if ("TSMethodSignature" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSModuleBlock = function(e, t) {
            if (!e)
                return !1;
            if ("TSModuleBlock" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSModuleDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSModuleDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNamedTupleMember = function(e, t) {
            if (!e)
                return !1;
            if ("TSNamedTupleMember" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNamespaceExportDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSNamespaceExportDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNeverKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSNeverKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNonNullExpression = function(e, t) {
            if (!e)
                return !1;
            if ("TSNonNullExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNullKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSNullKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSNumberKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSNumberKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSObjectKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSObjectKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSOptionalType = function(e, t) {
            if (!e)
                return !1;
            if ("TSOptionalType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSParameterProperty = function(e, t) {
            if (!e)
                return !1;
            if ("TSParameterProperty" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSParenthesizedType = function(e, t) {
            if (!e)
                return !1;
            if ("TSParenthesizedType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSPropertySignature = function(e, t) {
            if (!e)
                return !1;
            if ("TSPropertySignature" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSQualifiedName = function(e, t) {
            if (!e)
                return !1;
            if ("TSQualifiedName" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSRestType = function(e, t) {
            if (!e)
                return !1;
            if ("TSRestType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSStringKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSStringKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSSymbolKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSSymbolKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSThisType = function(e, t) {
            if (!e)
                return !1;
            if ("TSThisType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTupleType = function(e, t) {
            if (!e)
                return !1;
            if ("TSTupleType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSType = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("TSAnyKeyword" === n || "TSBooleanKeyword" === n || "TSBigIntKeyword" === n || "TSIntrinsicKeyword" === n || "TSNeverKeyword" === n || "TSNullKeyword" === n || "TSNumberKeyword" === n || "TSObjectKeyword" === n || "TSStringKeyword" === n || "TSSymbolKeyword" === n || "TSUndefinedKeyword" === n || "TSUnknownKeyword" === n || "TSVoidKeyword" === n || "TSThisType" === n || "TSFunctionType" === n || "TSConstructorType" === n || "TSTypeReference" === n || "TSTypePredicate" === n || "TSTypeQuery" === n || "TSTypeLiteral" === n || "TSArrayType" === n || "TSTupleType" === n || "TSOptionalType" === n || "TSRestType" === n || "TSUnionType" === n || "TSIntersectionType" === n || "TSConditionalType" === n || "TSInferType" === n || "TSParenthesizedType" === n || "TSTypeOperator" === n || "TSIndexedAccessType" === n || "TSMappedType" === n || "TSLiteralType" === n || "TSExpressionWithTypeArguments" === n || "TSImportType" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeAliasDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeAliasDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeAssertion = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeAssertion" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeElement = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("TSCallSignatureDeclaration" === n || "TSConstructSignatureDeclaration" === n || "TSPropertySignature" === n || "TSMethodSignature" === n || "TSIndexSignature" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeOperator = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeOperator" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeParameter = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeParameter" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeParameterDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeParameterDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeParameterInstantiation = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeParameterInstantiation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypePredicate = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypePredicate" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeQuery = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeQuery" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSTypeReference = function(e, t) {
            if (!e)
                return !1;
            if ("TSTypeReference" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSUndefinedKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSUndefinedKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSUnionType = function(e, t) {
            if (!e)
                return !1;
            if ("TSUnionType" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSUnknownKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSUnknownKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTSVoidKeyword = function(e, t) {
            if (!e)
                return !1;
            if ("TSVoidKeyword" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTaggedTemplateExpression = function(e, t) {
            if (!e)
                return !1;
            if ("TaggedTemplateExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTemplateElement = function(e, t) {
            if (!e)
                return !1;
            if ("TemplateElement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTemplateLiteral = function(e, t) {
            if (!e)
                return !1;
            if ("TemplateLiteral" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTerminatorless = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("BreakStatement" === n || "ContinueStatement" === n || "ReturnStatement" === n || "ThrowStatement" === n || "YieldExpression" === n || "AwaitExpression" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isThisExpression = function(e, t) {
            if (!e)
                return !1;
            if ("ThisExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isThisTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("ThisTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isThrowStatement = function(e, t) {
            if (!e)
                return !1;
            if ("ThrowStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTopicReference = function(e, t) {
            if (!e)
                return !1;
            if ("TopicReference" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTryStatement = function(e, t) {
            if (!e)
                return !1;
            if ("TryStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTupleExpression = function(e, t) {
            if (!e)
                return !1;
            if ("TupleExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTupleTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("TupleTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeAlias = function(e, t) {
            if (!e)
                return !1;
            if ("TypeAlias" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("TypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeCastExpression = function(e, t) {
            if (!e)
                return !1;
            if ("TypeCastExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeParameter = function(e, t) {
            if (!e)
                return !1;
            if ("TypeParameter" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeParameterDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("TypeParameterDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeParameterInstantiation = function(e, t) {
            if (!e)
                return !1;
            if ("TypeParameterInstantiation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeScript = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("TSParameterProperty" === n || "TSDeclareFunction" === n || "TSDeclareMethod" === n || "TSQualifiedName" === n || "TSCallSignatureDeclaration" === n || "TSConstructSignatureDeclaration" === n || "TSPropertySignature" === n || "TSMethodSignature" === n || "TSIndexSignature" === n || "TSAnyKeyword" === n || "TSBooleanKeyword" === n || "TSBigIntKeyword" === n || "TSIntrinsicKeyword" === n || "TSNeverKeyword" === n || "TSNullKeyword" === n || "TSNumberKeyword" === n || "TSObjectKeyword" === n || "TSStringKeyword" === n || "TSSymbolKeyword" === n || "TSUndefinedKeyword" === n || "TSUnknownKeyword" === n || "TSVoidKeyword" === n || "TSThisType" === n || "TSFunctionType" === n || "TSConstructorType" === n || "TSTypeReference" === n || "TSTypePredicate" === n || "TSTypeQuery" === n || "TSTypeLiteral" === n || "TSArrayType" === n || "TSTupleType" === n || "TSOptionalType" === n || "TSRestType" === n || "TSNamedTupleMember" === n || "TSUnionType" === n || "TSIntersectionType" === n || "TSConditionalType" === n || "TSInferType" === n || "TSParenthesizedType" === n || "TSTypeOperator" === n || "TSIndexedAccessType" === n || "TSMappedType" === n || "TSLiteralType" === n || "TSExpressionWithTypeArguments" === n || "TSInterfaceDeclaration" === n || "TSInterfaceBody" === n || "TSTypeAliasDeclaration" === n || "TSAsExpression" === n || "TSTypeAssertion" === n || "TSEnumDeclaration" === n || "TSEnumMember" === n || "TSModuleDeclaration" === n || "TSModuleBlock" === n || "TSImportType" === n || "TSImportEqualsDeclaration" === n || "TSExternalModuleReference" === n || "TSNonNullExpression" === n || "TSExportAssignment" === n || "TSNamespaceExportDeclaration" === n || "TSTypeAnnotation" === n || "TSTypeParameterInstantiation" === n || "TSTypeParameterDeclaration" === n || "TSTypeParameter" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isTypeofTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("TypeofTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isUnaryExpression = function(e, t) {
            if (!e)
                return !1;
            if ("UnaryExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isUnaryLike = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("UnaryExpression" === n || "SpreadElement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isUnionTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("UnionTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isUpdateExpression = function(e, t) {
            if (!e)
                return !1;
            if ("UpdateExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isUserWhitespacable = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("ObjectMethod" === n || "ObjectProperty" === n || "ObjectTypeInternalSlot" === n || "ObjectTypeCallProperty" === n || "ObjectTypeIndexer" === n || "ObjectTypeProperty" === n || "ObjectTypeSpreadProperty" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isV8IntrinsicIdentifier = function(e, t) {
            if (!e)
                return !1;
            if ("V8IntrinsicIdentifier" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isVariableDeclaration = function(e, t) {
            if (!e)
                return !1;
            if ("VariableDeclaration" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isVariableDeclarator = function(e, t) {
            if (!e)
                return !1;
            if ("VariableDeclarator" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isVariance = function(e, t) {
            if (!e)
                return !1;
            if ("Variance" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isVoidTypeAnnotation = function(e, t) {
            if (!e)
                return !1;
            if ("VoidTypeAnnotation" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isWhile = function(e, t) {
            if (!e)
                return !1;
            var n = e.type;
            if ("DoWhileStatement" === n || "WhileStatement" === n)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isWhileStatement = function(e, t) {
            if (!e)
                return !1;
            if ("WhileStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isWithStatement = function(e, t) {
            if (!e)
                return !1;
            if ("WithStatement" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ,
        t.isYieldExpression = function(e, t) {
            if (!e)
                return !1;
            if ("YieldExpression" === e.type)
                return "undefined" === typeof t || (0,
                r.default)(e, t);
            return !1
        }
        ;
        var r = n(2723)
    },
    2641: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.anyTypeAnnotation = function() {
            return r.default.apply("AnyTypeAnnotation", arguments)
        }
        ,
        t.argumentPlaceholder = function() {
            return r.default.apply("ArgumentPlaceholder", arguments)
        }
        ,
        t.arrayExpression = function(e) {
            return r.default.apply("ArrayExpression", arguments)
        }
        ,
        t.arrayPattern = function(e) {
            return r.default.apply("ArrayPattern", arguments)
        }
        ,
        t.arrayTypeAnnotation = function(e) {
            return r.default.apply("ArrayTypeAnnotation", arguments)
        }
        ,
        t.arrowFunctionExpression = function(e, t, n) {
            return r.default.apply("ArrowFunctionExpression", arguments)
        }
        ,
        t.assignmentExpression = function(e, t, n) {
            return r.default.apply("AssignmentExpression", arguments)
        }
        ,
        t.assignmentPattern = function(e, t) {
            return r.default.apply("AssignmentPattern", arguments)
        }
        ,
        t.awaitExpression = function(e) {
            return r.default.apply("AwaitExpression", arguments)
        }
        ,
        t.bigIntLiteral = function(e) {
            return r.default.apply("BigIntLiteral", arguments)
        }
        ,
        t.binaryExpression = function(e, t, n) {
            return r.default.apply("BinaryExpression", arguments)
        }
        ,
        t.bindExpression = function(e, t) {
            return r.default.apply("BindExpression", arguments)
        }
        ,
        t.blockStatement = function(e, t) {
            return r.default.apply("BlockStatement", arguments)
        }
        ,
        t.booleanLiteral = function(e) {
            return r.default.apply("BooleanLiteral", arguments)
        }
        ,
        t.booleanLiteralTypeAnnotation = function(e) {
            return r.default.apply("BooleanLiteralTypeAnnotation", arguments)
        }
        ,
        t.booleanTypeAnnotation = function() {
            return r.default.apply("BooleanTypeAnnotation", arguments)
        }
        ,
        t.breakStatement = function(e) {
            return r.default.apply("BreakStatement", arguments)
        }
        ,
        t.callExpression = function(e, t) {
            return r.default.apply("CallExpression", arguments)
        }
        ,
        t.catchClause = function(e, t) {
            return r.default.apply("CatchClause", arguments)
        }
        ,
        t.classBody = function(e) {
            return r.default.apply("ClassBody", arguments)
        }
        ,
        t.classDeclaration = function(e, t, n, a) {
            return r.default.apply("ClassDeclaration", arguments)
        }
        ,
        t.classExpression = function(e, t, n, a) {
            return r.default.apply("ClassExpression", arguments)
        }
        ,
        t.classImplements = function(e, t) {
            return r.default.apply("ClassImplements", arguments)
        }
        ,
        t.classMethod = function(e, t, n, a, i, o, s, u) {
            return r.default.apply("ClassMethod", arguments)
        }
        ,
        t.classPrivateMethod = function(e, t, n, a, i) {
            return r.default.apply("ClassPrivateMethod", arguments)
        }
        ,
        t.classPrivateProperty = function(e, t, n, a) {
            return r.default.apply("ClassPrivateProperty", arguments)
        }
        ,
        t.classProperty = function(e, t, n, a, i, o) {
            return r.default.apply("ClassProperty", arguments)
        }
        ,
        t.conditionalExpression = function(e, t, n) {
            return r.default.apply("ConditionalExpression", arguments)
        }
        ,
        t.continueStatement = function(e) {
            return r.default.apply("ContinueStatement", arguments)
        }
        ,
        t.debuggerStatement = function() {
            return r.default.apply("DebuggerStatement", arguments)
        }
        ,
        t.decimalLiteral = function(e) {
            return r.default.apply("DecimalLiteral", arguments)
        }
        ,
        t.declareClass = function(e, t, n, a) {
            return r.default.apply("DeclareClass", arguments)
        }
        ,
        t.declareExportAllDeclaration = function(e) {
            return r.default.apply("DeclareExportAllDeclaration", arguments)
        }
        ,
        t.declareExportDeclaration = function(e, t, n) {
            return r.default.apply("DeclareExportDeclaration", arguments)
        }
        ,
        t.declareFunction = function(e) {
            return r.default.apply("DeclareFunction", arguments)
        }
        ,
        t.declareInterface = function(e, t, n, a) {
            return r.default.apply("DeclareInterface", arguments)
        }
        ,
        t.declareModule = function(e, t, n) {
            return r.default.apply("DeclareModule", arguments)
        }
        ,
        t.declareModuleExports = function(e) {
            return r.default.apply("DeclareModuleExports", arguments)
        }
        ,
        t.declareOpaqueType = function(e, t, n) {
            return r.default.apply("DeclareOpaqueType", arguments)
        }
        ,
        t.declareTypeAlias = function(e, t, n) {
            return r.default.apply("DeclareTypeAlias", arguments)
        }
        ,
        t.declareVariable = function(e) {
            return r.default.apply("DeclareVariable", arguments)
        }
        ,
        t.declaredPredicate = function(e) {
            return r.default.apply("DeclaredPredicate", arguments)
        }
        ,
        t.decorator = function(e) {
            return r.default.apply("Decorator", arguments)
        }
        ,
        t.directive = function(e) {
            return r.default.apply("Directive", arguments)
        }
        ,
        t.directiveLiteral = function(e) {
            return r.default.apply("DirectiveLiteral", arguments)
        }
        ,
        t.doExpression = function(e, t) {
            return r.default.apply("DoExpression", arguments)
        }
        ,
        t.doWhileStatement = function(e, t) {
            return r.default.apply("DoWhileStatement", arguments)
        }
        ,
        t.emptyStatement = function() {
            return r.default.apply("EmptyStatement", arguments)
        }
        ,
        t.emptyTypeAnnotation = function() {
            return r.default.apply("EmptyTypeAnnotation", arguments)
        }
        ,
        t.enumBooleanBody = function(e) {
            return r.default.apply("EnumBooleanBody", arguments)
        }
        ,
        t.enumBooleanMember = function(e) {
            return r.default.apply("EnumBooleanMember", arguments)
        }
        ,
        t.enumDeclaration = function(e, t) {
            return r.default.apply("EnumDeclaration", arguments)
        }
        ,
        t.enumDefaultedMember = function(e) {
            return r.default.apply("EnumDefaultedMember", arguments)
        }
        ,
        t.enumNumberBody = function(e) {
            return r.default.apply("EnumNumberBody", arguments)
        }
        ,
        t.enumNumberMember = function(e, t) {
            return r.default.apply("EnumNumberMember", arguments)
        }
        ,
        t.enumStringBody = function(e) {
            return r.default.apply("EnumStringBody", arguments)
        }
        ,
        t.enumStringMember = function(e, t) {
            return r.default.apply("EnumStringMember", arguments)
        }
        ,
        t.enumSymbolBody = function(e) {
            return r.default.apply("EnumSymbolBody", arguments)
        }
        ,
        t.existsTypeAnnotation = function() {
            return r.default.apply("ExistsTypeAnnotation", arguments)
        }
        ,
        t.exportAllDeclaration = function(e) {
            return r.default.apply("ExportAllDeclaration", arguments)
        }
        ,
        t.exportDefaultDeclaration = function(e) {
            return r.default.apply("ExportDefaultDeclaration", arguments)
        }
        ,
        t.exportDefaultSpecifier = function(e) {
            return r.default.apply("ExportDefaultSpecifier", arguments)
        }
        ,
        t.exportNamedDeclaration = function(e, t, n) {
            return r.default.apply("ExportNamedDeclaration", arguments)
        }
        ,
        t.exportNamespaceSpecifier = function(e) {
            return r.default.apply("ExportNamespaceSpecifier", arguments)
        }
        ,
        t.exportSpecifier = function(e, t) {
            return r.default.apply("ExportSpecifier", arguments)
        }
        ,
        t.expressionStatement = function(e) {
            return r.default.apply("ExpressionStatement", arguments)
        }
        ,
        t.file = function(e, t, n) {
            return r.default.apply("File", arguments)
        }
        ,
        t.forInStatement = function(e, t, n) {
            return r.default.apply("ForInStatement", arguments)
        }
        ,
        t.forOfStatement = function(e, t, n, a) {
            return r.default.apply("ForOfStatement", arguments)
        }
        ,
        t.forStatement = function(e, t, n, a) {
            return r.default.apply("ForStatement", arguments)
        }
        ,
        t.functionDeclaration = function(e, t, n, a, i) {
            return r.default.apply("FunctionDeclaration", arguments)
        }
        ,
        t.functionExpression = function(e, t, n, a, i) {
            return r.default.apply("FunctionExpression", arguments)
        }
        ,
        t.functionTypeAnnotation = function(e, t, n, a) {
            return r.default.apply("FunctionTypeAnnotation", arguments)
        }
        ,
        t.functionTypeParam = function(e, t) {
            return r.default.apply("FunctionTypeParam", arguments)
        }
        ,
        t.genericTypeAnnotation = function(e, t) {
            return r.default.apply("GenericTypeAnnotation", arguments)
        }
        ,
        t.identifier = function(e) {
            return r.default.apply("Identifier", arguments)
        }
        ,
        t.ifStatement = function(e, t, n) {
            return r.default.apply("IfStatement", arguments)
        }
        ,
        t.import = function() {
            return r.default.apply("Import", arguments)
        }
        ,
        t.importAttribute = function(e, t) {
            return r.default.apply("ImportAttribute", arguments)
        }
        ,
        t.importDeclaration = function(e, t) {
            return r.default.apply("ImportDeclaration", arguments)
        }
        ,
        t.importDefaultSpecifier = function(e) {
            return r.default.apply("ImportDefaultSpecifier", arguments)
        }
        ,
        t.importNamespaceSpecifier = function(e) {
            return r.default.apply("ImportNamespaceSpecifier", arguments)
        }
        ,
        t.importSpecifier = function(e, t) {
            return r.default.apply("ImportSpecifier", arguments)
        }
        ,
        t.indexedAccessType = function(e, t) {
            return r.default.apply("IndexedAccessType", arguments)
        }
        ,
        t.inferredPredicate = function() {
            return r.default.apply("InferredPredicate", arguments)
        }
        ,
        t.interfaceDeclaration = function(e, t, n, a) {
            return r.default.apply("InterfaceDeclaration", arguments)
        }
        ,
        t.interfaceExtends = function(e, t) {
            return r.default.apply("InterfaceExtends", arguments)
        }
        ,
        t.interfaceTypeAnnotation = function(e, t) {
            return r.default.apply("InterfaceTypeAnnotation", arguments)
        }
        ,
        t.interpreterDirective = function(e) {
            return r.default.apply("InterpreterDirective", arguments)
        }
        ,
        t.intersectionTypeAnnotation = function(e) {
            return r.default.apply("IntersectionTypeAnnotation", arguments)
        }
        ,
        t.jSXAttribute = t.jsxAttribute = function(e, t) {
            return r.default.apply("JSXAttribute", arguments)
        }
        ,
        t.jSXClosingElement = t.jsxClosingElement = function(e) {
            return r.default.apply("JSXClosingElement", arguments)
        }
        ,
        t.jSXClosingFragment = t.jsxClosingFragment = function() {
            return r.default.apply("JSXClosingFragment", arguments)
        }
        ,
        t.jSXElement = t.jsxElement = function(e, t, n, a) {
            return r.default.apply("JSXElement", arguments)
        }
        ,
        t.jSXEmptyExpression = t.jsxEmptyExpression = function() {
            return r.default.apply("JSXEmptyExpression", arguments)
        }
        ,
        t.jSXExpressionContainer = t.jsxExpressionContainer = function(e) {
            return r.default.apply("JSXExpressionContainer", arguments)
        }
        ,
        t.jSXFragment = t.jsxFragment = function(e, t, n) {
            return r.default.apply("JSXFragment", arguments)
        }
        ,
        t.jSXIdentifier = t.jsxIdentifier = function(e) {
            return r.default.apply("JSXIdentifier", arguments)
        }
        ,
        t.jSXMemberExpression = t.jsxMemberExpression = function(e, t) {
            return r.default.apply("JSXMemberExpression", arguments)
        }
        ,
        t.jSXNamespacedName = t.jsxNamespacedName = function(e, t) {
            return r.default.apply("JSXNamespacedName", arguments)
        }
        ,
        t.jSXOpeningElement = t.jsxOpeningElement = function(e, t, n) {
            return r.default.apply("JSXOpeningElement", arguments)
        }
        ,
        t.jSXOpeningFragment = t.jsxOpeningFragment = function() {
            return r.default.apply("JSXOpeningFragment", arguments)
        }
        ,
        t.jSXSpreadAttribute = t.jsxSpreadAttribute = function(e) {
            return r.default.apply("JSXSpreadAttribute", arguments)
        }
        ,
        t.jSXSpreadChild = t.jsxSpreadChild = function(e) {
            return r.default.apply("JSXSpreadChild", arguments)
        }
        ,
        t.jSXText = t.jsxText = function(e) {
            return r.default.apply("JSXText", arguments)
        }
        ,
        t.labeledStatement = function(e, t) {
            return r.default.apply("LabeledStatement", arguments)
        }
        ,
        t.logicalExpression = function(e, t, n) {
            return r.default.apply("LogicalExpression", arguments)
        }
        ,
        t.memberExpression = function(e, t, n, a) {
            return r.default.apply("MemberExpression", arguments)
        }
        ,
        t.metaProperty = function(e, t) {
            return r.default.apply("MetaProperty", arguments)
        }
        ,
        t.mixedTypeAnnotation = function() {
            return r.default.apply("MixedTypeAnnotation", arguments)
        }
        ,
        t.moduleExpression = function(e) {
            return r.default.apply("ModuleExpression", arguments)
        }
        ,
        t.newExpression = function(e, t) {
            return r.default.apply("NewExpression", arguments)
        }
        ,
        t.noop = function() {
            return r.default.apply("Noop", arguments)
        }
        ,
        t.nullLiteral = function() {
            return r.default.apply("NullLiteral", arguments)
        }
        ,
        t.nullLiteralTypeAnnotation = function() {
            return r.default.apply("NullLiteralTypeAnnotation", arguments)
        }
        ,
        t.nullableTypeAnnotation = function(e) {
            return r.default.apply("NullableTypeAnnotation", arguments)
        }
        ,
        t.numberLiteral = function(e) {
            return console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),
            r.default.apply("NumberLiteral", arguments)
        }
        ,
        t.numberLiteralTypeAnnotation = function(e) {
            return r.default.apply("NumberLiteralTypeAnnotation", arguments)
        }
        ,
        t.numberTypeAnnotation = function() {
            return r.default.apply("NumberTypeAnnotation", arguments)
        }
        ,
        t.numericLiteral = function(e) {
            return r.default.apply("NumericLiteral", arguments)
        }
        ,
        t.objectExpression = function(e) {
            return r.default.apply("ObjectExpression", arguments)
        }
        ,
        t.objectMethod = function(e, t, n, a, i, o, s) {
            return r.default.apply("ObjectMethod", arguments)
        }
        ,
        t.objectPattern = function(e) {
            return r.default.apply("ObjectPattern", arguments)
        }
        ,
        t.objectProperty = function(e, t, n, a, i) {
            return r.default.apply("ObjectProperty", arguments)
        }
        ,
        t.objectTypeAnnotation = function(e, t, n, a, i) {
            return r.default.apply("ObjectTypeAnnotation", arguments)
        }
        ,
        t.objectTypeCallProperty = function(e) {
            return r.default.apply("ObjectTypeCallProperty", arguments)
        }
        ,
        t.objectTypeIndexer = function(e, t, n, a) {
            return r.default.apply("ObjectTypeIndexer", arguments)
        }
        ,
        t.objectTypeInternalSlot = function(e, t, n, a, i) {
            return r.default.apply("ObjectTypeInternalSlot", arguments)
        }
        ,
        t.objectTypeProperty = function(e, t, n) {
            return r.default.apply("ObjectTypeProperty", arguments)
        }
        ,
        t.objectTypeSpreadProperty = function(e) {
            return r.default.apply("ObjectTypeSpreadProperty", arguments)
        }
        ,
        t.opaqueType = function(e, t, n, a) {
            return r.default.apply("OpaqueType", arguments)
        }
        ,
        t.optionalCallExpression = function(e, t, n) {
            return r.default.apply("OptionalCallExpression", arguments)
        }
        ,
        t.optionalIndexedAccessType = function(e, t) {
            return r.default.apply("OptionalIndexedAccessType", arguments)
        }
        ,
        t.optionalMemberExpression = function(e, t, n, a) {
            return r.default.apply("OptionalMemberExpression", arguments)
        }
        ,
        t.parenthesizedExpression = function(e) {
            return r.default.apply("ParenthesizedExpression", arguments)
        }
        ,
        t.pipelineBareFunction = function(e) {
            return r.default.apply("PipelineBareFunction", arguments)
        }
        ,
        t.pipelinePrimaryTopicReference = function() {
            return r.default.apply("PipelinePrimaryTopicReference", arguments)
        }
        ,
        t.pipelineTopicExpression = function(e) {
            return r.default.apply("PipelineTopicExpression", arguments)
        }
        ,
        t.placeholder = function(e, t) {
            return r.default.apply("Placeholder", arguments)
        }
        ,
        t.privateName = function(e) {
            return r.default.apply("PrivateName", arguments)
        }
        ,
        t.program = function(e, t, n, a) {
            return r.default.apply("Program", arguments)
        }
        ,
        t.qualifiedTypeIdentifier = function(e, t) {
            return r.default.apply("QualifiedTypeIdentifier", arguments)
        }
        ,
        t.recordExpression = function(e) {
            return r.default.apply("RecordExpression", arguments)
        }
        ,
        t.regExpLiteral = function(e, t) {
            return r.default.apply("RegExpLiteral", arguments)
        }
        ,
        t.regexLiteral = function(e, t) {
            return console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),
            r.default.apply("RegexLiteral", arguments)
        }
        ,
        t.restElement = function(e) {
            return r.default.apply("RestElement", arguments)
        }
        ,
        t.restProperty = function(e) {
            return console.trace("The node type RestProperty has been renamed to RestElement"),
            r.default.apply("RestProperty", arguments)
        }
        ,
        t.returnStatement = function(e) {
            return r.default.apply("ReturnStatement", arguments)
        }
        ,
        t.sequenceExpression = function(e) {
            return r.default.apply("SequenceExpression", arguments)
        }
        ,
        t.spreadElement = function(e) {
            return r.default.apply("SpreadElement", arguments)
        }
        ,
        t.spreadProperty = function(e) {
            return console.trace("The node type SpreadProperty has been renamed to SpreadElement"),
            r.default.apply("SpreadProperty", arguments)
        }
        ,
        t.staticBlock = function(e) {
            return r.default.apply("StaticBlock", arguments)
        }
        ,
        t.stringLiteral = function(e) {
            return r.default.apply("StringLiteral", arguments)
        }
        ,
        t.stringLiteralTypeAnnotation = function(e) {
            return r.default.apply("StringLiteralTypeAnnotation", arguments)
        }
        ,
        t.stringTypeAnnotation = function() {
            return r.default.apply("StringTypeAnnotation", arguments)
        }
        ,
        t.super = function() {
            return r.default.apply("Super", arguments)
        }
        ,
        t.switchCase = function(e, t) {
            return r.default.apply("SwitchCase", arguments)
        }
        ,
        t.switchStatement = function(e, t) {
            return r.default.apply("SwitchStatement", arguments)
        }
        ,
        t.symbolTypeAnnotation = function() {
            return r.default.apply("SymbolTypeAnnotation", arguments)
        }
        ,
        t.taggedTemplateExpression = function(e, t) {
            return r.default.apply("TaggedTemplateExpression", arguments)
        }
        ,
        t.templateElement = function(e, t) {
            return r.default.apply("TemplateElement", arguments)
        }
        ,
        t.templateLiteral = function(e, t) {
            return r.default.apply("TemplateLiteral", arguments)
        }
        ,
        t.thisExpression = function() {
            return r.default.apply("ThisExpression", arguments)
        }
        ,
        t.thisTypeAnnotation = function() {
            return r.default.apply("ThisTypeAnnotation", arguments)
        }
        ,
        t.throwStatement = function(e) {
            return r.default.apply("ThrowStatement", arguments)
        }
        ,
        t.topicReference = function() {
            return r.default.apply("TopicReference", arguments)
        }
        ,
        t.tryStatement = function(e, t, n) {
            return r.default.apply("TryStatement", arguments)
        }
        ,
        t.tSAnyKeyword = t.tsAnyKeyword = function() {
            return r.default.apply("TSAnyKeyword", arguments)
        }
        ,
        t.tSArrayType = t.tsArrayType = function(e) {
            return r.default.apply("TSArrayType", arguments)
        }
        ,
        t.tSAsExpression = t.tsAsExpression = function(e, t) {
            return r.default.apply("TSAsExpression", arguments)
        }
        ,
        t.tSBigIntKeyword = t.tsBigIntKeyword = function() {
            return r.default.apply("TSBigIntKeyword", arguments)
        }
        ,
        t.tSBooleanKeyword = t.tsBooleanKeyword = function() {
            return r.default.apply("TSBooleanKeyword", arguments)
        }
        ,
        t.tSCallSignatureDeclaration = t.tsCallSignatureDeclaration = function(e, t, n) {
            return r.default.apply("TSCallSignatureDeclaration", arguments)
        }
        ,
        t.tSConditionalType = t.tsConditionalType = function(e, t, n, a) {
            return r.default.apply("TSConditionalType", arguments)
        }
        ,
        t.tSConstructSignatureDeclaration = t.tsConstructSignatureDeclaration = function(e, t, n) {
            return r.default.apply("TSConstructSignatureDeclaration", arguments)
        }
        ,
        t.tSConstructorType = t.tsConstructorType = function(e, t, n) {
            return r.default.apply("TSConstructorType", arguments)
        }
        ,
        t.tSDeclareFunction = t.tsDeclareFunction = function(e, t, n, a) {
            return r.default.apply("TSDeclareFunction", arguments)
        }
        ,
        t.tSDeclareMethod = t.tsDeclareMethod = function(e, t, n, a, i) {
            return r.default.apply("TSDeclareMethod", arguments)
        }
        ,
        t.tSEnumDeclaration = t.tsEnumDeclaration = function(e, t) {
            return r.default.apply("TSEnumDeclaration", arguments)
        }
        ,
        t.tSEnumMember = t.tsEnumMember = function(e, t) {
            return r.default.apply("TSEnumMember", arguments)
        }
        ,
        t.tSExportAssignment = t.tsExportAssignment = function(e) {
            return r.default.apply("TSExportAssignment", arguments)
        }
        ,
        t.tSExpressionWithTypeArguments = t.tsExpressionWithTypeArguments = function(e, t) {
            return r.default.apply("TSExpressionWithTypeArguments", arguments)
        }
        ,
        t.tSExternalModuleReference = t.tsExternalModuleReference = function(e) {
            return r.default.apply("TSExternalModuleReference", arguments)
        }
        ,
        t.tSFunctionType = t.tsFunctionType = function(e, t, n) {
            return r.default.apply("TSFunctionType", arguments)
        }
        ,
        t.tSImportEqualsDeclaration = t.tsImportEqualsDeclaration = function(e, t) {
            return r.default.apply("TSImportEqualsDeclaration", arguments)
        }
        ,
        t.tSImportType = t.tsImportType = function(e, t, n) {
            return r.default.apply("TSImportType", arguments)
        }
        ,
        t.tSIndexSignature = t.tsIndexSignature = function(e, t) {
            return r.default.apply("TSIndexSignature", arguments)
        }
        ,
        t.tSIndexedAccessType = t.tsIndexedAccessType = function(e, t) {
            return r.default.apply("TSIndexedAccessType", arguments)
        }
        ,
        t.tSInferType = t.tsInferType = function(e) {
            return r.default.apply("TSInferType", arguments)
        }
        ,
        t.tSInterfaceBody = t.tsInterfaceBody = function(e) {
            return r.default.apply("TSInterfaceBody", arguments)
        }
        ,
        t.tSInterfaceDeclaration = t.tsInterfaceDeclaration = function(e, t, n, a) {
            return r.default.apply("TSInterfaceDeclaration", arguments)
        }
        ,
        t.tSIntersectionType = t.tsIntersectionType = function(e) {
            return r.default.apply("TSIntersectionType", arguments)
        }
        ,
        t.tSIntrinsicKeyword = t.tsIntrinsicKeyword = function() {
            return r.default.apply("TSIntrinsicKeyword", arguments)
        }
        ,
        t.tSLiteralType = t.tsLiteralType = function(e) {
            return r.default.apply("TSLiteralType", arguments)
        }
        ,
        t.tSMappedType = t.tsMappedType = function(e, t, n) {
            return r.default.apply("TSMappedType", arguments)
        }
        ,
        t.tSMethodSignature = t.tsMethodSignature = function(e, t, n, a) {
            return r.default.apply("TSMethodSignature", arguments)
        }
        ,
        t.tSModuleBlock = t.tsModuleBlock = function(e) {
            return r.default.apply("TSModuleBlock", arguments)
        }
        ,
        t.tSModuleDeclaration = t.tsModuleDeclaration = function(e, t) {
            return r.default.apply("TSModuleDeclaration", arguments)
        }
        ,
        t.tSNamedTupleMember = t.tsNamedTupleMember = function(e, t, n) {
            return r.default.apply("TSNamedTupleMember", arguments)
        }
        ,
        t.tSNamespaceExportDeclaration = t.tsNamespaceExportDeclaration = function(e) {
            return r.default.apply("TSNamespaceExportDeclaration", arguments)
        }
        ,
        t.tSNeverKeyword = t.tsNeverKeyword = function() {
            return r.default.apply("TSNeverKeyword", arguments)
        }
        ,
        t.tSNonNullExpression = t.tsNonNullExpression = function(e) {
            return r.default.apply("TSNonNullExpression", arguments)
        }
        ,
        t.tSNullKeyword = t.tsNullKeyword = function() {
            return r.default.apply("TSNullKeyword", arguments)
        }
        ,
        t.tSNumberKeyword = t.tsNumberKeyword = function() {
            return r.default.apply("TSNumberKeyword", arguments)
        }
        ,
        t.tSObjectKeyword = t.tsObjectKeyword = function() {
            return r.default.apply("TSObjectKeyword", arguments)
        }
        ,
        t.tSOptionalType = t.tsOptionalType = function(e) {
            return r.default.apply("TSOptionalType", arguments)
        }
        ,
        t.tSParameterProperty = t.tsParameterProperty = function(e) {
            return r.default.apply("TSParameterProperty", arguments)
        }
        ,
        t.tSParenthesizedType = t.tsParenthesizedType = function(e) {
            return r.default.apply("TSParenthesizedType", arguments)
        }
        ,
        t.tSPropertySignature = t.tsPropertySignature = function(e, t, n) {
            return r.default.apply("TSPropertySignature", arguments)
        }
        ,
        t.tSQualifiedName = t.tsQualifiedName = function(e, t) {
            return r.default.apply("TSQualifiedName", arguments)
        }
        ,
        t.tSRestType = t.tsRestType = function(e) {
            return r.default.apply("TSRestType", arguments)
        }
        ,
        t.tSStringKeyword = t.tsStringKeyword = function() {
            return r.default.apply("TSStringKeyword", arguments)
        }
        ,
        t.tSSymbolKeyword = t.tsSymbolKeyword = function() {
            return r.default.apply("TSSymbolKeyword", arguments)
        }
        ,
        t.tSThisType = t.tsThisType = function() {
            return r.default.apply("TSThisType", arguments)
        }
        ,
        t.tSTupleType = t.tsTupleType = function(e) {
            return r.default.apply("TSTupleType", arguments)
        }
        ,
        t.tSTypeAliasDeclaration = t.tsTypeAliasDeclaration = function(e, t, n) {
            return r.default.apply("TSTypeAliasDeclaration", arguments)
        }
        ,
        t.tSTypeAnnotation = t.tsTypeAnnotation = function(e) {
            return r.default.apply("TSTypeAnnotation", arguments)
        }
        ,
        t.tSTypeAssertion = t.tsTypeAssertion = function(e, t) {
            return r.default.apply("TSTypeAssertion", arguments)
        }
        ,
        t.tSTypeLiteral = t.tsTypeLiteral = function(e) {
            return r.default.apply("TSTypeLiteral", arguments)
        }
        ,
        t.tSTypeOperator = t.tsTypeOperator = function(e) {
            return r.default.apply("TSTypeOperator", arguments)
        }
        ,
        t.tSTypeParameter = t.tsTypeParameter = function(e, t, n) {
            return r.default.apply("TSTypeParameter", arguments)
        }
        ,
        t.tSTypeParameterDeclaration = t.tsTypeParameterDeclaration = function(e) {
            return r.default.apply("TSTypeParameterDeclaration", arguments)
        }
        ,
        t.tSTypeParameterInstantiation = t.tsTypeParameterInstantiation = function(e) {
            return r.default.apply("TSTypeParameterInstantiation", arguments)
        }
        ,
        t.tSTypePredicate = t.tsTypePredicate = function(e, t, n) {
            return r.default.apply("TSTypePredicate", arguments)
        }
        ,
        t.tSTypeQuery = t.tsTypeQuery = function(e) {
            return r.default.apply("TSTypeQuery", arguments)
        }
        ,
        t.tSTypeReference = t.tsTypeReference = function(e, t) {
            return r.default.apply("TSTypeReference", arguments)
        }
        ,
        t.tSUndefinedKeyword = t.tsUndefinedKeyword = function() {
            return r.default.apply("TSUndefinedKeyword", arguments)
        }
        ,
        t.tSUnionType = t.tsUnionType = function(e) {
            return r.default.apply("TSUnionType", arguments)
        }
        ,
        t.tSUnknownKeyword = t.tsUnknownKeyword = function() {
            return r.default.apply("TSUnknownKeyword", arguments)
        }
        ,
        t.tSVoidKeyword = t.tsVoidKeyword = function() {
            return r.default.apply("TSVoidKeyword", arguments)
        }
        ,
        t.tupleExpression = function(e) {
            return r.default.apply("TupleExpression", arguments)
        }
        ,
        t.tupleTypeAnnotation = function(e) {
            return r.default.apply("TupleTypeAnnotation", arguments)
        }
        ,
        t.typeAlias = function(e, t, n) {
            return r.default.apply("TypeAlias", arguments)
        }
        ,
        t.typeAnnotation = function(e) {
            return r.default.apply("TypeAnnotation", arguments)
        }
        ,
        t.typeCastExpression = function(e, t) {
            return r.default.apply("TypeCastExpression", arguments)
        }
        ,
        t.typeParameter = function(e, t, n) {
            return r.default.apply("TypeParameter", arguments)
        }
        ,
        t.typeParameterDeclaration = function(e) {
            return r.default.apply("TypeParameterDeclaration", arguments)
        }
        ,
        t.typeParameterInstantiation = function(e) {
            return r.default.apply("TypeParameterInstantiation", arguments)
        }
        ,
        t.typeofTypeAnnotation = function(e) {
            return r.default.apply("TypeofTypeAnnotation", arguments)
        }
        ,
        t.unaryExpression = function(e, t, n) {
            return r.default.apply("UnaryExpression", arguments)
        }
        ,
        t.unionTypeAnnotation = function(e) {
            return r.default.apply("UnionTypeAnnotation", arguments)
        }
        ,
        t.updateExpression = function(e, t, n) {
            return r.default.apply("UpdateExpression", arguments)
        }
        ,
        t.v8IntrinsicIdentifier = function(e) {
            return r.default.apply("V8IntrinsicIdentifier", arguments)
        }
        ,
        t.variableDeclaration = function(e, t) {
            return r.default.apply("VariableDeclaration", arguments)
        }
        ,
        t.variableDeclarator = function(e, t) {
            return r.default.apply("VariableDeclarator", arguments)
        }
        ,
        t.variance = function(e) {
            return r.default.apply("Variance", arguments)
        }
        ,
        t.voidTypeAnnotation = function() {
            return r.default.apply("VoidTypeAnnotation", arguments)
        }
        ,
        t.whileStatement = function(e, t) {
            return r.default.apply("WhileStatement", arguments)
        }
        ,
        t.withStatement = function(e, t) {
            return r.default.apply("WithStatement", arguments)
        }
        ,
        t.yieldExpression = function(e, t) {
            return r.default.apply("YieldExpression", arguments)
        }
        ;
        var r = n(3148)
    },
    2642: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.anyTypeAnnotation = function() {
            return r.default.apply("AnyTypeAnnotation", arguments)
        }
        ,
        t.argumentPlaceholder = function() {
            return r.default.apply("ArgumentPlaceholder", arguments)
        }
        ,
        t.arrayExpression = function(e) {
            return r.default.apply("ArrayExpression", arguments)
        }
        ,
        t.arrayPattern = function(e) {
            return r.default.apply("ArrayPattern", arguments)
        }
        ,
        t.arrayTypeAnnotation = function(e) {
            return r.default.apply("ArrayTypeAnnotation", arguments)
        }
        ,
        t.arrowFunctionExpression = function(e, t, n) {
            return r.default.apply("ArrowFunctionExpression", arguments)
        }
        ,
        t.assignmentExpression = function(e, t, n) {
            return r.default.apply("AssignmentExpression", arguments)
        }
        ,
        t.assignmentPattern = function(e, t) {
            return r.default.apply("AssignmentPattern", arguments)
        }
        ,
        t.awaitExpression = function(e) {
            return r.default.apply("AwaitExpression", arguments)
        }
        ,
        t.bigIntLiteral = function(e) {
            return r.default.apply("BigIntLiteral", arguments)
        }
        ,
        t.binaryExpression = function(e, t, n) {
            return r.default.apply("BinaryExpression", arguments)
        }
        ,
        t.bindExpression = function(e, t) {
            return r.default.apply("BindExpression", arguments)
        }
        ,
        t.blockStatement = function(e, t) {
            return r.default.apply("BlockStatement", arguments)
        }
        ,
        t.booleanLiteral = function(e) {
            return r.default.apply("BooleanLiteral", arguments)
        }
        ,
        t.booleanLiteralTypeAnnotation = function(e) {
            return r.default.apply("BooleanLiteralTypeAnnotation", arguments)
        }
        ,
        t.booleanTypeAnnotation = function() {
            return r.default.apply("BooleanTypeAnnotation", arguments)
        }
        ,
        t.breakStatement = function(e) {
            return r.default.apply("BreakStatement", arguments)
        }
        ,
        t.callExpression = function(e, t) {
            return r.default.apply("CallExpression", arguments)
        }
        ,
        t.catchClause = function(e, t) {
            return r.default.apply("CatchClause", arguments)
        }
        ,
        t.classBody = function(e) {
            return r.default.apply("ClassBody", arguments)
        }
        ,
        t.classDeclaration = function(e, t, n, a) {
            return r.default.apply("ClassDeclaration", arguments)
        }
        ,
        t.classExpression = function(e, t, n, a) {
            return r.default.apply("ClassExpression", arguments)
        }
        ,
        t.classImplements = function(e, t) {
            return r.default.apply("ClassImplements", arguments)
        }
        ,
        t.classMethod = function(e, t, n, a, i, o, s, u) {
            return r.default.apply("ClassMethod", arguments)
        }
        ,
        t.classPrivateMethod = function(e, t, n, a, i) {
            return r.default.apply("ClassPrivateMethod", arguments)
        }
        ,
        t.classPrivateProperty = function(e, t, n, a) {
            return r.default.apply("ClassPrivateProperty", arguments)
        }
        ,
        t.classProperty = function(e, t, n, a, i, o) {
            return r.default.apply("ClassProperty", arguments)
        }
        ,
        t.conditionalExpression = function(e, t, n) {
            return r.default.apply("ConditionalExpression", arguments)
        }
        ,
        t.continueStatement = function(e) {
            return r.default.apply("ContinueStatement", arguments)
        }
        ,
        t.debuggerStatement = function() {
            return r.default.apply("DebuggerStatement", arguments)
        }
        ,
        t.decimalLiteral = function(e) {
            return r.default.apply("DecimalLiteral", arguments)
        }
        ,
        t.declareClass = function(e, t, n, a) {
            return r.default.apply("DeclareClass", arguments)
        }
        ,
        t.declareExportAllDeclaration = function(e) {
            return r.default.apply("DeclareExportAllDeclaration", arguments)
        }
        ,
        t.declareExportDeclaration = function(e, t, n) {
            return r.default.apply("DeclareExportDeclaration", arguments)
        }
        ,
        t.declareFunction = function(e) {
            return r.default.apply("DeclareFunction", arguments)
        }
        ,
        t.declareInterface = function(e, t, n, a) {
            return r.default.apply("DeclareInterface", arguments)
        }
        ,
        t.declareModule = function(e, t, n) {
            return r.default.apply("DeclareModule", arguments)
        }
        ,
        t.declareModuleExports = function(e) {
            return r.default.apply("DeclareModuleExports", arguments)
        }
        ,
        t.declareOpaqueType = function(e, t, n) {
            return r.default.apply("DeclareOpaqueType", arguments)
        }
        ,
        t.declareTypeAlias = function(e, t, n) {
            return r.default.apply("DeclareTypeAlias", arguments)
        }
        ,
        t.declareVariable = function(e) {
            return r.default.apply("DeclareVariable", arguments)
        }
        ,
        t.declaredPredicate = function(e) {
            return r.default.apply("DeclaredPredicate", arguments)
        }
        ,
        t.decorator = function(e) {
            return r.default.apply("Decorator", arguments)
        }
        ,
        t.directive = function(e) {
            return r.default.apply("Directive", arguments)
        }
        ,
        t.directiveLiteral = function(e) {
            return r.default.apply("DirectiveLiteral", arguments)
        }
        ,
        t.doExpression = function(e, t) {
            return r.default.apply("DoExpression", arguments)
        }
        ,
        t.doWhileStatement = function(e, t) {
            return r.default.apply("DoWhileStatement", arguments)
        }
        ,
        t.emptyStatement = function() {
            return r.default.apply("EmptyStatement", arguments)
        }
        ,
        t.emptyTypeAnnotation = function() {
            return r.default.apply("EmptyTypeAnnotation", arguments)
        }
        ,
        t.enumBooleanBody = function(e) {
            return r.default.apply("EnumBooleanBody", arguments)
        }
        ,
        t.enumBooleanMember = function(e) {
            return r.default.apply("EnumBooleanMember", arguments)
        }
        ,
        t.enumDeclaration = function(e, t) {
            return r.default.apply("EnumDeclaration", arguments)
        }
        ,
        t.enumDefaultedMember = function(e) {
            return r.default.apply("EnumDefaultedMember", arguments)
        }
        ,
        t.enumNumberBody = function(e) {
            return r.default.apply("EnumNumberBody", arguments)
        }
        ,
        t.enumNumberMember = function(e, t) {
            return r.default.apply("EnumNumberMember", arguments)
        }
        ,
        t.enumStringBody = function(e) {
            return r.default.apply("EnumStringBody", arguments)
        }
        ,
        t.enumStringMember = function(e, t) {
            return r.default.apply("EnumStringMember", arguments)
        }
        ,
        t.enumSymbolBody = function(e) {
            return r.default.apply("EnumSymbolBody", arguments)
        }
        ,
        t.existsTypeAnnotation = function() {
            return r.default.apply("ExistsTypeAnnotation", arguments)
        }
        ,
        t.exportAllDeclaration = function(e) {
            return r.default.apply("ExportAllDeclaration", arguments)
        }
        ,
        t.exportDefaultDeclaration = function(e) {
            return r.default.apply("ExportDefaultDeclaration", arguments)
        }
        ,
        t.exportDefaultSpecifier = function(e) {
            return r.default.apply("ExportDefaultSpecifier", arguments)
        }
        ,
        t.exportNamedDeclaration = function(e, t, n) {
            return r.default.apply("ExportNamedDeclaration", arguments)
        }
        ,
        t.exportNamespaceSpecifier = function(e) {
            return r.default.apply("ExportNamespaceSpecifier", arguments)
        }
        ,
        t.exportSpecifier = function(e, t) {
            return r.default.apply("ExportSpecifier", arguments)
        }
        ,
        t.expressionStatement = function(e) {
            return r.default.apply("ExpressionStatement", arguments)
        }
        ,
        t.file = function(e, t, n) {
            return r.default.apply("File", arguments)
        }
        ,
        t.forInStatement = function(e, t, n) {
            return r.default.apply("ForInStatement", arguments)
        }
        ,
        t.forOfStatement = function(e, t, n, a) {
            return r.default.apply("ForOfStatement", arguments)
        }
        ,
        t.forStatement = function(e, t, n, a) {
            return r.default.apply("ForStatement", arguments)
        }
        ,
        t.functionDeclaration = function(e, t, n, a, i) {
            return r.default.apply("FunctionDeclaration", arguments)
        }
        ,
        t.functionExpression = function(e, t, n, a, i) {
            return r.default.apply("FunctionExpression", arguments)
        }
        ,
        t.functionTypeAnnotation = function(e, t, n, a) {
            return r.default.apply("FunctionTypeAnnotation", arguments)
        }
        ,
        t.functionTypeParam = function(e, t) {
            return r.default.apply("FunctionTypeParam", arguments)
        }
        ,
        t.genericTypeAnnotation = function(e, t) {
            return r.default.apply("GenericTypeAnnotation", arguments)
        }
        ,
        t.identifier = function(e) {
            return r.default.apply("Identifier", arguments)
        }
        ,
        t.ifStatement = function(e, t, n) {
            return r.default.apply("IfStatement", arguments)
        }
        ,
        t.import = function() {
            return r.default.apply("Import", arguments)
        }
        ,
        t.importAttribute = function(e, t) {
            return r.default.apply("ImportAttribute", arguments)
        }
        ,
        t.importDeclaration = function(e, t) {
            return r.default.apply("ImportDeclaration", arguments)
        }
        ,
        t.importDefaultSpecifier = function(e) {
            return r.default.apply("ImportDefaultSpecifier", arguments)
        }
        ,
        t.importNamespaceSpecifier = function(e) {
            return r.default.apply("ImportNamespaceSpecifier", arguments)
        }
        ,
        t.importSpecifier = function(e, t) {
            return r.default.apply("ImportSpecifier", arguments)
        }
        ,
        t.indexedAccessType = function(e, t) {
            return r.default.apply("IndexedAccessType", arguments)
        }
        ,
        t.inferredPredicate = function() {
            return r.default.apply("InferredPredicate", arguments)
        }
        ,
        t.interfaceDeclaration = function(e, t, n, a) {
            return r.default.apply("InterfaceDeclaration", arguments)
        }
        ,
        t.interfaceExtends = function(e, t) {
            return r.default.apply("InterfaceExtends", arguments)
        }
        ,
        t.interfaceTypeAnnotation = function(e, t) {
            return r.default.apply("InterfaceTypeAnnotation", arguments)
        }
        ,
        t.interpreterDirective = function(e) {
            return r.default.apply("InterpreterDirective", arguments)
        }
        ,
        t.intersectionTypeAnnotation = function(e) {
            return r.default.apply("IntersectionTypeAnnotation", arguments)
        }
        ,
        t.jSXAttribute = t.jsxAttribute = function(e, t) {
            return r.default.apply("JSXAttribute", arguments)
        }
        ,
        t.jSXClosingElement = t.jsxClosingElement = function(e) {
            return r.default.apply("JSXClosingElement", arguments)
        }
        ,
        t.jSXClosingFragment = t.jsxClosingFragment = function() {
            return r.default.apply("JSXClosingFragment", arguments)
        }
        ,
        t.jSXElement = t.jsxElement = function(e, t, n, a) {
            return r.default.apply("JSXElement", arguments)
        }
        ,
        t.jSXEmptyExpression = t.jsxEmptyExpression = function() {
            return r.default.apply("JSXEmptyExpression", arguments)
        }
        ,
        t.jSXExpressionContainer = t.jsxExpressionContainer = function(e) {
            return r.default.apply("JSXExpressionContainer", arguments)
        }
        ,
        t.jSXFragment = t.jsxFragment = function(e, t, n) {
            return r.default.apply("JSXFragment", arguments)
        }
        ,
        t.jSXIdentifier = t.jsxIdentifier = function(e) {
            return r.default.apply("JSXIdentifier", arguments)
        }
        ,
        t.jSXMemberExpression = t.jsxMemberExpression = function(e, t) {
            return r.default.apply("JSXMemberExpression", arguments)
        }
        ,
        t.jSXNamespacedName = t.jsxNamespacedName = function(e, t) {
            return r.default.apply("JSXNamespacedName", arguments)
        }
        ,
        t.jSXOpeningElement = t.jsxOpeningElement = function(e, t, n) {
            return r.default.apply("JSXOpeningElement", arguments)
        }
        ,
        t.jSXOpeningFragment = t.jsxOpeningFragment = function() {
            return r.default.apply("JSXOpeningFragment", arguments)
        }
        ,
        t.jSXSpreadAttribute = t.jsxSpreadAttribute = function(e) {
            return r.default.apply("JSXSpreadAttribute", arguments)
        }
        ,
        t.jSXSpreadChild = t.jsxSpreadChild = function(e) {
            return r.default.apply("JSXSpreadChild", arguments)
        }
        ,
        t.jSXText = t.jsxText = function(e) {
            return r.default.apply("JSXText", arguments)
        }
        ,
        t.labeledStatement = function(e, t) {
            return r.default.apply("LabeledStatement", arguments)
        }
        ,
        t.logicalExpression = function(e, t, n) {
            return r.default.apply("LogicalExpression", arguments)
        }
        ,
        t.memberExpression = function(e, t, n, a) {
            return r.default.apply("MemberExpression", arguments)
        }
        ,
        t.metaProperty = function(e, t) {
            return r.default.apply("MetaProperty", arguments)
        }
        ,
        t.mixedTypeAnnotation = function() {
            return r.default.apply("MixedTypeAnnotation", arguments)
        }
        ,
        t.moduleExpression = function(e) {
            return r.default.apply("ModuleExpression", arguments)
        }
        ,
        t.newExpression = function(e, t) {
            return r.default.apply("NewExpression", arguments)
        }
        ,
        t.noop = function() {
            return r.default.apply("Noop", arguments)
        }
        ,
        t.nullLiteral = function() {
            return r.default.apply("NullLiteral", arguments)
        }
        ,
        t.nullLiteralTypeAnnotation = function() {
            return r.default.apply("NullLiteralTypeAnnotation", arguments)
        }
        ,
        t.nullableTypeAnnotation = function(e) {
            return r.default.apply("NullableTypeAnnotation", arguments)
        }
        ,
        t.numberLiteral = function(e) {
            return console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),
            r.default.apply("NumberLiteral", arguments)
        }
        ,
        t.numberLiteralTypeAnnotation = function(e) {
            return r.default.apply("NumberLiteralTypeAnnotation", arguments)
        }
        ,
        t.numberTypeAnnotation = function() {
            return r.default.apply("NumberTypeAnnotation", arguments)
        }
        ,
        t.numericLiteral = function(e) {
            return r.default.apply("NumericLiteral", arguments)
        }
        ,
        t.objectExpression = function(e) {
            return r.default.apply("ObjectExpression", arguments)
        }
        ,
        t.objectMethod = function(e, t, n, a, i, o, s) {
            return r.default.apply("ObjectMethod", arguments)
        }
        ,
        t.objectPattern = function(e) {
            return r.default.apply("ObjectPattern", arguments)
        }
        ,
        t.objectProperty = function(e, t, n, a, i) {
            return r.default.apply("ObjectProperty", arguments)
        }
        ,
        t.objectTypeAnnotation = function(e, t, n, a, i) {
            return r.default.apply("ObjectTypeAnnotation", arguments)
        }
        ,
        t.objectTypeCallProperty = function(e) {
            return r.default.apply("ObjectTypeCallProperty", arguments)
        }
        ,
        t.objectTypeIndexer = function(e, t, n, a) {
            return r.default.apply("ObjectTypeIndexer", arguments)
        }
        ,
        t.objectTypeInternalSlot = function(e, t, n, a, i) {
            return r.default.apply("ObjectTypeInternalSlot", arguments)
        }
        ,
        t.objectTypeProperty = function(e, t, n) {
            return r.default.apply("ObjectTypeProperty", arguments)
        }
        ,
        t.objectTypeSpreadProperty = function(e) {
            return r.default.apply("ObjectTypeSpreadProperty", arguments)
        }
        ,
        t.opaqueType = function(e, t, n, a) {
            return r.default.apply("OpaqueType", arguments)
        }
        ,
        t.optionalCallExpression = function(e, t, n) {
            return r.default.apply("OptionalCallExpression", arguments)
        }
        ,
        t.optionalIndexedAccessType = function(e, t) {
            return r.default.apply("OptionalIndexedAccessType", arguments)
        }
        ,
        t.optionalMemberExpression = function(e, t, n, a) {
            return r.default.apply("OptionalMemberExpression", arguments)
        }
        ,
        t.parenthesizedExpression = function(e) {
            return r.default.apply("ParenthesizedExpression", arguments)
        }
        ,
        t.pipelineBareFunction = function(e) {
            return r.default.apply("PipelineBareFunction", arguments)
        }
        ,
        t.pipelinePrimaryTopicReference = function() {
            return r.default.apply("PipelinePrimaryTopicReference", arguments)
        }
        ,
        t.pipelineTopicExpression = function(e) {
            return r.default.apply("PipelineTopicExpression", arguments)
        }
        ,
        t.placeholder = function(e, t) {
            return r.default.apply("Placeholder", arguments)
        }
        ,
        t.privateName = function(e) {
            return r.default.apply("PrivateName", arguments)
        }
        ,
        t.program = function(e, t, n, a) {
            return r.default.apply("Program", arguments)
        }
        ,
        t.qualifiedTypeIdentifier = function(e, t) {
            return r.default.apply("QualifiedTypeIdentifier", arguments)
        }
        ,
        t.recordExpression = function(e) {
            return r.default.apply("RecordExpression", arguments)
        }
        ,
        t.regExpLiteral = function(e, t) {
            return r.default.apply("RegExpLiteral", arguments)
        }
        ,
        t.regexLiteral = function(e, t) {
            return console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),
            r.default.apply("RegexLiteral", arguments)
        }
        ,
        t.restElement = function(e) {
            return r.default.apply("RestElement", arguments)
        }
        ,
        t.restProperty = function(e) {
            return console.trace("The node type RestProperty has been renamed to RestElement"),
            r.default.apply("RestProperty", arguments)
        }
        ,
        t.returnStatement = function(e) {
            return r.default.apply("ReturnStatement", arguments)
        }
        ,
        t.sequenceExpression = function(e) {
            return r.default.apply("SequenceExpression", arguments)
        }
        ,
        t.spreadElement = function(e) {
            return r.default.apply("SpreadElement", arguments)
        }
        ,
        t.spreadProperty = function(e) {
            return console.trace("The node type SpreadProperty has been renamed to SpreadElement"),
            r.default.apply("SpreadProperty", arguments)
        }
        ,
        t.staticBlock = function(e) {
            return r.default.apply("StaticBlock", arguments)
        }
        ,
        t.stringLiteral = function(e) {
            return r.default.apply("StringLiteral", arguments)
        }
        ,
        t.stringLiteralTypeAnnotation = function(e) {
            return r.default.apply("StringLiteralTypeAnnotation", arguments)
        }
        ,
        t.stringTypeAnnotation = function() {
            return r.default.apply("StringTypeAnnotation", arguments)
        }
        ,
        t.super = function() {
            return r.default.apply("Super", arguments)
        }
        ,
        t.switchCase = function(e, t) {
            return r.default.apply("SwitchCase", arguments)
        }
        ,
        t.switchStatement = function(e, t) {
            return r.default.apply("SwitchStatement", arguments)
        }
        ,
        t.symbolTypeAnnotation = function() {
            return r.default.apply("SymbolTypeAnnotation", arguments)
        }
        ,
        t.taggedTemplateExpression = function(e, t) {
            return r.default.apply("TaggedTemplateExpression", arguments)
        }
        ,
        t.templateElement = function(e, t) {
            return r.default.apply("TemplateElement", arguments)
        }
        ,
        t.templateLiteral = function(e, t) {
            return r.default.apply("TemplateLiteral", arguments)
        }
        ,
        t.thisExpression = function() {
            return r.default.apply("ThisExpression", arguments)
        }
        ,
        t.thisTypeAnnotation = function() {
            return r.default.apply("ThisTypeAnnotation", arguments)
        }
        ,
        t.throwStatement = function(e) {
            return r.default.apply("ThrowStatement", arguments)
        }
        ,
        t.topicReference = function() {
            return r.default.apply("TopicReference", arguments)
        }
        ,
        t.tryStatement = function(e, t, n) {
            return r.default.apply("TryStatement", arguments)
        }
        ,
        t.tSAnyKeyword = t.tsAnyKeyword = function() {
            return r.default.apply("TSAnyKeyword", arguments)
        }
        ,
        t.tSArrayType = t.tsArrayType = function(e) {
            return r.default.apply("TSArrayType", arguments)
        }
        ,
        t.tSAsExpression = t.tsAsExpression = function(e, t) {
            return r.default.apply("TSAsExpression", arguments)
        }
        ,
        t.tSBigIntKeyword = t.tsBigIntKeyword = function() {
            return r.default.apply("TSBigIntKeyword", arguments)
        }
        ,
        t.tSBooleanKeyword = t.tsBooleanKeyword = function() {
            return r.default.apply("TSBooleanKeyword", arguments)
        }
        ,
        t.tSCallSignatureDeclaration = t.tsCallSignatureDeclaration = function(e, t, n) {
            return r.default.apply("TSCallSignatureDeclaration", arguments)
        }
        ,
        t.tSConditionalType = t.tsConditionalType = function(e, t, n, a) {
            return r.default.apply("TSConditionalType", arguments)
        }
        ,
        t.tSConstructSignatureDeclaration = t.tsConstructSignatureDeclaration = function(e, t, n) {
            return r.default.apply("TSConstructSignatureDeclaration", arguments)
        }
        ,
        t.tSConstructorType = t.tsConstructorType = function(e, t, n) {
            return r.default.apply("TSConstructorType", arguments)
        }
        ,
        t.tSDeclareFunction = t.tsDeclareFunction = function(e, t, n, a) {
            return r.default.apply("TSDeclareFunction", arguments)
        }
        ,
        t.tSDeclareMethod = t.tsDeclareMethod = function(e, t, n, a, i) {
            return r.default.apply("TSDeclareMethod", arguments)
        }
        ,
        t.tSEnumDeclaration = t.tsEnumDeclaration = function(e, t) {
            return r.default.apply("TSEnumDeclaration", arguments)
        }
        ,
        t.tSEnumMember = t.tsEnumMember = function(e, t) {
            return r.default.apply("TSEnumMember", arguments)
        }
        ,
        t.tSExportAssignment = t.tsExportAssignment = function(e) {
            return r.default.apply("TSExportAssignment", arguments)
        }
        ,
        t.tSExpressionWithTypeArguments = t.tsExpressionWithTypeArguments = function(e, t) {
            return r.default.apply("TSExpressionWithTypeArguments", arguments)
        }
        ,
        t.tSExternalModuleReference = t.tsExternalModuleReference = function(e) {
            return r.default.apply("TSExternalModuleReference", arguments)
        }
        ,
        t.tSFunctionType = t.tsFunctionType = function(e, t, n) {
            return r.default.apply("TSFunctionType", arguments)
        }
        ,
        t.tSImportEqualsDeclaration = t.tsImportEqualsDeclaration = function(e, t) {
            return r.default.apply("TSImportEqualsDeclaration", arguments)
        }
        ,
        t.tSImportType = t.tsImportType = function(e, t, n) {
            return r.default.apply("TSImportType", arguments)
        }
        ,
        t.tSIndexSignature = t.tsIndexSignature = function(e, t) {
            return r.default.apply("TSIndexSignature", arguments)
        }
        ,
        t.tSIndexedAccessType = t.tsIndexedAccessType = function(e, t) {
            return r.default.apply("TSIndexedAccessType", arguments)
        }
        ,
        t.tSInferType = t.tsInferType = function(e) {
            return r.default.apply("TSInferType", arguments)
        }
        ,
        t.tSInterfaceBody = t.tsInterfaceBody = function(e) {
            return r.default.apply("TSInterfaceBody", arguments)
        }
        ,
        t.tSInterfaceDeclaration = t.tsInterfaceDeclaration = function(e, t, n, a) {
            return r.default.apply("TSInterfaceDeclaration", arguments)
        }
        ,
        t.tSIntersectionType = t.tsIntersectionType = function(e) {
            return r.default.apply("TSIntersectionType", arguments)
        }
        ,
        t.tSIntrinsicKeyword = t.tsIntrinsicKeyword = function() {
            return r.default.apply("TSIntrinsicKeyword", arguments)
        }
        ,
        t.tSLiteralType = t.tsLiteralType = function(e) {
            return r.default.apply("TSLiteralType", arguments)
        }
        ,
        t.tSMappedType = t.tsMappedType = function(e, t, n) {
            return r.default.apply("TSMappedType", arguments)
        }
        ,
        t.tSMethodSignature = t.tsMethodSignature = function(e, t, n, a) {
            return r.default.apply("TSMethodSignature", arguments)
        }
        ,
        t.tSModuleBlock = t.tsModuleBlock = function(e) {
            return r.default.apply("TSModuleBlock", arguments)
        }
        ,
        t.tSModuleDeclaration = t.tsModuleDeclaration = function(e, t) {
            return r.default.apply("TSModuleDeclaration", arguments)
        }
        ,
        t.tSNamedTupleMember = t.tsNamedTupleMember = function(e, t, n) {
            return r.default.apply("TSNamedTupleMember", arguments)
        }
        ,
        t.tSNamespaceExportDeclaration = t.tsNamespaceExportDeclaration = function(e) {
            return r.default.apply("TSNamespaceExportDeclaration", arguments)
        }
        ,
        t.tSNeverKeyword = t.tsNeverKeyword = function() {
            return r.default.apply("TSNeverKeyword", arguments)
        }
        ,
        t.tSNonNullExpression = t.tsNonNullExpression = function(e) {
            return r.default.apply("TSNonNullExpression", arguments)
        }
        ,
        t.tSNullKeyword = t.tsNullKeyword = function() {
            return r.default.apply("TSNullKeyword", arguments)
        }
        ,
        t.tSNumberKeyword = t.tsNumberKeyword = function() {
            return r.default.apply("TSNumberKeyword", arguments)
        }
        ,
        t.tSObjectKeyword = t.tsObjectKeyword = function() {
            return r.default.apply("TSObjectKeyword", arguments)
        }
        ,
        t.tSOptionalType = t.tsOptionalType = function(e) {
            return r.default.apply("TSOptionalType", arguments)
        }
        ,
        t.tSParameterProperty = t.tsParameterProperty = function(e) {
            return r.default.apply("TSParameterProperty", arguments)
        }
        ,
        t.tSParenthesizedType = t.tsParenthesizedType = function(e) {
            return r.default.apply("TSParenthesizedType", arguments)
        }
        ,
        t.tSPropertySignature = t.tsPropertySignature = function(e, t, n) {
            return r.default.apply("TSPropertySignature", arguments)
        }
        ,
        t.tSQualifiedName = t.tsQualifiedName = function(e, t) {
            return r.default.apply("TSQualifiedName", arguments)
        }
        ,
        t.tSRestType = t.tsRestType = function(e) {
            return r.default.apply("TSRestType", arguments)
        }
        ,
        t.tSStringKeyword = t.tsStringKeyword = function() {
            return r.default.apply("TSStringKeyword", arguments)
        }
        ,
        t.tSSymbolKeyword = t.tsSymbolKeyword = function() {
            return r.default.apply("TSSymbolKeyword", arguments)
        }
        ,
        t.tSThisType = t.tsThisType = function() {
            return r.default.apply("TSThisType", arguments)
        }
        ,
        t.tSTupleType = t.tsTupleType = function(e) {
            return r.default.apply("TSTupleType", arguments)
        }
        ,
        t.tSTypeAliasDeclaration = t.tsTypeAliasDeclaration = function(e, t, n) {
            return r.default.apply("TSTypeAliasDeclaration", arguments)
        }
        ,
        t.tSTypeAnnotation = t.tsTypeAnnotation = function(e) {
            return r.default.apply("TSTypeAnnotation", arguments)
        }
        ,
        t.tSTypeAssertion = t.tsTypeAssertion = function(e, t) {
            return r.default.apply("TSTypeAssertion", arguments)
        }
        ,
        t.tSTypeLiteral = t.tsTypeLiteral = function(e) {
            return r.default.apply("TSTypeLiteral", arguments)
        }
        ,
        t.tSTypeOperator = t.tsTypeOperator = function(e) {
            return r.default.apply("TSTypeOperator", arguments)
        }
        ,
        t.tSTypeParameter = t.tsTypeParameter = function(e, t, n) {
            return r.default.apply("TSTypeParameter", arguments)
        }
        ,
        t.tSTypeParameterDeclaration = t.tsTypeParameterDeclaration = function(e) {
            return r.default.apply("TSTypeParameterDeclaration", arguments)
        }
        ,
        t.tSTypeParameterInstantiation = t.tsTypeParameterInstantiation = function(e) {
            return r.default.apply("TSTypeParameterInstantiation", arguments)
        }
        ,
        t.tSTypePredicate = t.tsTypePredicate = function(e, t, n) {
            return r.default.apply("TSTypePredicate", arguments)
        }
        ,
        t.tSTypeQuery = t.tsTypeQuery = function(e) {
            return r.default.apply("TSTypeQuery", arguments)
        }
        ,
        t.tSTypeReference = t.tsTypeReference = function(e, t) {
            return r.default.apply("TSTypeReference", arguments)
        }
        ,
        t.tSUndefinedKeyword = t.tsUndefinedKeyword = function() {
            return r.default.apply("TSUndefinedKeyword", arguments)
        }
        ,
        t.tSUnionType = t.tsUnionType = function(e) {
            return r.default.apply("TSUnionType", arguments)
        }
        ,
        t.tSUnknownKeyword = t.tsUnknownKeyword = function() {
            return r.default.apply("TSUnknownKeyword", arguments)
        }
        ,
        t.tSVoidKeyword = t.tsVoidKeyword = function() {
            return r.default.apply("TSVoidKeyword", arguments)
        }
        ,
        t.tupleExpression = function(e) {
            return r.default.apply("TupleExpression", arguments)
        }
        ,
        t.tupleTypeAnnotation = function(e) {
            return r.default.apply("TupleTypeAnnotation", arguments)
        }
        ,
        t.typeAlias = function(e, t, n) {
            return r.default.apply("TypeAlias", arguments)
        }
        ,
        t.typeAnnotation = function(e) {
            return r.default.apply("TypeAnnotation", arguments)
        }
        ,
        t.typeCastExpression = function(e, t) {
            return r.default.apply("TypeCastExpression", arguments)
        }
        ,
        t.typeParameter = function(e, t, n) {
            return r.default.apply("TypeParameter", arguments)
        }
        ,
        t.typeParameterDeclaration = function(e) {
            return r.default.apply("TypeParameterDeclaration", arguments)
        }
        ,
        t.typeParameterInstantiation = function(e) {
            return r.default.apply("TypeParameterInstantiation", arguments)
        }
        ,
        t.typeofTypeAnnotation = function(e) {
            return r.default.apply("TypeofTypeAnnotation", arguments)
        }
        ,
        t.unaryExpression = function(e, t, n) {
            return r.default.apply("UnaryExpression", arguments)
        }
        ,
        t.unionTypeAnnotation = function(e) {
            return r.default.apply("UnionTypeAnnotation", arguments)
        }
        ,
        t.updateExpression = function(e, t, n) {
            return r.default.apply("UpdateExpression", arguments)
        }
        ,
        t.v8IntrinsicIdentifier = function(e) {
            return r.default.apply("V8IntrinsicIdentifier", arguments)
        }
        ,
        t.variableDeclaration = function(e, t) {
            return r.default.apply("VariableDeclaration", arguments)
        }
        ,
        t.variableDeclarator = function(e, t) {
            return r.default.apply("VariableDeclarator", arguments)
        }
        ,
        t.variance = function(e) {
            return r.default.apply("Variance", arguments)
        }
        ,
        t.voidTypeAnnotation = function() {
            return r.default.apply("VoidTypeAnnotation", arguments)
        }
        ,
        t.whileStatement = function(e, t) {
            return r.default.apply("WhileStatement", arguments)
        }
        ,
        t.withStatement = function(e, t) {
            return r.default.apply("WithStatement", arguments)
        }
        ,
        t.yieldExpression = function(e, t) {
            return r.default.apply("YieldExpression", arguments)
        }
        ;
        var r = n(3208)
    },
    2645: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ALIAS_KEYS", {
            enumerable: !0,
            get: function() {
                return a.ALIAS_KEYS
            }
        }),
        Object.defineProperty(t, "BUILDER_KEYS", {
            enumerable: !0,
            get: function() {
                return a.BUILDER_KEYS
            }
        }),
        Object.defineProperty(t, "DEPRECATED_KEYS", {
            enumerable: !0,
            get: function() {
                return a.DEPRECATED_KEYS
            }
        }),
        Object.defineProperty(t, "FLIPPED_ALIAS_KEYS", {
            enumerable: !0,
            get: function() {
                return a.FLIPPED_ALIAS_KEYS
            }
        }),
        Object.defineProperty(t, "NODE_FIELDS", {
            enumerable: !0,
            get: function() {
                return a.NODE_FIELDS
            }
        }),
        Object.defineProperty(t, "NODE_PARENT_VALIDATIONS", {
            enumerable: !0,
            get: function() {
                return a.NODE_PARENT_VALIDATIONS
            }
        }),
        Object.defineProperty(t, "PLACEHOLDERS", {
            enumerable: !0,
            get: function() {
                return i.PLACEHOLDERS
            }
        }),
        Object.defineProperty(t, "PLACEHOLDERS_ALIAS", {
            enumerable: !0,
            get: function() {
                return i.PLACEHOLDERS_ALIAS
            }
        }),
        Object.defineProperty(t, "PLACEHOLDERS_FLIPPED_ALIAS", {
            enumerable: !0,
            get: function() {
                return i.PLACEHOLDERS_FLIPPED_ALIAS
            }
        }),
        t.TYPES = void 0,
        Object.defineProperty(t, "VISITOR_KEYS", {
            enumerable: !0,
            get: function() {
                return a.VISITOR_KEYS
            }
        });
        var r = n(2683);
        n(2821),
        n(3151),
        n(3152),
        n(3153),
        n(3154),
        n(3155);
        var a = n(2654)
          , i = n(2823);
        r(a.VISITOR_KEYS),
        r(a.ALIAS_KEYS),
        r(a.FLIPPED_ALIAS_KEYS),
        r(a.NODE_FIELDS),
        r(a.BUILDER_KEYS),
        r(a.DEPRECATED_KEYS),
        r(i.PLACEHOLDERS_ALIAS),
        r(i.PLACEHOLDERS_FLIPPED_ALIAS);
        var o = [].concat(Object.keys(a.VISITOR_KEYS), Object.keys(a.FLIPPED_ALIAS_KEYS), Object.keys(a.DEPRECATED_KEYS));
        t.TYPES = o
    },
    2646: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ALIAS_KEYS", {
            enumerable: !0,
            get: function() {
                return a.ALIAS_KEYS
            }
        }),
        Object.defineProperty(t, "BUILDER_KEYS", {
            enumerable: !0,
            get: function() {
                return a.BUILDER_KEYS
            }
        }),
        Object.defineProperty(t, "DEPRECATED_KEYS", {
            enumerable: !0,
            get: function() {
                return a.DEPRECATED_KEYS
            }
        }),
        Object.defineProperty(t, "FLIPPED_ALIAS_KEYS", {
            enumerable: !0,
            get: function() {
                return a.FLIPPED_ALIAS_KEYS
            }
        }),
        Object.defineProperty(t, "NODE_FIELDS", {
            enumerable: !0,
            get: function() {
                return a.NODE_FIELDS
            }
        }),
        Object.defineProperty(t, "NODE_PARENT_VALIDATIONS", {
            enumerable: !0,
            get: function() {
                return a.NODE_PARENT_VALIDATIONS
            }
        }),
        Object.defineProperty(t, "PLACEHOLDERS", {
            enumerable: !0,
            get: function() {
                return i.PLACEHOLDERS
            }
        }),
        Object.defineProperty(t, "PLACEHOLDERS_ALIAS", {
            enumerable: !0,
            get: function() {
                return i.PLACEHOLDERS_ALIAS
            }
        }),
        Object.defineProperty(t, "PLACEHOLDERS_FLIPPED_ALIAS", {
            enumerable: !0,
            get: function() {
                return i.PLACEHOLDERS_FLIPPED_ALIAS
            }
        }),
        t.TYPES = void 0,
        Object.defineProperty(t, "VISITOR_KEYS", {
            enumerable: !0,
            get: function() {
                return a.VISITOR_KEYS
            }
        });
        var r = n(2683);
        n(2840),
        n(3211),
        n(3212),
        n(3213),
        n(3214),
        n(3215);
        var a = n(2655)
          , i = n(2842);
        r(a.VISITOR_KEYS),
        r(a.ALIAS_KEYS),
        r(a.FLIPPED_ALIAS_KEYS),
        r(a.NODE_FIELDS),
        r(a.BUILDER_KEYS),
        r(a.DEPRECATED_KEYS),
        r(i.PLACEHOLDERS_ALIAS),
        r(i.PLACEHOLDERS_FLIPPED_ALIAS);
        var o = [].concat(Object.keys(a.VISITOR_KEYS), Object.keys(a.FLIPPED_ALIAS_KEYS), Object.keys(a.DEPRECATED_KEYS));
        t.TYPES = o
    },
    2654: function(e, t, n) {
        "use strict";
        var r = n(494)
          , a = n(806);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.VISITOR_KEYS = t.NODE_PARENT_VALIDATIONS = t.NODE_FIELDS = t.FLIPPED_ALIAS_KEYS = t.DEPRECATED_KEYS = t.BUILDER_KEYS = t.ALIAS_KEYS = void 0,
        t.arrayOf = S,
        t.arrayOfType = E,
        t.assertEach = b,
        t.assertNodeOrValueType = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            function a(e, n, a) {
                var s, u = r(t);
                try {
                    for (u.s(); !(s = u.n()).done; ) {
                        var l = s.value;
                        if (y(a) === l || (0,
                        i.default)(l, a))
                            return void (0,
                            o.validateChild)(e, n, a)
                    }
                } catch (p) {
                    u.e(p)
                } finally {
                    u.f()
                }
                throw new TypeError("Property ".concat(n, " of ").concat(e.type, " expected node to be of a type ").concat(JSON.stringify(t), " but instead got ").concat(JSON.stringify(null == a ? void 0 : a.type)))
            }
            return a.oneOfNodeOrValueTypes = t,
            a
        }
        ,
        t.assertNodeType = v,
        t.assertOneOf = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            function r(e, n, r) {
                if (t.indexOf(r) < 0)
                    throw new TypeError("Property ".concat(n, " expected value to be one of ").concat(JSON.stringify(t), " but got ").concat(JSON.stringify(r)))
            }
            return r.oneOf = t,
            r
        }
        ,
        t.assertOptionalChainStart = function() {
            return function(e) {
                for (var t, n = e; e; ) {
                    var r = n.type;
                    if ("OptionalCallExpression" !== r) {
                        if ("OptionalMemberExpression" !== r)
                            break;
                        if (n.optional)
                            return;
                        n = n.object
                    } else {
                        if (n.optional)
                            return;
                        n = n.callee
                    }
                }
                throw new TypeError("Non-optional ".concat(e.type, " must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ").concat(null == (t = n) ? void 0 : t.type))
            }
        }
        ,
        t.assertShape = function(e) {
            function t(t, n, r) {
                for (var a = [], i = 0, s = Object.keys(e); i < s.length; i++) {
                    var u = s[i];
                    try {
                        (0,
                        o.validateField)(t, u, r[u], e[u])
                    } catch (l) {
                        if (l instanceof TypeError) {
                            a.push(l.message);
                            continue
                        }
                        throw l
                    }
                }
                if (a.length)
                    throw new TypeError("Property ".concat(n, " of ").concat(t.type, " expected to have the following:\n").concat(a.join("\n")))
            }
            return t.shapeOf = e,
            t
        }
        ,
        t.assertValueType = P,
        t.chain = O,
        t.default = x,
        t.defineAliasedType = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                var n, r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = i.aliases;
                o || (i.inherits && (o = null == (r = D[i.inherits].aliases) ? void 0 : r.slice()),
                null != o || (o = []),
                i.aliases = o);
                var s = t.filter((function(e) {
                    return !o.includes(e)
                }
                ));
                return (n = o).unshift.apply(n, a(s)),
                x(e, i)
            }
        }
        ,
        t.typeIs = m,
        t.validate = T,
        t.validateArrayOfType = function(e) {
            return T(E(e))
        }
        ,
        t.validateOptional = function(e) {
            return {
                validate: e,
                optional: !0
            }
        }
        ,
        t.validateOptionalType = function(e) {
            return {
                validate: m(e),
                optional: !0
            }
        }
        ,
        t.validateType = function(e) {
            return T(m(e))
        }
        ;
        var i = n(2678)
          , o = n(2721)
          , s = {};
        t.VISITOR_KEYS = s;
        var u = {};
        t.ALIAS_KEYS = u;
        var l = {};
        t.FLIPPED_ALIAS_KEYS = l;
        var p = {};
        t.NODE_FIELDS = p;
        var f = {};
        t.BUILDER_KEYS = f;
        var d = {};
        t.DEPRECATED_KEYS = d;
        var c = {};
        function y(e) {
            return Array.isArray(e) ? "array" : null === e ? "null" : typeof e
        }
        function T(e) {
            return {
                validate: e
            }
        }
        function m(e) {
            return "string" === typeof e ? v(e) : v.apply(void 0, a(e))
        }
        function S(e) {
            return O(P("array"), b(e))
        }
        function E(e) {
            return S(m(e))
        }
        function b(e) {
            function t(t, n, r) {
                if (Array.isArray(r))
                    for (var a = 0; a < r.length; a++) {
                        var i = "".concat(n, "[").concat(a, "]")
                          , s = r[a];
                        e(t, i, s),
                        Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && (0,
                        o.validateChild)(t, i, s)
                    }
            }
            return t.each = e,
            t
        }
        function v() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            function a(e, n, a) {
                var s, u = r(t);
                try {
                    for (u.s(); !(s = u.n()).done; ) {
                        var l = s.value;
                        if ((0,
                        i.default)(l, a))
                            return void (0,
                            o.validateChild)(e, n, a)
                    }
                } catch (p) {
                    u.e(p)
                } finally {
                    u.f()
                }
                throw new TypeError("Property ".concat(n, " of ").concat(e.type, " expected node to be of a type ").concat(JSON.stringify(t), " but instead got ").concat(JSON.stringify(null == a ? void 0 : a.type)))
            }
            return a.oneOfNodeTypes = t,
            a
        }
        function P(e) {
            function t(t, n, r) {
                if (!(y(r) === e))
                    throw new TypeError("Property ".concat(n, " expected type of ").concat(e, " but got ").concat(y(r)))
            }
            return t.type = e,
            t
        }
        function O() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            function a() {
                var e, n = r(t);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var a = e.value;
                        a.apply(void 0, arguments)
                    }
                } catch (i) {
                    n.e(i)
                } finally {
                    n.f()
                }
            }
            if (a.chainOf = t,
            t.length >= 2 && "type"in t[0] && "array" === t[0].type && !("each"in t[1]))
                throw new Error('An assertValueType("array") validator can only be followed by an assertEach(...) validator.');
            return a
        }
        t.NODE_PARENT_VALIDATIONS = c;
        var A = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"]
          , g = ["default", "optional", "validate"];
        function x(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.inherits && D[t.inherits] || {}
              , a = t.fields;
            if (!a && (a = {},
            n.fields)) {
                var i, o = Object.getOwnPropertyNames(n.fields), T = r(o);
                try {
                    for (T.s(); !(i = T.n()).done; ) {
                        var m = i.value
                          , S = n.fields[m]
                          , E = S.default;
                        if (Array.isArray(E) ? E.length > 0 : E && "object" === typeof E)
                            throw new Error("field defaults can only be primitives or empty arrays currently");
                        a[m] = {
                            default: Array.isArray(E) ? [] : E,
                            optional: S.optional,
                            validate: S.validate
                        }
                    }
                } catch (K) {
                    T.e(K)
                } finally {
                    T.f()
                }
            }
            for (var b = t.visitor || n.visitor || [], v = t.aliases || n.aliases || [], O = t.builder || n.builder || t.visitor || [], x = 0, I = Object.keys(t); x < I.length; x++) {
                var _ = I[x];
                if (-1 === A.indexOf(_))
                    throw new Error('Unknown type option "'.concat(_, '" on ').concat(e))
            }
            t.deprecatedAlias && (d[t.deprecatedAlias] = e);
            var h, N = r(b.concat(O));
            try {
                for (N.s(); !(h = N.n()).done; ) {
                    var j = h.value;
                    a[j] = a[j] || {}
                }
            } catch (K) {
                N.e(K)
            } finally {
                N.f()
            }
            for (var L = 0, C = Object.keys(a); L < C.length; L++) {
                var B = C[L]
                  , w = a[B];
                void 0 !== w.default && -1 === O.indexOf(B) && (w.optional = !0),
                void 0 === w.default ? w.default = null : w.validate || null == w.default || (w.validate = P(y(w.default)));
                for (var M = 0, F = Object.keys(w); M < F.length; M++) {
                    var R = F[M];
                    if (-1 === g.indexOf(R))
                        throw new Error('Unknown field key "'.concat(R, '" on ').concat(e, ".").concat(B))
                }
            }
            s[e] = t.visitor = b,
            f[e] = t.builder = O,
            p[e] = t.fields = a,
            u[e] = t.aliases = v,
            v.forEach((function(t) {
                l[t] = l[t] || [],
                l[t].push(e)
            }
            )),
            t.validate && (c[e] = t.validate),
            D[e] = t
        }
        var D = {}
    },
    2655: function(e, t, n) {
        "use strict";
        var r = n(494)
          , a = n(806);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.VISITOR_KEYS = t.NODE_PARENT_VALIDATIONS = t.NODE_FIELDS = t.FLIPPED_ALIAS_KEYS = t.DEPRECATED_KEYS = t.BUILDER_KEYS = t.ALIAS_KEYS = void 0,
        t.arrayOf = S,
        t.arrayOfType = E,
        t.assertEach = b,
        t.assertNodeOrValueType = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            function a(e, n, a) {
                var s, u = r(t);
                try {
                    for (u.s(); !(s = u.n()).done; ) {
                        var l = s.value;
                        if (y(a) === l || (0,
                        i.default)(l, a))
                            return void (0,
                            o.validateChild)(e, n, a)
                    }
                } catch (p) {
                    u.e(p)
                } finally {
                    u.f()
                }
                throw new TypeError("Property ".concat(n, " of ").concat(e.type, " expected node to be of a type ").concat(JSON.stringify(t), " but instead got ").concat(JSON.stringify(null == a ? void 0 : a.type)))
            }
            return a.oneOfNodeOrValueTypes = t,
            a
        }
        ,
        t.assertNodeType = v,
        t.assertOneOf = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            function r(e, n, r) {
                if (t.indexOf(r) < 0)
                    throw new TypeError("Property ".concat(n, " expected value to be one of ").concat(JSON.stringify(t), " but got ").concat(JSON.stringify(r)))
            }
            return r.oneOf = t,
            r
        }
        ,
        t.assertOptionalChainStart = function() {
            return function(e) {
                for (var t, n = e; e; ) {
                    var r = n.type;
                    if ("OptionalCallExpression" !== r) {
                        if ("OptionalMemberExpression" !== r)
                            break;
                        if (n.optional)
                            return;
                        n = n.object
                    } else {
                        if (n.optional)
                            return;
                        n = n.callee
                    }
                }
                throw new TypeError("Non-optional ".concat(e.type, " must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ").concat(null == (t = n) ? void 0 : t.type))
            }
        }
        ,
        t.assertShape = function(e) {
            function t(t, n, r) {
                for (var a = [], i = 0, s = Object.keys(e); i < s.length; i++) {
                    var u = s[i];
                    try {
                        (0,
                        o.validateField)(t, u, r[u], e[u])
                    } catch (l) {
                        if (l instanceof TypeError) {
                            a.push(l.message);
                            continue
                        }
                        throw l
                    }
                }
                if (a.length)
                    throw new TypeError("Property ".concat(n, " of ").concat(t.type, " expected to have the following:\n").concat(a.join("\n")))
            }
            return t.shapeOf = e,
            t
        }
        ,
        t.assertValueType = P,
        t.chain = O,
        t.default = x,
        t.defineAliasedType = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                var n, r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = i.aliases;
                o || (i.inherits && (o = null == (r = D[i.inherits].aliases) ? void 0 : r.slice()),
                null != o || (o = []),
                i.aliases = o);
                var s = t.filter((function(e) {
                    return !o.includes(e)
                }
                ));
                return (n = o).unshift.apply(n, a(s)),
                x(e, i)
            }
        }
        ,
        t.typeIs = m,
        t.validate = T,
        t.validateArrayOfType = function(e) {
            return T(E(e))
        }
        ,
        t.validateOptional = function(e) {
            return {
                validate: e,
                optional: !0
            }
        }
        ,
        t.validateOptionalType = function(e) {
            return {
                validate: m(e),
                optional: !0
            }
        }
        ,
        t.validateType = function(e) {
            return T(m(e))
        }
        ;
        var i = n(2680)
          , o = n(2726)
          , s = {};
        t.VISITOR_KEYS = s;
        var u = {};
        t.ALIAS_KEYS = u;
        var l = {};
        t.FLIPPED_ALIAS_KEYS = l;
        var p = {};
        t.NODE_FIELDS = p;
        var f = {};
        t.BUILDER_KEYS = f;
        var d = {};
        t.DEPRECATED_KEYS = d;
        var c = {};
        function y(e) {
            return Array.isArray(e) ? "array" : null === e ? "null" : typeof e
        }
        function T(e) {
            return {
                validate: e
            }
        }
        function m(e) {
            return "string" === typeof e ? v(e) : v.apply(void 0, a(e))
        }
        function S(e) {
            return O(P("array"), b(e))
        }
        function E(e) {
            return S(m(e))
        }
        function b(e) {
            function t(t, n, r) {
                if (Array.isArray(r))
                    for (var a = 0; a < r.length; a++) {
                        var i = "".concat(n, "[").concat(a, "]")
                          , s = r[a];
                        e(t, i, s),
                        Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && (0,
                        o.validateChild)(t, i, s)
                    }
            }
            return t.each = e,
            t
        }
        function v() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            function a(e, n, a) {
                var s, u = r(t);
                try {
                    for (u.s(); !(s = u.n()).done; ) {
                        var l = s.value;
                        if ((0,
                        i.default)(l, a))
                            return void (0,
                            o.validateChild)(e, n, a)
                    }
                } catch (p) {
                    u.e(p)
                } finally {
                    u.f()
                }
                throw new TypeError("Property ".concat(n, " of ").concat(e.type, " expected node to be of a type ").concat(JSON.stringify(t), " but instead got ").concat(JSON.stringify(null == a ? void 0 : a.type)))
            }
            return a.oneOfNodeTypes = t,
            a
        }
        function P(e) {
            function t(t, n, r) {
                if (!(y(r) === e))
                    throw new TypeError("Property ".concat(n, " expected type of ").concat(e, " but got ").concat(y(r)))
            }
            return t.type = e,
            t
        }
        function O() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            function a() {
                var e, n = r(t);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var a = e.value;
                        a.apply(void 0, arguments)
                    }
                } catch (i) {
                    n.e(i)
                } finally {
                    n.f()
                }
            }
            if (a.chainOf = t,
            t.length >= 2 && "type"in t[0] && "array" === t[0].type && !("each"in t[1]))
                throw new Error('An assertValueType("array") validator can only be followed by an assertEach(...) validator.');
            return a
        }
        t.NODE_PARENT_VALIDATIONS = c;
        var A = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"]
          , g = ["default", "optional", "validate"];
        function x(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.inherits && D[t.inherits] || {}
              , a = t.fields;
            if (!a && (a = {},
            n.fields)) {
                var i, o = Object.getOwnPropertyNames(n.fields), T = r(o);
                try {
                    for (T.s(); !(i = T.n()).done; ) {
                        var m = i.value
                          , S = n.fields[m]
                          , E = S.default;
                        if (Array.isArray(E) ? E.length > 0 : E && "object" === typeof E)
                            throw new Error("field defaults can only be primitives or empty arrays currently");
                        a[m] = {
                            default: Array.isArray(E) ? [] : E,
                            optional: S.optional,
                            validate: S.validate
                        }
                    }
                } catch (K) {
                    T.e(K)
                } finally {
                    T.f()
                }
            }
            for (var b = t.visitor || n.visitor || [], v = t.aliases || n.aliases || [], O = t.builder || n.builder || t.visitor || [], x = 0, I = Object.keys(t); x < I.length; x++) {
                var _ = I[x];
                if (-1 === A.indexOf(_))
                    throw new Error('Unknown type option "'.concat(_, '" on ').concat(e))
            }
            t.deprecatedAlias && (d[t.deprecatedAlias] = e);
            var h, N = r(b.concat(O));
            try {
                for (N.s(); !(h = N.n()).done; ) {
                    var j = h.value;
                    a[j] = a[j] || {}
                }
            } catch (K) {
                N.e(K)
            } finally {
                N.f()
            }
            for (var L = 0, C = Object.keys(a); L < C.length; L++) {
                var B = C[L]
                  , w = a[B];
                void 0 !== w.default && -1 === O.indexOf(B) && (w.optional = !0),
                void 0 === w.default ? w.default = null : w.validate || null == w.default || (w.validate = P(y(w.default)));
                for (var M = 0, F = Object.keys(w); M < F.length; M++) {
                    var R = F[M];
                    if (-1 === g.indexOf(R))
                        throw new Error('Unknown field key "'.concat(R, '" on ').concat(e, ".").concat(B))
                }
            }
            s[e] = t.visitor = b,
            f[e] = t.builder = O,
            p[e] = t.fields = a,
            u[e] = t.aliases = v,
            v.forEach((function(t) {
                l[t] = l[t] || [],
                l[t].push(e)
            }
            )),
            t.validate && (c[e] = t.validate),
            D[e] = t
        }
        var D = {}
    },
    2661: function(e, t, n) {
        "use strict";
        var r = n(806);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.UPDATE_OPERATORS = t.UNARY_OPERATORS = t.STRING_UNARY_OPERATORS = t.STATEMENT_OR_BLOCK_KEYS = t.NUMBER_UNARY_OPERATORS = t.NUMBER_BINARY_OPERATORS = t.NOT_LOCAL_BINDING = t.LOGICAL_OPERATORS = t.INHERIT_KEYS = t.FOR_INIT_KEYS = t.FLATTENABLE_KEYS = t.EQUALITY_BINARY_OPERATORS = t.COMPARISON_BINARY_OPERATORS = t.COMMENT_KEYS = t.BOOLEAN_UNARY_OPERATORS = t.BOOLEAN_NUMBER_BINARY_OPERATORS = t.BOOLEAN_BINARY_OPERATORS = t.BLOCK_SCOPED_SYMBOL = t.BINARY_OPERATORS = t.ASSIGNMENT_OPERATORS = void 0;
        t.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
        t.FLATTENABLE_KEYS = ["body", "expressions"];
        t.FOR_INIT_KEYS = ["left", "init"];
        t.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
        var a = ["||", "&&", "??"];
        t.LOGICAL_OPERATORS = a;
        t.UPDATE_OPERATORS = ["++", "--"];
        var i = [">", "<", ">=", "<="];
        t.BOOLEAN_NUMBER_BINARY_OPERATORS = i;
        var o = ["==", "===", "!=", "!=="];
        t.EQUALITY_BINARY_OPERATORS = o;
        var s = [].concat(o, ["in", "instanceof"]);
        t.COMPARISON_BINARY_OPERATORS = s;
        var u = [].concat(r(s), i);
        t.BOOLEAN_BINARY_OPERATORS = u;
        var l = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
        t.NUMBER_BINARY_OPERATORS = l;
        var p = ["+"].concat(l, r(u));
        t.BINARY_OPERATORS = p;
        var f = ["=", "+="].concat(r(l.map((function(e) {
            return e + "="
        }
        ))), r(a.map((function(e) {
            return e + "="
        }
        ))));
        t.ASSIGNMENT_OPERATORS = f;
        var d = ["delete", "!"];
        t.BOOLEAN_UNARY_OPERATORS = d;
        var c = ["+", "-", "~"];
        t.NUMBER_UNARY_OPERATORS = c;
        var y = ["typeof"];
        t.STRING_UNARY_OPERATORS = y;
        var T = ["void", "throw"].concat(d, c, y);
        t.UNARY_OPERATORS = T;
        t.INHERIT_KEYS = {
            optional: ["typeAnnotation", "typeParameters", "returnType"],
            force: ["start", "loc", "end"]
        };
        var m = Symbol.for("var used to be block scoped");
        t.BLOCK_SCOPED_SYMBOL = m;
        var S = Symbol.for("should not be considered a local binding");
        t.NOT_LOCAL_BINDING = S
    },
    2662: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = u;
        var r = n(2645)
          , a = n(2637)
          , i = Function.call.bind(Object.prototype.hasOwnProperty);
        function o(e, t, n) {
            return e && "string" === typeof e.type ? u(e, t, n) : e
        }
        function s(e, t, n) {
            return Array.isArray(e) ? e.map((function(e) {
                return o(e, t, n)
            }
            )) : o(e, t, n)
        }
        function u(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e)
                return e;
            var o = e.type
              , u = {
                type: e.type
            };
            if ((0,
            a.isIdentifier)(e))
                u.name = e.name,
                i(e, "optional") && "boolean" === typeof e.optional && (u.optional = e.optional),
                i(e, "typeAnnotation") && (u.typeAnnotation = t ? s(e.typeAnnotation, !0, n) : e.typeAnnotation);
            else {
                if (!i(r.NODE_FIELDS, o))
                    throw new Error('Unknown node type: "'.concat(o, '"'));
                for (var p = 0, f = Object.keys(r.NODE_FIELDS[o]); p < f.length; p++) {
                    var d = f[p];
                    i(e, d) && (u[d] = t ? (0,
                    a.isFile)(e) && "comments" === d ? l(e.comments, t, n) : s(e[d], !0, n) : e[d])
                }
            }
            return i(e, "loc") && (u.loc = n ? null : e.loc),
            i(e, "leadingComments") && (u.leadingComments = l(e.leadingComments, t, n)),
            i(e, "innerComments") && (u.innerComments = l(e.innerComments, t, n)),
            i(e, "trailingComments") && (u.trailingComments = l(e.trailingComments, t, n)),
            i(e, "extra") && (u.extra = Object.assign({}, e.extra)),
            u
        }
        function l(e, t, n) {
            return e && t ? e.map((function(e) {
                var t = e.type
                  , r = e.value
                  , a = e.loc;
                return n ? {
                    type: t,
                    value: r,
                    loc: null
                } : {
                    type: t,
                    value: r,
                    loc: a
                }
            }
            )) : e
        }
    },
    2663: function(e, t, n) {
        "use strict";
        var r = n(806);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.UPDATE_OPERATORS = t.UNARY_OPERATORS = t.STRING_UNARY_OPERATORS = t.STATEMENT_OR_BLOCK_KEYS = t.NUMBER_UNARY_OPERATORS = t.NUMBER_BINARY_OPERATORS = t.NOT_LOCAL_BINDING = t.LOGICAL_OPERATORS = t.INHERIT_KEYS = t.FOR_INIT_KEYS = t.FLATTENABLE_KEYS = t.EQUALITY_BINARY_OPERATORS = t.COMPARISON_BINARY_OPERATORS = t.COMMENT_KEYS = t.BOOLEAN_UNARY_OPERATORS = t.BOOLEAN_NUMBER_BINARY_OPERATORS = t.BOOLEAN_BINARY_OPERATORS = t.BLOCK_SCOPED_SYMBOL = t.BINARY_OPERATORS = t.ASSIGNMENT_OPERATORS = void 0;
        t.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
        t.FLATTENABLE_KEYS = ["body", "expressions"];
        t.FOR_INIT_KEYS = ["left", "init"];
        t.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
        var a = ["||", "&&", "??"];
        t.LOGICAL_OPERATORS = a;
        t.UPDATE_OPERATORS = ["++", "--"];
        var i = [">", "<", ">=", "<="];
        t.BOOLEAN_NUMBER_BINARY_OPERATORS = i;
        var o = ["==", "===", "!=", "!=="];
        t.EQUALITY_BINARY_OPERATORS = o;
        var s = [].concat(o, ["in", "instanceof"]);
        t.COMPARISON_BINARY_OPERATORS = s;
        var u = [].concat(r(s), i);
        t.BOOLEAN_BINARY_OPERATORS = u;
        var l = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
        t.NUMBER_BINARY_OPERATORS = l;
        var p = ["+"].concat(l, r(u));
        t.BINARY_OPERATORS = p;
        var f = ["=", "+="].concat(r(l.map((function(e) {
            return e + "="
        }
        ))), r(a.map((function(e) {
            return e + "="
        }
        ))));
        t.ASSIGNMENT_OPERATORS = f;
        var d = ["delete", "!"];
        t.BOOLEAN_UNARY_OPERATORS = d;
        var c = ["+", "-", "~"];
        t.NUMBER_UNARY_OPERATORS = c;
        var y = ["typeof"];
        t.STRING_UNARY_OPERATORS = y;
        var T = ["void", "throw"].concat(d, c, y);
        t.UNARY_OPERATORS = T;
        t.INHERIT_KEYS = {
            optional: ["typeAnnotation", "typeParameters", "returnType"],
            force: ["start", "loc", "end"]
        };
        var m = Symbol.for("var used to be block scoped");
        t.BLOCK_SCOPED_SYMBOL = m;
        var S = Symbol.for("should not be considered a local binding");
        t.NOT_LOCAL_BINDING = S
    },
    2664: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = u;
        var r = n(2646)
          , a = n(2638)
          , i = Function.call.bind(Object.prototype.hasOwnProperty);
        function o(e, t, n) {
            return e && "string" === typeof e.type ? u(e, t, n) : e
        }
        function s(e, t, n) {
            return Array.isArray(e) ? e.map((function(e) {
                return o(e, t, n)
            }
            )) : o(e, t, n)
        }
        function u(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e)
                return e;
            var o = e.type
              , u = {
                type: e.type
            };
            if ((0,
            a.isIdentifier)(e))
                u.name = e.name,
                i(e, "optional") && "boolean" === typeof e.optional && (u.optional = e.optional),
                i(e, "typeAnnotation") && (u.typeAnnotation = t ? s(e.typeAnnotation, !0, n) : e.typeAnnotation);
            else {
                if (!i(r.NODE_FIELDS, o))
                    throw new Error('Unknown node type: "'.concat(o, '"'));
                for (var p = 0, f = Object.keys(r.NODE_FIELDS[o]); p < f.length; p++) {
                    var d = f[p];
                    i(e, d) && (u[d] = t ? (0,
                    a.isFile)(e) && "comments" === d ? l(e.comments, t, n) : s(e[d], !0, n) : e[d])
                }
            }
            return i(e, "loc") && (u.loc = n ? null : e.loc),
            i(e, "leadingComments") && (u.leadingComments = l(e.leadingComments, t, n)),
            i(e, "innerComments") && (u.innerComments = l(e.innerComments, t, n)),
            i(e, "trailingComments") && (u.trailingComments = l(e.trailingComments, t, n)),
            i(e, "extra") && (u.extra = Object.assign({}, e.extra)),
            u
        }
        function l(e, t, n) {
            return e && t ? e.map((function(e) {
                var t = e.type
                  , r = e.value
                  , a = e.loc;
                return n ? {
                    type: t,
                    value: r,
                    loc: null
                } : {
                    type: t,
                    value: r,
                    loc: a
                }
            }
            )) : e
        }
    },
    2678: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            if (!t)
                return !1;
            if (!(0,
            a.default)(t.type, e))
                return !n && "Placeholder" === t.type && e in o.FLIPPED_ALIAS_KEYS && (0,
                i.default)(t.expectedNode, e);
            return "undefined" === typeof n || (0,
            r.default)(t, n)
        }
        ;
        var r = n(2718)
          , a = n(2719)
          , i = n(2822)
          , o = n(2645)
    },
    2679: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if ("string" !== typeof e)
                return !1;
            if (t && ((0,
            r.isKeyword)(e) || (0,
            r.isStrictReservedWord)(e, !0)))
                return !1;
            return (0,
            r.isIdentifierName)(e)
        }
        ;
        var r = n(2720)
    },
    2680: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            if (!t)
                return !1;
            if (!(0,
            a.default)(t.type, e))
                return !n && "Placeholder" === t.type && e in o.FLIPPED_ALIAS_KEYS && (0,
                i.default)(t.expectedNode, e);
            return "undefined" === typeof n || (0,
            r.default)(t, n)
        }
        ;
        var r = n(2723)
          , a = n(2724)
          , i = n(2841)
          , o = n(2646)
    },
    2681: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if ("string" !== typeof e)
                return !1;
            if (t && ((0,
            r.isKeyword)(e) || (0,
            r.isStrictReservedWord)(e, !0)))
                return !1;
            return (0,
            r.isIdentifierName)(e)
        }
        ;
        var r = n(2725)
    },
    2696: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = a;
        var r = n(2637);
        function a(e, t, n) {
            for (var i = [].concat(e), o = Object.create(null); i.length; ) {
                var s = i.shift();
                if (s) {
                    var u = a.keys[s.type];
                    if ((0,
                    r.isIdentifier)(s))
                        t ? (o[s.name] = o[s.name] || []).push(s) : o[s.name] = s;
                    else if (!(0,
                    r.isExportDeclaration)(s) || (0,
                    r.isExportAllDeclaration)(s)) {
                        if (n) {
                            if ((0,
                            r.isFunctionDeclaration)(s)) {
                                i.push(s.id);
                                continue
                            }
                            if ((0,
                            r.isFunctionExpression)(s))
                                continue
                        }
                        if (u)
                            for (var l = 0; l < u.length; l++) {
                                var p = u[l];
                                s[p] && (i = i.concat(s[p]))
                            }
                    } else
                        (0,
                        r.isDeclaration)(s.declaration) && i.push(s.declaration)
                }
            }
            return o
        }
        a.keys = {
            DeclareClass: ["id"],
            DeclareFunction: ["id"],
            DeclareModule: ["id"],
            DeclareVariable: ["id"],
            DeclareInterface: ["id"],
            DeclareTypeAlias: ["id"],
            DeclareOpaqueType: ["id"],
            InterfaceDeclaration: ["id"],
            TypeAlias: ["id"],
            OpaqueType: ["id"],
            CatchClause: ["param"],
            LabeledStatement: ["label"],
            UnaryExpression: ["argument"],
            AssignmentExpression: ["left"],
            ImportSpecifier: ["local"],
            ImportNamespaceSpecifier: ["local"],
            ImportDefaultSpecifier: ["local"],
            ImportDeclaration: ["specifiers"],
            ExportSpecifier: ["exported"],
            ExportNamespaceSpecifier: ["exported"],
            ExportDefaultSpecifier: ["exported"],
            FunctionDeclaration: ["id", "params"],
            FunctionExpression: ["id", "params"],
            ArrowFunctionExpression: ["params"],
            ObjectMethod: ["params"],
            ClassMethod: ["params"],
            ClassPrivateMethod: ["params"],
            ForInStatement: ["left"],
            ForOfStatement: ["left"],
            ClassDeclaration: ["id"],
            ClassExpression: ["id"],
            RestElement: ["argument"],
            UpdateExpression: ["argument"],
            ObjectProperty: ["value"],
            AssignmentPattern: ["left"],
            ArrayPattern: ["elements"],
            ObjectPattern: ["properties"],
            VariableDeclaration: ["declarations"],
            VariableDeclarator: ["id"]
        }
    },
    2697: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = a;
        var r = n(2638);
        function a(e, t, n) {
            for (var i = [].concat(e), o = Object.create(null); i.length; ) {
                var s = i.shift();
                if (s) {
                    var u = a.keys[s.type];
                    if ((0,
                    r.isIdentifier)(s))
                        t ? (o[s.name] = o[s.name] || []).push(s) : o[s.name] = s;
                    else if (!(0,
                    r.isExportDeclaration)(s) || (0,
                    r.isExportAllDeclaration)(s)) {
                        if (n) {
                            if ((0,
                            r.isFunctionDeclaration)(s)) {
                                i.push(s.id);
                                continue
                            }
                            if ((0,
                            r.isFunctionExpression)(s))
                                continue
                        }
                        if (u)
                            for (var l = 0; l < u.length; l++) {
                                var p = u[l];
                                s[p] && (i = i.concat(s[p]))
                            }
                    } else
                        (0,
                        r.isDeclaration)(s.declaration) && i.push(s.declaration)
                }
            }
            return o
        }
        a.keys = {
            DeclareClass: ["id"],
            DeclareFunction: ["id"],
            DeclareModule: ["id"],
            DeclareVariable: ["id"],
            DeclareInterface: ["id"],
            DeclareTypeAlias: ["id"],
            DeclareOpaqueType: ["id"],
            InterfaceDeclaration: ["id"],
            TypeAlias: ["id"],
            OpaqueType: ["id"],
            CatchClause: ["param"],
            LabeledStatement: ["label"],
            UnaryExpression: ["argument"],
            AssignmentExpression: ["left"],
            ImportSpecifier: ["local"],
            ImportNamespaceSpecifier: ["local"],
            ImportDefaultSpecifier: ["local"],
            ImportDeclaration: ["specifiers"],
            ExportSpecifier: ["exported"],
            ExportNamespaceSpecifier: ["exported"],
            ExportDefaultSpecifier: ["exported"],
            FunctionDeclaration: ["id", "params"],
            FunctionExpression: ["id", "params"],
            ArrowFunctionExpression: ["params"],
            ObjectMethod: ["params"],
            ClassMethod: ["params"],
            ClassPrivateMethod: ["params"],
            ForInStatement: ["left"],
            ForOfStatement: ["left"],
            ClassDeclaration: ["id"],
            ClassExpression: ["id"],
            RestElement: ["argument"],
            UpdateExpression: ["argument"],
            ObjectProperty: ["value"],
            AssignmentPattern: ["left"],
            ArrayPattern: ["elements"],
            ObjectPattern: ["properties"],
            VariableDeclaration: ["declarations"],
            VariableDeclarator: ["id"]
        }
    },
    2700: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.declare = function(e) {
            return function(t, n, i) {
                for (var o, s, u = 0, l = Object.keys(r); u < l.length; u++) {
                    var p, f = l[u];
                    t[f] || ((s = null != (p = s) ? p : a(t))[f] = r[f](s))
                }
                return e(null != (o = s) ? o : t, n || {}, i)
            }
        }
        ;
        var r = {
            assertVersion: function(e) {
                return function(t) {
                    !function(e, t) {
                        if ("number" === typeof e) {
                            if (!Number.isInteger(e))
                                throw new Error("Expected string or integer value.");
                            e = "^".concat(e, ".0.0-0")
                        }
                        if ("string" !== typeof e)
                            throw new Error("Expected string or integer value.");
                        var n, r = Error.stackTraceLimit;
                        "number" === typeof r && r < 25 && (Error.stackTraceLimit = 25);
                        n = "7." === t.slice(0, 2) ? new Error('Requires Babel "^7.0.0-beta.41", but was loaded with "'.concat(t, '". ') + "You'll need to update your @babel/core version.") : new Error('Requires Babel "'.concat(e, '", but was loaded with "').concat(t, '". ') + 'If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn\'t mention "@babel/core" or "babel-core" to see what is calling Babel.');
                        "number" === typeof r && (Error.stackTraceLimit = r);
                        throw Object.assign(n, {
                            code: "BABEL_VERSION_UNSUPPORTED",
                            version: t,
                            range: e
                        })
                    }(t, e.version)
                }
            },
            targets: function() {
                return function() {
                    return {}
                }
            },
            assumption: function() {
                return function() {}
            }
        };
        function a(e) {
            var t = null;
            return "string" === typeof e.version && /^7\./.test(e.version) && (!(t = Object.getPrototypeOf(e)) || i(t, "version") && i(t, "transform") && i(t, "template") && i(t, "types") || (t = null)),
            Object.assign({}, t, e)
        }
        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    },
    2717: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {
            react: !0,
            assertNode: !0,
            createTypeAnnotationBasedOnTypeof: !0,
            createUnionTypeAnnotation: !0,
            createFlowUnionType: !0,
            createTSUnionType: !0,
            cloneNode: !0,
            clone: !0,
            cloneDeep: !0,
            cloneDeepWithoutLoc: !0,
            cloneWithoutLoc: !0,
            addComment: !0,
            addComments: !0,
            inheritInnerComments: !0,
            inheritLeadingComments: !0,
            inheritsComments: !0,
            inheritTrailingComments: !0,
            removeComments: !0,
            ensureBlock: !0,
            toBindingIdentifierName: !0,
            toBlock: !0,
            toComputedKey: !0,
            toExpression: !0,
            toIdentifier: !0,
            toKeyAlias: !0,
            toSequenceExpression: !0,
            toStatement: !0,
            valueToNode: !0,
            appendToMemberExpression: !0,
            inherits: !0,
            prependToMemberExpression: !0,
            removeProperties: !0,
            removePropertiesDeep: !0,
            removeTypeDuplicates: !0,
            getBindingIdentifiers: !0,
            getOuterBindingIdentifiers: !0,
            traverse: !0,
            traverseFast: !0,
            shallowEqual: !0,
            is: !0,
            isBinding: !0,
            isBlockScoped: !0,
            isImmutable: !0,
            isLet: !0,
            isNode: !0,
            isNodesEquivalent: !0,
            isPlaceholderType: !0,
            isReferenced: !0,
            isScope: !0,
            isSpecifierDefault: !0,
            isType: !0,
            isValidES3Identifier: !0,
            isValidIdentifier: !0,
            isVar: !0,
            matchesPattern: !0,
            validate: !0,
            buildMatchMemberExpression: !0
        };
        Object.defineProperty(t, "addComment", {
            enumerable: !0,
            get: function() {
                return b.default
            }
        }),
        Object.defineProperty(t, "addComments", {
            enumerable: !0,
            get: function() {
                return v.default
            }
        }),
        Object.defineProperty(t, "appendToMemberExpression", {
            enumerable: !0,
            get: function() {
                return K.default
            }
        }),
        Object.defineProperty(t, "assertNode", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }),
        Object.defineProperty(t, "buildMatchMemberExpression", {
            enumerable: !0,
            get: function() {
                return ce.default
            }
        }),
        Object.defineProperty(t, "clone", {
            enumerable: !0,
            get: function() {
                return T.default
            }
        }),
        Object.defineProperty(t, "cloneDeep", {
            enumerable: !0,
            get: function() {
                return m.default
            }
        }),
        Object.defineProperty(t, "cloneDeepWithoutLoc", {
            enumerable: !0,
            get: function() {
                return S.default
            }
        }),
        Object.defineProperty(t, "cloneNode", {
            enumerable: !0,
            get: function() {
                return y.default
            }
        }),
        Object.defineProperty(t, "cloneWithoutLoc", {
            enumerable: !0,
            get: function() {
                return E.default
            }
        }),
        Object.defineProperty(t, "createFlowUnionType", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }),
        Object.defineProperty(t, "createTSUnionType", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }),
        Object.defineProperty(t, "createTypeAnnotationBasedOnTypeof", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }),
        Object.defineProperty(t, "createUnionTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }),
        Object.defineProperty(t, "ensureBlock", {
            enumerable: !0,
            get: function() {
                return _.default
            }
        }),
        Object.defineProperty(t, "getBindingIdentifiers", {
            enumerable: !0,
            get: function() {
                return W.default
            }
        }),
        Object.defineProperty(t, "getOuterBindingIdentifiers", {
            enumerable: !0,
            get: function() {
                return J.default
            }
        }),
        Object.defineProperty(t, "inheritInnerComments", {
            enumerable: !0,
            get: function() {
                return P.default
            }
        }),
        Object.defineProperty(t, "inheritLeadingComments", {
            enumerable: !0,
            get: function() {
                return O.default
            }
        }),
        Object.defineProperty(t, "inheritTrailingComments", {
            enumerable: !0,
            get: function() {
                return g.default
            }
        }),
        Object.defineProperty(t, "inherits", {
            enumerable: !0,
            get: function() {
                return V.default
            }
        }),
        Object.defineProperty(t, "inheritsComments", {
            enumerable: !0,
            get: function() {
                return A.default
            }
        }),
        Object.defineProperty(t, "is", {
            enumerable: !0,
            get: function() {
                return z.default
            }
        }),
        Object.defineProperty(t, "isBinding", {
            enumerable: !0,
            get: function() {
                return Q.default
            }
        }),
        Object.defineProperty(t, "isBlockScoped", {
            enumerable: !0,
            get: function() {
                return $.default
            }
        }),
        Object.defineProperty(t, "isImmutable", {
            enumerable: !0,
            get: function() {
                return Z.default
            }
        }),
        Object.defineProperty(t, "isLet", {
            enumerable: !0,
            get: function() {
                return ee.default
            }
        }),
        Object.defineProperty(t, "isNode", {
            enumerable: !0,
            get: function() {
                return te.default
            }
        }),
        Object.defineProperty(t, "isNodesEquivalent", {
            enumerable: !0,
            get: function() {
                return ne.default
            }
        }),
        Object.defineProperty(t, "isPlaceholderType", {
            enumerable: !0,
            get: function() {
                return re.default
            }
        }),
        Object.defineProperty(t, "isReferenced", {
            enumerable: !0,
            get: function() {
                return ae.default
            }
        }),
        Object.defineProperty(t, "isScope", {
            enumerable: !0,
            get: function() {
                return ie.default
            }
        }),
        Object.defineProperty(t, "isSpecifierDefault", {
            enumerable: !0,
            get: function() {
                return oe.default
            }
        }),
        Object.defineProperty(t, "isType", {
            enumerable: !0,
            get: function() {
                return se.default
            }
        }),
        Object.defineProperty(t, "isValidES3Identifier", {
            enumerable: !0,
            get: function() {
                return ue.default
            }
        }),
        Object.defineProperty(t, "isValidIdentifier", {
            enumerable: !0,
            get: function() {
                return le.default
            }
        }),
        Object.defineProperty(t, "isVar", {
            enumerable: !0,
            get: function() {
                return pe.default
            }
        }),
        Object.defineProperty(t, "matchesPattern", {
            enumerable: !0,
            get: function() {
                return fe.default
            }
        }),
        Object.defineProperty(t, "prependToMemberExpression", {
            enumerable: !0,
            get: function() {
                return k.default
            }
        }),
        t.react = void 0,
        Object.defineProperty(t, "removeComments", {
            enumerable: !0,
            get: function() {
                return x.default
            }
        }),
        Object.defineProperty(t, "removeProperties", {
            enumerable: !0,
            get: function() {
                return Y.default
            }
        }),
        Object.defineProperty(t, "removePropertiesDeep", {
            enumerable: !0,
            get: function() {
                return U.default
            }
        }),
        Object.defineProperty(t, "removeTypeDuplicates", {
            enumerable: !0,
            get: function() {
                return X.default
            }
        }),
        Object.defineProperty(t, "shallowEqual", {
            enumerable: !0,
            get: function() {
                return G.default
            }
        }),
        Object.defineProperty(t, "toBindingIdentifierName", {
            enumerable: !0,
            get: function() {
                return h.default
            }
        }),
        Object.defineProperty(t, "toBlock", {
            enumerable: !0,
            get: function() {
                return N.default
            }
        }),
        Object.defineProperty(t, "toComputedKey", {
            enumerable: !0,
            get: function() {
                return j.default
            }
        }),
        Object.defineProperty(t, "toExpression", {
            enumerable: !0,
            get: function() {
                return L.default
            }
        }),
        Object.defineProperty(t, "toIdentifier", {
            enumerable: !0,
            get: function() {
                return C.default
            }
        }),
        Object.defineProperty(t, "toKeyAlias", {
            enumerable: !0,
            get: function() {
                return B.default
            }
        }),
        Object.defineProperty(t, "toSequenceExpression", {
            enumerable: !0,
            get: function() {
                return w.default
            }
        }),
        Object.defineProperty(t, "toStatement", {
            enumerable: !0,
            get: function() {
                return M.default
            }
        }),
        Object.defineProperty(t, "traverse", {
            enumerable: !0,
            get: function() {
                return H.default
            }
        }),
        Object.defineProperty(t, "traverseFast", {
            enumerable: !0,
            get: function() {
                return q.default
            }
        }),
        Object.defineProperty(t, "validate", {
            enumerable: !0,
            get: function() {
                return de.default
            }
        }),
        Object.defineProperty(t, "valueToNode", {
            enumerable: !0,
            get: function() {
                return F.default
            }
        });
        var a = n(3144)
          , i = n(3145)
          , o = n(3146)
          , s = n(3156)
          , u = n(3157);
        Object.keys(u).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === u[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return u[e]
                }
            }))
        }
        ));
        var l = n(3158)
          , p = n(3159)
          , f = n(3160)
          , d = n(2641);
        Object.keys(d).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === d[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return d[e]
                }
            }))
        }
        ));
        var c = n(3162);
        Object.keys(c).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === c[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return c[e]
                }
            }))
        }
        ));
        var y = n(2662)
          , T = n(3163)
          , m = n(3164)
          , S = n(3165)
          , E = n(3166)
          , b = n(3167)
          , v = n(2826)
          , P = n(2827)
          , O = n(2828)
          , A = n(2829)
          , g = n(2830)
          , x = n(3168)
          , D = n(3169);
        Object.keys(D).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === D[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return D[e]
                }
            }))
        }
        ));
        var I = n(2661);
        Object.keys(I).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === I[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return I[e]
                }
            }))
        }
        ));
        var _ = n(3170)
          , h = n(3171)
          , N = n(2831)
          , j = n(3172)
          , L = n(3173)
          , C = n(2832)
          , B = n(3174)
          , w = n(3175)
          , M = n(3177)
          , F = n(3178)
          , R = n(2645);
        Object.keys(R).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === R[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return R[e]
                }
            }))
        }
        ));
        var K = n(3179)
          , V = n(3180)
          , k = n(3181)
          , Y = n(2835)
          , U = n(2833)
          , X = n(2825)
          , W = n(2696)
          , J = n(3182)
          , H = n(3183);
        Object.keys(H).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === H[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return H[e]
                }
            }))
        }
        ));
        var q = n(2834)
          , G = n(2718)
          , z = n(2678)
          , Q = n(3184)
          , $ = n(3185)
          , Z = n(3186)
          , ee = n(2836)
          , te = n(2824)
          , ne = n(3187)
          , re = n(2822)
          , ae = n(3188)
          , ie = n(3189)
          , oe = n(3190)
          , se = n(2719)
          , ue = n(3191)
          , le = n(2679)
          , pe = n(3192)
          , fe = n(2820)
          , de = n(2721)
          , ce = n(2819)
          , ye = n(2637);
        Object.keys(ye).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === ye[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return ye[e]
                }
            }))
        }
        ));
        var Te = n(3193);
        Object.keys(Te).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === Te[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return Te[e]
                }
            }))
        }
        ));
        var me = {
            isReactComponent: a.default,
            isCompatTag: i.default,
            buildChildren: o.default
        };
        t.react = me
    },
    2718: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            for (var n = Object.keys(t), r = 0, a = n; r < a.length; r++) {
                var i = a[r];
                if (e[i] !== t[i])
                    return !1
            }
            return !0
        }
    },
    2719: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if (e === t)
                return !0;
            if (a.ALIAS_KEYS[t])
                return !1;
            var n = a.FLIPPED_ALIAS_KEYS[t];
            if (n) {
                if (n[0] === e)
                    return !0;
                var i, o = r(n);
                try {
                    for (o.s(); !(i = o.n()).done; ) {
                        var s = i.value;
                        if (e === s)
                            return !0
                    }
                } catch (u) {
                    o.e(u)
                } finally {
                    o.f()
                }
            }
            return !1
        }
        ;
        var a = n(2645)
    },
    2720: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isIdentifierName", {
            enumerable: !0,
            get: function() {
                return r.isIdentifierName
            }
        }),
        Object.defineProperty(t, "isIdentifierChar", {
            enumerable: !0,
            get: function() {
                return r.isIdentifierChar
            }
        }),
        Object.defineProperty(t, "isIdentifierStart", {
            enumerable: !0,
            get: function() {
                return r.isIdentifierStart
            }
        }),
        Object.defineProperty(t, "isReservedWord", {
            enumerable: !0,
            get: function() {
                return a.isReservedWord
            }
        }),
        Object.defineProperty(t, "isStrictBindOnlyReservedWord", {
            enumerable: !0,
            get: function() {
                return a.isStrictBindOnlyReservedWord
            }
        }),
        Object.defineProperty(t, "isStrictBindReservedWord", {
            enumerable: !0,
            get: function() {
                return a.isStrictBindReservedWord
            }
        }),
        Object.defineProperty(t, "isStrictReservedWord", {
            enumerable: !0,
            get: function() {
                return a.isStrictReservedWord
            }
        }),
        Object.defineProperty(t, "isKeyword", {
            enumerable: !0,
            get: function() {
                return a.isKeyword
            }
        });
        var r = n(3149)
          , a = n(3150)
    },
    2721: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            if (!e)
                return;
            var o = r.NODE_FIELDS[e.type];
            if (!o)
                return;
            var s = o[t];
            a(e, t, n, s),
            i(e, t, n)
        }
        ,
        t.validateChild = i,
        t.validateField = a;
        var r = n(2645);
        function a(e, t, n, r) {
            null != r && r.validate && (r.optional && null == n || r.validate(e, t, n))
        }
        function i(e, t, n) {
            if (null != n) {
                var a = r.NODE_PARENT_VALIDATIONS[n.type];
                a && a(e, t, n)
            }
        }
    },
    2722: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            t && n && (t[e] = Array.from(new Set([].concat(t[e], n[e]).filter(Boolean))))
        }
    },
    2723: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            for (var n = Object.keys(t), r = 0, a = n; r < a.length; r++) {
                var i = a[r];
                if (e[i] !== t[i])
                    return !1
            }
            return !0
        }
    },
    2724: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if (e === t)
                return !0;
            if (a.ALIAS_KEYS[t])
                return !1;
            var n = a.FLIPPED_ALIAS_KEYS[t];
            if (n) {
                if (n[0] === e)
                    return !0;
                var i, o = r(n);
                try {
                    for (o.s(); !(i = o.n()).done; ) {
                        var s = i.value;
                        if (e === s)
                            return !0
                    }
                } catch (u) {
                    o.e(u)
                } finally {
                    o.f()
                }
            }
            return !1
        }
        ;
        var a = n(2646)
    },
    2725: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isIdentifierName", {
            enumerable: !0,
            get: function() {
                return r.isIdentifierName
            }
        }),
        Object.defineProperty(t, "isIdentifierChar", {
            enumerable: !0,
            get: function() {
                return r.isIdentifierChar
            }
        }),
        Object.defineProperty(t, "isIdentifierStart", {
            enumerable: !0,
            get: function() {
                return r.isIdentifierStart
            }
        }),
        Object.defineProperty(t, "isReservedWord", {
            enumerable: !0,
            get: function() {
                return a.isReservedWord
            }
        }),
        Object.defineProperty(t, "isStrictBindOnlyReservedWord", {
            enumerable: !0,
            get: function() {
                return a.isStrictBindOnlyReservedWord
            }
        }),
        Object.defineProperty(t, "isStrictBindReservedWord", {
            enumerable: !0,
            get: function() {
                return a.isStrictBindReservedWord
            }
        }),
        Object.defineProperty(t, "isStrictReservedWord", {
            enumerable: !0,
            get: function() {
                return a.isStrictReservedWord
            }
        }),
        Object.defineProperty(t, "isKeyword", {
            enumerable: !0,
            get: function() {
                return a.isKeyword
            }
        });
        var r = n(3209)
          , a = n(3210)
    },
    2726: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            if (!e)
                return;
            var o = r.NODE_FIELDS[e.type];
            if (!o)
                return;
            var s = o[t];
            a(e, t, n, s),
            i(e, t, n)
        }
        ,
        t.validateChild = i,
        t.validateField = a;
        var r = n(2646);
        function a(e, t, n, r) {
            null != r && r.validate && (r.optional && null == n || r.validate(e, t, n))
        }
        function i(e, t, n) {
            if (null != n) {
                var a = r.NODE_PARENT_VALIDATIONS[n.type];
                a && a(e, t, n)
            }
        }
    },
    2727: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            t && n && (t[e] = Array.from(new Set([].concat(t[e], n[e]).filter(Boolean))))
        }
    },
    2731: function(e, t, n) {
        "use strict";
        var r = n(806)
          , a = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = e.name
              , n = e.development;
            return (0,
            o.declare)((function(e, o) {
                var P = o.pure
                  , O = o.throwIfNamespace
                  , A = void 0 === O || O
                  , g = o.filter
                  , x = o.runtime
                  , D = void 0 === x ? n ? "automatic" : "classic" : x
                  , I = o.importSource
                  , _ = void 0 === I ? p : I
                  , h = o.pragma
                  , N = void 0 === h ? f : h
                  , j = o.pragmaFrag
                  , L = void 0 === j ? d : j
                  , C = o.useSpread
                  , B = void 0 !== C && C
                  , w = o.useBuiltIns
                  , M = void 0 !== w && w;
                if ("classic" === D) {
                    if ("boolean" !== typeof B)
                        throw new Error("transform-react-jsx currently only accepts a boolean option for useSpread (defaults to false)");
                    if ("boolean" !== typeof M)
                        throw new Error("transform-react-jsx currently only accepts a boolean option for useBuiltIns (defaults to false)");
                    if (B && M)
                        throw new Error("transform-react-jsx currently only accepts useBuiltIns or useSpread but not both")
                }
                var F = {
                    JSXOpeningElement: function(e, t) {
                        var n = [];
                        (function(e) {
                            var t = function(e) {
                                var t = e.scope;
                                do {
                                    if (t.path.isFunctionParent() && !t.path.isArrowFunctionExpression())
                                        return t.path
                                } while (t = t.parent);
                                return null
                            }(e);
                            if (null === t)
                                return !0;
                            if (!t.isMethod())
                                return !0;
                            if ("constructor" !== t.node.kind)
                                return !0;
                            return n = t.parentPath.parentPath,
                            !(null !== n.node.superClass);
                            var n
                        }
                        )(e) && n.push(s.types.jsxAttribute(s.types.jsxIdentifier("__self"), s.types.jsxExpressionContainer(s.types.thisExpression()))),
                        n.push(s.types.jsxAttribute(s.types.jsxIdentifier("__source"), s.types.jsxExpressionContainer(function(e, t) {
                            var n = e.node.loc;
                            if (!n)
                                return e.scope.buildUndefinedNode();
                            if (!t.fileNameIdentifier) {
                                var r = t.filename
                                  , a = void 0 === r ? "" : r
                                  , i = e.scope.generateUidIdentifier("_jsxFileName")
                                  , o = e.hub.getScope();
                                o && o.push({
                                    id: i,
                                    init: s.types.stringLiteral(a)
                                }),
                                t.fileNameIdentifier = i
                            }
                            return function(e, t, n) {
                                var r = null != t ? s.types.numericLiteral(t) : s.types.nullLiteral()
                                  , a = null != n ? s.types.numericLiteral(n + 1) : s.types.nullLiteral()
                                  , i = s.types.objectProperty(s.types.identifier("fileName"), e)
                                  , o = s.types.objectProperty(s.types.identifier("lineNumber"), r)
                                  , u = s.types.objectProperty(s.types.identifier("columnNumber"), a);
                                return s.types.objectExpression([i, o, u])
                            }(s.types.cloneNode(t.fileNameIdentifier), n.start.line, n.start.column)
                        }(e, t)))),
                        e.pushContainer("attributes", n)
                    }
                };
                return {
                    name: t,
                    inherits: i.default,
                    visitor: {
                        JSXNamespacedName: function(e) {
                            if (A)
                                throw e.buildCodeFrameError("Namespace tags are not supported by default. React's JSX doesn't support namespace tags. You can set `throwIfNamespace: false` to bypass this warning.")
                        },
                        JSXSpreadChild: function(e) {
                            throw e.buildCodeFrameError("Spread children are not supported in React.")
                        },
                        Program: {
                            enter: function(e, t) {
                                var r = t.file
                                  , i = D
                                  , l = _
                                  , d = N
                                  , v = L
                                  , P = !!o.importSource
                                  , O = !!o.pragma
                                  , A = !!o.pragmaFrag;
                                if (r.ast.comments) {
                                    var g, x = a(r.ast.comments);
                                    try {
                                        for (x.s(); !(g = x.n()).done; ) {
                                            var I = g.value
                                              , h = c.exec(I.value);
                                            h && (l = h[1],
                                            P = !0);
                                            var j = y.exec(I.value);
                                            j && (i = j[1]);
                                            var C = T.exec(I.value);
                                            C && (d = C[1],
                                            O = !0);
                                            var B = m.exec(I.value);
                                            B && (v = B[1],
                                            A = !0)
                                        }
                                    } catch (K) {
                                        x.e(K)
                                    } finally {
                                        x.f()
                                    }
                                }
                                if (E(t, "runtime", i),
                                "classic" === i) {
                                    if (P)
                                        throw e.buildCodeFrameError("importSource cannot be set when runtime is classic.");
                                    var w = b(d)
                                      , M = b(v);
                                    E(t, "id/createElement", (function() {
                                        return s.types.cloneNode(w)
                                    }
                                    )),
                                    E(t, "id/fragment", (function() {
                                        return s.types.cloneNode(M)
                                    }
                                    )),
                                    E(t, "defaultPure", d === f)
                                } else {
                                    if ("automatic" !== i)
                                        throw e.buildCodeFrameError('Runtime must be either "classic" or "automatic".');
                                    if (O || A)
                                        throw e.buildCodeFrameError("pragma and pragmaFrag cannot be set when runtime is automatic.");
                                    var R = function(r, a) {
                                        return E(t, r, function(e, t, r, a) {
                                            return function() {
                                                var i = function(e, t) {
                                                    switch (t) {
                                                    case "Fragment":
                                                        return "".concat(e, "/").concat(n ? "jsx-dev-runtime" : "jsx-runtime");
                                                    case "jsxDEV":
                                                        return "".concat(e, "/jsx-dev-runtime");
                                                    case "jsx":
                                                    case "jsxs":
                                                        return "".concat(e, "/jsx-runtime");
                                                    case "createElement":
                                                        return e
                                                    }
                                                }(a, r);
                                                if ((0,
                                                u.isModule)(t)) {
                                                    var o = S(e, "imports/".concat(r));
                                                    return o ? s.types.cloneNode(o) : (o = (0,
                                                    u.addNamed)(t, r, i, {
                                                        importedInterop: "uncompiled",
                                                        importPosition: "after"
                                                    }),
                                                    E(e, "imports/".concat(r), o),
                                                    o)
                                                }
                                                var l = S(e, "requires/".concat(i));
                                                return l ? l = s.types.cloneNode(l) : (l = (0,
                                                u.addNamespace)(t, i, {
                                                    importedInterop: "uncompiled"
                                                }),
                                                E(e, "requires/".concat(i), l)),
                                                s.types.memberExpression(l, s.types.identifier(r))
                                            }
                                        }(t, e, a, l))
                                    };
                                    R("id/jsx", n ? "jsxDEV" : "jsx"),
                                    R("id/jsxs", n ? "jsxDEV" : "jsxs"),
                                    R("id/createElement", "createElement"),
                                    R("id/fragment", "Fragment"),
                                    E(t, "defaultPure", l === p)
                                }
                                n && e.traverse(F, t)
                            }
                        },
                        JSXElement: {
                            exit: function(e, t) {
                                var i;
                                i = "classic" === S(t, "runtime") || function(e) {
                                    for (var t = e.get("openingElement").node.attributes, n = !1, r = 0; r < t.length; r++) {
                                        var a = t[r];
                                        if (n && s.types.isJSXAttribute(a) && "key" === a.name.name)
                                            return !0;
                                        s.types.isJSXSpreadAttribute(a) && (n = !0)
                                    }
                                    return !1
                                }(e) ? function(e, t) {
                                    var n = e.get("openingElement");
                                    return R(t, "createElement", [Y(n), U(t, e, n.get("attributes"))].concat(r(s.types.react.buildChildren(e.node))))
                                }(e, t) : function(e, t) {
                                    var r, i = e.get("openingElement"), o = [Y(i)], u = [], l = Object.create(null), p = a(i.get("attributes"));
                                    try {
                                        for (p.s(); !(r = p.n()).done; ) {
                                            var f = r.value;
                                            if (f.isJSXAttribute() && s.types.isJSXIdentifier(f.node.name)) {
                                                var d = f.node.name.name;
                                                switch (d) {
                                                case "__source":
                                                case "__self":
                                                    if (l[d])
                                                        throw v(e, d);
                                                case "key":
                                                    var c = K(f.node.value);
                                                    if (null === c)
                                                        throw f.buildCodeFrameError('Please provide an explicit key value. Using "key" as a shorthand for "key={true}" is not allowed.');
                                                    l[d] = c;
                                                    break;
                                                default:
                                                    u.push(f)
                                                }
                                            } else
                                                u.push(f)
                                        }
                                    } catch (b) {
                                        p.e(b)
                                    } finally {
                                        p.f()
                                    }
                                    var y, T, m, S, E = s.types.react.buildChildren(e.node);
                                    y = u.length || E.length ? function(e, t) {
                                        var n = e.reduce(V, []);
                                        (null == t ? void 0 : t.length) > 0 && n.push(k(t));
                                        return s.types.objectExpression(n)
                                    }(u, E) : s.types.objectExpression([]);
                                    o.push(y),
                                    n ? o.push(null != (T = l.key) ? T : e.scope.buildUndefinedNode(), s.types.booleanLiteral(E.length > 1), null != (m = l.__source) ? m : e.scope.buildUndefinedNode(), null != (S = l.__self) ? S : e.scope.buildUndefinedNode()) : void 0 !== l.key && o.push(l.key);
                                    return R(t, E.length > 1 ? "jsxs" : "jsx", o)
                                }(e, t),
                                e.replaceWith(s.types.inherits(i, e.node))
                            }
                        },
                        JSXFragment: {
                            exit: function(e, t) {
                                var a;
                                a = "classic" === S(t, "runtime") ? function(e, t) {
                                    if (g && !g(e.node, t))
                                        return;
                                    return R(t, "createElement", [S(t, "id/fragment")(), s.types.nullLiteral()].concat(r(s.types.react.buildChildren(e.node))))
                                }(e, t) : function(e, t) {
                                    var r = [S(t, "id/fragment")()]
                                      , a = s.types.react.buildChildren(e.node);
                                    r.push(s.types.objectExpression(a.length > 0 ? [k(a)] : [])),
                                    n && r.push(e.scope.buildUndefinedNode(), s.types.booleanLiteral(a.length > 1));
                                    return R(t, a.length > 1 ? "jsxs" : "jsx", r)
                                }(e, t),
                                e.replaceWith(s.types.inherits(a, e.node))
                            }
                        },
                        JSXAttribute: function(e) {
                            s.types.isJSXElement(e.node.value) && (e.node.value = s.types.jsxExpressionContainer(e.node.value))
                        }
                    }
                };
                function R(e, t, n) {
                    var r = s.types.callExpression(S(e, "id/".concat(t))(), n);
                    return (null != P ? P : S(e, "defaultPure")) && (0,
                    l.default)(r),
                    r
                }
                function K(e) {
                    return s.types.isJSXExpressionContainer(e) ? e.expression : e
                }
                function V(e, t) {
                    if (s.types.isJSXSpreadAttribute(t.node)) {
                        var n = t.node.argument;
                        return s.types.isObjectExpression(n) ? e.push.apply(e, r(n.properties)) : e.push(s.types.spreadElement(n)),
                        e
                    }
                    var a, i = K("key" !== t.node.name.name ? t.node.value || s.types.booleanLiteral(!0) : t.node.value);
                    if ("key" === t.node.name.name && null === i)
                        throw t.buildCodeFrameError('Please provide an explicit key value. Using "key" as a shorthand for "key={true}" is not allowed.');
                    s.types.isStringLiteral(i) && !s.types.isJSXExpressionContainer(t.node.value) && (i.value = i.value.replace(/\n\s+/g, " "),
                    null == (a = i.extra) || delete a.raw);
                    return s.types.isJSXNamespacedName(t.node.name) ? t.node.name = s.types.stringLiteral(t.node.name.namespace.name + ":" + t.node.name.name.name) : s.types.isValidIdentifier(t.node.name.name, !1) ? t.node.name.type = "Identifier" : t.node.name = s.types.stringLiteral(t.node.name.name),
                    e.push(s.types.inherits(s.types.objectProperty(t.node.name, i), t.node)),
                    e
                }
                function k(e) {
                    var t;
                    if (1 === e.length)
                        t = e[0];
                    else {
                        if (!(e.length > 1))
                            return;
                        t = s.types.arrayExpression(e)
                    }
                    return s.types.objectProperty(s.types.identifier("children"), t)
                }
                function Y(e) {
                    var t, n = function e(t, n) {
                        if (s.types.isJSXIdentifier(t)) {
                            if ("this" === t.name && s.types.isReferenced(t, n))
                                return s.types.thisExpression();
                            if (!s.types.isValidIdentifier(t.name, !1))
                                return s.types.stringLiteral(t.name);
                            t.type = "Identifier"
                        } else {
                            if (s.types.isJSXMemberExpression(t))
                                return s.types.memberExpression(e(t.object, t), e(t.property, t));
                            if (s.types.isJSXNamespacedName(t))
                                return s.types.stringLiteral("".concat(t.namespace.name, ":").concat(t.name.name))
                        }
                        return t
                    }(e.node.name, e.node);
                    return s.types.isIdentifier(n) ? t = n.name : s.types.isLiteral(n) && (t = n.value),
                    s.types.react.isCompatTag(t) ? s.types.stringLiteral(t) : n
                }
                function U(e, t, n) {
                    var r = S(e, "runtime");
                    if ("automatic" !== r) {
                        var i = []
                          , o = n.reduce(V, []);
                        if (B)
                            o.length && i.push(s.types.objectExpression(o));
                        else {
                            var u = 0;
                            o.forEach((function(e, t) {
                                s.types.isSpreadElement(e) && (t > u && i.push(s.types.objectExpression(o.slice(u, t))),
                                i.push(e.argument),
                                u = t + 1)
                            }
                            )),
                            o.length > u && i.push(s.types.objectExpression(o.slice(u)))
                        }
                        if (!i.length)
                            return s.types.nullLiteral();
                        if (1 === i.length)
                            return i[0];
                        s.types.isObjectExpression(i[0]) || i.unshift(s.types.objectExpression([]));
                        var l = M ? s.types.memberExpression(s.types.identifier("Object"), s.types.identifier("assign")) : e.addHelper("extends");
                        return s.types.callExpression(l, i)
                    }
                    var p, f = [], d = Object.create(null), c = a(n);
                    try {
                        for (c.s(); !(p = c.n()).done; ) {
                            var y = p.value
                              , T = s.types.isJSXAttribute(y) && s.types.isJSXIdentifier(y.name) && y.name.name;
                            if ("automatic" === r && ("__source" === T || "__self" === T)) {
                                if (d[T])
                                    throw v(t, T);
                                d[T] = !0
                            }
                            V(f, y)
                        }
                    } catch (m) {
                        c.e(m)
                    } finally {
                        c.f()
                    }
                    return 1 === f.length && s.types.isSpreadElement(f[0]) ? f[0].argument : f.length > 0 ? s.types.objectExpression(f) : s.types.nullLiteral()
                }
            }
            ))
        }
        ;
        var i = n(2884)
          , o = n(2700)
          , s = n(2668)
          , u = n(3142)
          , l = n(3195)
          , p = "react"
          , f = "React.createElement"
          , d = "React.Fragment"
          , c = /\*?\s*@jsxImportSource\s+([^\s]+)/
          , y = /\*?\s*@jsxRuntime\s+([^\s]+)/
          , T = /\*?\s*@jsx\s+([^\s]+)/
          , m = /\*?\s*@jsxFrag\s+([^\s]+)/
          , S = function(e, t) {
            return e.get("@babel/plugin-react-jsx/".concat(t))
        }
          , E = function(e, t, n) {
            return e.set("@babel/plugin-react-jsx/".concat(t), n)
        };
        function b(e) {
            return e.split(".").map((function(e) {
                return s.types.identifier(e)
            }
            )).reduce((function(e, t) {
                return s.types.memberExpression(e, t)
            }
            ))
        }
        function v(e, t) {
            var n = "transform-react-jsx-".concat(t.slice(2));
            return e.buildCodeFrameError("Duplicate ".concat(t, " prop found. You are most likely using the deprecated ").concat(n, " Babel plugin. Both __source and __self are automatically set when using the automatic runtime. Please remove transform-react-jsx-source and transform-react-jsx-self from your Babel config."))
        }
    },
    2819: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            var n = e.split(".");
            return function(e) {
                return (0,
                r.default)(e, n, t)
            }
        }
        ;
        var r = n(2820)
    },
    2820: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            if (!(0,
            r.isMemberExpression)(e))
                return !1;
            var a, i = Array.isArray(t) ? t : t.split("."), o = [];
            for (a = e; (0,
            r.isMemberExpression)(a); a = a.object)
                o.push(a.property);
            if (o.push(a),
            o.length < i.length)
                return !1;
            if (!n && o.length > i.length)
                return !1;
            for (var s = 0, u = o.length - 1; s < i.length; s++,
            u--) {
                var l = o[u]
                  , p = void 0;
                if ((0,
                r.isIdentifier)(l))
                    p = l.name;
                else if ((0,
                r.isStringLiteral)(l))
                    p = l.value;
                else {
                    if (!(0,
                    r.isThisExpression)(l))
                        return !1;
                    p = "this"
                }
                if (i[s] !== p)
                    return !1
            }
            return !0
        }
        ;
        var r = n(2637)
    },
    2821: function(e, t, n) {
        "use strict";
        var r = n(624)
          , a = n(806);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.patternLikeCommon = t.functionTypeAnnotationCommon = t.functionDeclarationCommon = t.functionCommon = t.classMethodOrPropertyCommon = t.classMethodOrDeclareMethodCommon = void 0;
        var i = n(2678)
          , o = n(2679)
          , s = n(2720)
          , u = n(2661)
          , l = n(2654)
          , p = (0,
        l.defineAliasedType)("Standardized");
        p("ArrayExpression", {
            fields: {
                elements: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
                    default: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? void 0 : []
                }
            },
            visitor: ["elements"],
            aliases: ["Expression"]
        }),
        p("AssignmentExpression", {
            fields: {
                operator: {
                    validate: function() {
                        if (!Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING)
                            return (0,
                            l.assertValueType)("string");
                        var e = l.assertOneOf.apply(void 0, a(u.ASSIGNMENT_OPERATORS))
                          , t = (0,
                        l.assertOneOf)("=");
                        return function(n, r, a) {
                            ((0,
                            i.default)("Pattern", n.left) ? t : e)(n, r, a)
                        }
                    }()
                },
                left: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern") : (0,
                    l.assertNodeType)("LVal")
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            },
            builder: ["operator", "left", "right"],
            visitor: ["left", "right"],
            aliases: ["Expression"]
        }),
        p("BinaryExpression", {
            builder: ["operator", "left", "right"],
            fields: {
                operator: {
                    validate: l.assertOneOf.apply(void 0, a(u.BINARY_OPERATORS))
                },
                left: {
                    validate: function() {
                        var e = (0,
                        l.assertNodeType)("Expression")
                          , t = (0,
                        l.assertNodeType)("Expression", "PrivateName")
                          , n = function(n, r, a) {
                            var i = "in" === n.operator ? t : e;
                            i(n, r, a)
                        };
                        return n.oneOfNodeTypes = ["Expression", "PrivateName"],
                        n
                    }()
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            },
            visitor: ["left", "right"],
            aliases: ["Binary", "Expression"]
        }),
        p("InterpreterDirective", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("string")
                }
            }
        }),
        p("Directive", {
            visitor: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertNodeType)("DirectiveLiteral")
                }
            }
        }),
        p("DirectiveLiteral", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("string")
                }
            }
        }),
        p("BlockStatement", {
            builder: ["body", "directives"],
            visitor: ["directives", "body"],
            fields: {
                directives: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Directive"))),
                    default: []
                },
                body: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Statement")))
                }
            },
            aliases: ["Scopable", "BlockParent", "Block", "Statement"]
        }),
        p("BreakStatement", {
            visitor: ["label"],
            fields: {
                label: {
                    validate: (0,
                    l.assertNodeType)("Identifier"),
                    optional: !0
                }
            },
            aliases: ["Statement", "Terminatorless", "CompletionStatement"]
        }),
        p("CallExpression", {
            visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
            builder: ["callee", "arguments"],
            aliases: ["Expression"],
            fields: Object.assign({
                callee: {
                    validate: (0,
                    l.assertNodeType)("Expression", "V8IntrinsicIdentifier")
                },
                arguments: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
                }
            }, Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0
            }).BABEL_TYPES_8_BREAKING ? {} : {
                optional: {
                    validate: (0,
                    l.assertOneOf)(!0, !1),
                    optional: !0
                }
            }, {
                typeArguments: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterInstantiation"),
                    optional: !0
                },
                typeParameters: {
                    validate: (0,
                    l.assertNodeType)("TSTypeParameterInstantiation"),
                    optional: !0
                }
            })
        }),
        p("CatchClause", {
            visitor: ["param", "body"],
            fields: {
                param: {
                    validate: (0,
                    l.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            },
            aliases: ["Scopable", "BlockParent"]
        }),
        p("ConditionalExpression", {
            visitor: ["test", "consequent", "alternate"],
            fields: {
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                consequent: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                alternate: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            },
            aliases: ["Expression", "Conditional"]
        }),
        p("ContinueStatement", {
            visitor: ["label"],
            fields: {
                label: {
                    validate: (0,
                    l.assertNodeType)("Identifier"),
                    optional: !0
                }
            },
            aliases: ["Statement", "Terminatorless", "CompletionStatement"]
        }),
        p("DebuggerStatement", {
            aliases: ["Statement"]
        }),
        p("DoWhileStatement", {
            visitor: ["test", "body"],
            fields: {
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            },
            aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
        }),
        p("EmptyStatement", {
            aliases: ["Statement"]
        }),
        p("ExpressionStatement", {
            visitor: ["expression"],
            fields: {
                expression: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            },
            aliases: ["Statement", "ExpressionWrapper"]
        }),
        p("File", {
            builder: ["program", "comments", "tokens"],
            visitor: ["program"],
            fields: {
                program: {
                    validate: (0,
                    l.assertNodeType)("Program")
                },
                comments: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.assertEach)((0,
                    l.assertNodeType)("CommentBlock", "CommentLine")) : Object.assign((function() {}
                    ), {
                        each: {
                            oneOfNodeTypes: ["CommentBlock", "CommentLine"]
                        }
                    }),
                    optional: !0
                },
                tokens: {
                    validate: (0,
                    l.assertEach)(Object.assign((function() {}
                    ), {
                        type: "any"
                    })),
                    optional: !0
                }
            }
        }),
        p("ForInStatement", {
            visitor: ["left", "right", "body"],
            aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
            fields: {
                left: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern") : (0,
                    l.assertNodeType)("VariableDeclaration", "LVal")
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        }),
        p("ForStatement", {
            visitor: ["init", "test", "update", "body"],
            aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
            fields: {
                init: {
                    validate: (0,
                    l.assertNodeType)("VariableDeclaration", "Expression"),
                    optional: !0
                },
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                },
                update: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        });
        var f = {
            params: {
                validate: (0,
                l.chain)((0,
                l.assertValueType)("array"), (0,
                l.assertEach)((0,
                l.assertNodeType)("Identifier", "Pattern", "RestElement")))
            },
            generator: {
                default: !1
            },
            async: {
                default: !1
            }
        };
        t.functionCommon = f;
        var d = {
            returnType: {
                validate: (0,
                l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
                optional: !0
            },
            typeParameters: {
                validate: (0,
                l.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
                optional: !0
            }
        };
        t.functionTypeAnnotationCommon = d;
        var c = Object.assign({}, f, {
            declare: {
                validate: (0,
                l.assertValueType)("boolean"),
                optional: !0
            },
            id: {
                validate: (0,
                l.assertNodeType)("Identifier"),
                optional: !0
            }
        });
        t.functionDeclarationCommon = c,
        p("FunctionDeclaration", {
            builder: ["id", "params", "body", "generator", "async"],
            visitor: ["id", "params", "body", "returnType", "typeParameters"],
            fields: Object.assign({}, c, d, {
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            }),
            aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
            validate: function() {
                if (!Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0
                }).BABEL_TYPES_8_BREAKING)
                    return function() {}
                    ;
                var e = (0,
                l.assertNodeType)("Identifier");
                return function(t, n, r) {
                    (0,
                    i.default)("ExportDefaultDeclaration", t) || e(r, "id", r.id)
                }
            }()
        }),
        p("FunctionExpression", {
            inherits: "FunctionDeclaration",
            aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
            fields: Object.assign({}, f, d, {
                id: {
                    validate: (0,
                    l.assertNodeType)("Identifier"),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            })
        });
        var y = {
            typeAnnotation: {
                validate: (0,
                l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
                optional: !0
            },
            decorators: {
                validate: (0,
                l.chain)((0,
                l.assertValueType)("array"), (0,
                l.assertEach)((0,
                l.assertNodeType)("Decorator")))
            }
        };
        t.patternLikeCommon = y,
        p("Identifier", {
            builder: ["name"],
            visitor: ["typeAnnotation", "decorators"],
            aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
            fields: Object.assign({}, y, {
                name: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("string"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && !(0,
                        o.default)(n, !1))
                            throw new TypeError('"'.concat(n, '" is not a valid identifier name'))
                    }
                    ), {
                        type: "string"
                    }))
                },
                optional: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                }
            }),
            validate: function(e, t, n) {
                if (Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0
                }).BABEL_TYPES_8_BREAKING) {
                    var a = /\.(\w+)$/.exec(t);
                    if (a) {
                        var o = r(a, 2)[1]
                          , u = {
                            computed: !1
                        };
                        if ("property" === o) {
                            if ((0,
                            i.default)("MemberExpression", e, u))
                                return;
                            if ((0,
                            i.default)("OptionalMemberExpression", e, u))
                                return
                        } else if ("key" === o) {
                            if ((0,
                            i.default)("Property", e, u))
                                return;
                            if ((0,
                            i.default)("Method", e, u))
                                return
                        } else if ("exported" === o) {
                            if ((0,
                            i.default)("ExportSpecifier", e))
                                return
                        } else if ("imported" === o) {
                            if ((0,
                            i.default)("ImportSpecifier", e, {
                                imported: n
                            }))
                                return
                        } else if ("meta" === o && (0,
                        i.default)("MetaProperty", e, {
                            meta: n
                        }))
                            return;
                        if (((0,
                        s.isKeyword)(n.name) || (0,
                        s.isReservedWord)(n.name, !1)) && "this" !== n.name)
                            throw new TypeError('"'.concat(n.name, '" is not a valid identifier'))
                    }
                }
            }
        }),
        p("IfStatement", {
            visitor: ["test", "consequent", "alternate"],
            aliases: ["Statement", "Conditional"],
            fields: {
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                consequent: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                },
                alternate: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        }),
        p("LabeledStatement", {
            visitor: ["label", "body"],
            aliases: ["Statement"],
            fields: {
                label: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        }),
        p("StringLiteral", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("string")
                }
            },
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        p("NumericLiteral", {
            builder: ["value"],
            deprecatedAlias: "NumberLiteral",
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("number")
                }
            },
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        p("NullLiteral", {
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        p("BooleanLiteral", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("boolean")
                }
            },
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        p("RegExpLiteral", {
            builder: ["pattern", "flags"],
            deprecatedAlias: "RegexLiteral",
            aliases: ["Expression", "Pureish", "Literal"],
            fields: {
                pattern: {
                    validate: (0,
                    l.assertValueType)("string")
                },
                flags: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("string"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING) {
                            var r = /[^gimsuy]/.exec(n);
                            if (r)
                                throw new TypeError('"'.concat(r[0], '" is not a valid RegExp flag'))
                        }
                    }
                    ), {
                        type: "string"
                    })),
                    default: ""
                }
            }
        }),
        p("LogicalExpression", {
            builder: ["operator", "left", "right"],
            visitor: ["left", "right"],
            aliases: ["Binary", "Expression"],
            fields: {
                operator: {
                    validate: l.assertOneOf.apply(void 0, a(u.LOGICAL_OPERATORS))
                },
                left: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("MemberExpression", {
            builder: ["object", "property", "computed"].concat(a(Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0
            }).BABEL_TYPES_8_BREAKING ? [] : ["optional"])),
            visitor: ["object", "property"],
            aliases: ["Expression", "LVal"],
            fields: Object.assign({
                object: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                property: {
                    validate: function() {
                        var e = (0,
                        l.assertNodeType)("Identifier", "PrivateName")
                          , t = (0,
                        l.assertNodeType)("Expression")
                          , n = function(n, r, a) {
                            var i = n.computed ? t : e;
                            i(n, r, a)
                        };
                        return n.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"],
                        n
                    }()
                },
                computed: {
                    default: !1
                }
            }, Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0
            }).BABEL_TYPES_8_BREAKING ? {} : {
                optional: {
                    validate: (0,
                    l.assertOneOf)(!0, !1),
                    optional: !0
                }
            })
        }),
        p("NewExpression", {
            inherits: "CallExpression"
        }),
        p("Program", {
            visitor: ["directives", "body"],
            builder: ["body", "directives", "sourceType", "interpreter"],
            fields: {
                sourceFile: {
                    validate: (0,
                    l.assertValueType)("string")
                },
                sourceType: {
                    validate: (0,
                    l.assertOneOf)("script", "module"),
                    default: "script"
                },
                interpreter: {
                    validate: (0,
                    l.assertNodeType)("InterpreterDirective"),
                    default: null,
                    optional: !0
                },
                directives: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Directive"))),
                    default: []
                },
                body: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Statement")))
                }
            },
            aliases: ["Scopable", "BlockParent", "Block"]
        }),
        p("ObjectExpression", {
            visitor: ["properties"],
            aliases: ["Expression"],
            fields: {
                properties: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
                }
            }
        }),
        p("ObjectMethod", {
            builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
            fields: Object.assign({}, f, d, {
                kind: Object.assign({
                    validate: (0,
                    l.assertOneOf)("method", "get", "set")
                }, Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0
                }).BABEL_TYPES_8_BREAKING ? {} : {
                    default: "method"
                }),
                computed: {
                    default: !1
                },
                key: {
                    validate: function() {
                        var e = (0,
                        l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral")
                          , t = (0,
                        l.assertNodeType)("Expression")
                          , n = function(n, r, a) {
                            var i = n.computed ? t : e;
                            i(n, r, a)
                        };
                        return n.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"],
                        n
                    }()
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            }),
            visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
            aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
        }),
        p("ObjectProperty", {
            builder: ["key", "value", "computed", "shorthand"].concat(a(Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0
            }).BABEL_TYPES_8_BREAKING ? [] : ["decorators"])),
            fields: {
                computed: {
                    default: !1
                },
                key: {
                    validate: function() {
                        var e = (0,
                        l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral")
                          , t = (0,
                        l.assertNodeType)("Expression")
                          , n = function(n, r, a) {
                            var i = n.computed ? t : e;
                            i(n, r, a)
                        };
                        return n.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"],
                        n
                    }()
                },
                value: {
                    validate: (0,
                    l.assertNodeType)("Expression", "PatternLike")
                },
                shorthand: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("boolean"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && n && e.computed)
                            throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true")
                    }
                    ), {
                        type: "boolean"
                    }), (function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && n && !(0,
                        i.default)("Identifier", e.key))
                            throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier")
                    }
                    )),
                    default: !1
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                }
            },
            visitor: ["key", "value", "decorators"],
            aliases: ["UserWhitespacable", "Property", "ObjectMember"],
            validate: function() {
                var e = (0,
                l.assertNodeType)("Identifier", "Pattern")
                  , t = (0,
                l.assertNodeType)("Expression");
                return function(n, r, a) {
                    Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING && ((0,
                    i.default)("ObjectPattern", n) ? e : t)(a, "value", a.value)
                }
            }()
        }),
        p("RestElement", {
            visitor: ["argument", "typeAnnotation"],
            builder: ["argument"],
            aliases: ["LVal", "PatternLike"],
            deprecatedAlias: "RestProperty",
            fields: Object.assign({}, y, {
                argument: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression") : (0,
                    l.assertNodeType)("LVal")
                },
                optional: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                }
            }),
            validate: function(e, t) {
                if (Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0
                }).BABEL_TYPES_8_BREAKING) {
                    var n = /(\w+)\[(\d+)\]/.exec(t);
                    if (!n)
                        throw new Error("Internal Babel error: malformed key.");
                    var a = r(n, 3)
                      , i = a[1]
                      , o = a[2];
                    if (e[i].length > o + 1)
                        throw new TypeError("RestElement must be last element of ".concat(i))
                }
            }
        }),
        p("ReturnStatement", {
            visitor: ["argument"],
            aliases: ["Statement", "Terminatorless", "CompletionStatement"],
            fields: {
                argument: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                }
            }
        }),
        p("SequenceExpression", {
            visitor: ["expressions"],
            fields: {
                expressions: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Expression")))
                }
            },
            aliases: ["Expression"]
        }),
        p("ParenthesizedExpression", {
            visitor: ["expression"],
            aliases: ["Expression", "ExpressionWrapper"],
            fields: {
                expression: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("SwitchCase", {
            visitor: ["test", "consequent"],
            fields: {
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                },
                consequent: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Statement")))
                }
            }
        }),
        p("SwitchStatement", {
            visitor: ["discriminant", "cases"],
            aliases: ["Statement", "BlockParent", "Scopable"],
            fields: {
                discriminant: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                cases: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("SwitchCase")))
                }
            }
        }),
        p("ThisExpression", {
            aliases: ["Expression"]
        }),
        p("ThrowStatement", {
            visitor: ["argument"],
            aliases: ["Statement", "Terminatorless", "CompletionStatement"],
            fields: {
                argument: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("TryStatement", {
            visitor: ["block", "handler", "finalizer"],
            aliases: ["Statement"],
            fields: {
                block: {
                    validate: (0,
                    l.chain)((0,
                    l.assertNodeType)("BlockStatement"), Object.assign((function(e) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && !e.handler && !e.finalizer)
                            throw new TypeError("TryStatement expects either a handler or finalizer, or both")
                    }
                    ), {
                        oneOfNodeTypes: ["BlockStatement"]
                    }))
                },
                handler: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("CatchClause")
                },
                finalizer: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            }
        }),
        p("UnaryExpression", {
            builder: ["operator", "argument", "prefix"],
            fields: {
                prefix: {
                    default: !0
                },
                argument: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                operator: {
                    validate: l.assertOneOf.apply(void 0, a(u.UNARY_OPERATORS))
                }
            },
            visitor: ["argument"],
            aliases: ["UnaryLike", "Expression"]
        }),
        p("UpdateExpression", {
            builder: ["operator", "argument", "prefix"],
            fields: {
                prefix: {
                    default: !1
                },
                argument: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.assertNodeType)("Identifier", "MemberExpression") : (0,
                    l.assertNodeType)("Expression")
                },
                operator: {
                    validate: l.assertOneOf.apply(void 0, a(u.UPDATE_OPERATORS))
                }
            },
            visitor: ["argument"],
            aliases: ["Expression"]
        }),
        p("VariableDeclaration", {
            builder: ["kind", "declarations"],
            visitor: ["declarations"],
            aliases: ["Statement", "Declaration"],
            fields: {
                declare: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                kind: {
                    validate: (0,
                    l.assertOneOf)("var", "let", "const")
                },
                declarations: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("VariableDeclarator")))
                }
            },
            validate: function(e, t, n) {
                if (Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0
                }).BABEL_TYPES_8_BREAKING && (0,
                i.default)("ForXStatement", e, {
                    left: n
                }) && 1 !== n.declarations.length)
                    throw new TypeError("Exactly one VariableDeclarator is required in the VariableDeclaration of a ".concat(e.type))
            }
        }),
        p("VariableDeclarator", {
            visitor: ["id", "init"],
            fields: {
                id: {
                    validate: function() {
                        if (!Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING)
                            return (0,
                            l.assertNodeType)("LVal");
                        var e = (0,
                        l.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern")
                          , t = (0,
                        l.assertNodeType)("Identifier");
                        return function(n, r, a) {
                            (n.init ? e : t)(n, r, a)
                        }
                    }()
                },
                definite: {
                    optional: !0,
                    validate: (0,
                    l.assertValueType)("boolean")
                },
                init: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("WhileStatement", {
            visitor: ["test", "body"],
            aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
            fields: {
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        }),
        p("WithStatement", {
            visitor: ["object", "body"],
            aliases: ["Statement"],
            fields: {
                object: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        }),
        p("AssignmentPattern", {
            visitor: ["left", "right", "decorators"],
            builder: ["left", "right"],
            aliases: ["Pattern", "PatternLike", "LVal"],
            fields: Object.assign({}, y, {
                left: {
                    validate: (0,
                    l.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression")
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                }
            })
        }),
        p("ArrayPattern", {
            visitor: ["elements", "typeAnnotation"],
            builder: ["elements"],
            aliases: ["Pattern", "PatternLike", "LVal"],
            fields: Object.assign({}, y, {
                elements: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeOrValueType)("null", "PatternLike")))
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                optional: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                }
            })
        }),
        p("ArrowFunctionExpression", {
            builder: ["params", "body", "async"],
            visitor: ["params", "body", "returnType", "typeParameters"],
            aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
            fields: Object.assign({}, f, d, {
                expression: {
                    validate: (0,
                    l.assertValueType)("boolean")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement", "Expression")
                }
            })
        }),
        p("ClassBody", {
            visitor: ["body"],
            fields: {
                body: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "TSDeclareMethod", "TSIndexSignature")))
                }
            }
        }),
        p("ClassExpression", {
            builder: ["id", "superClass", "body", "decorators"],
            visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
            aliases: ["Scopable", "Class", "Expression"],
            fields: {
                id: {
                    validate: (0,
                    l.assertNodeType)("Identifier"),
                    optional: !0
                },
                typeParameters: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("ClassBody")
                },
                superClass: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                superTypeParameters: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
                    optional: !0
                },
                implements: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
                    optional: !0
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                mixins: {
                    validate: (0,
                    l.assertNodeType)("InterfaceExtends"),
                    optional: !0
                }
            }
        }),
        p("ClassDeclaration", {
            inherits: "ClassExpression",
            aliases: ["Scopable", "Class", "Statement", "Declaration"],
            fields: {
                id: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                },
                typeParameters: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("ClassBody")
                },
                superClass: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                superTypeParameters: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
                    optional: !0
                },
                implements: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
                    optional: !0
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                mixins: {
                    validate: (0,
                    l.assertNodeType)("InterfaceExtends"),
                    optional: !0
                },
                declare: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                abstract: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                }
            },
            validate: function() {
                var e = (0,
                l.assertNodeType)("Identifier");
                return function(t, n, r) {
                    Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING && ((0,
                    i.default)("ExportDefaultDeclaration", t) || e(r, "id", r.id))
                }
            }()
        }),
        p("ExportAllDeclaration", {
            visitor: ["source"],
            aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
            fields: {
                source: {
                    validate: (0,
                    l.assertNodeType)("StringLiteral")
                },
                exportKind: (0,
                l.validateOptional)((0,
                l.assertOneOf)("type", "value")),
                assertions: {
                    optional: !0,
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ImportAttribute")))
                }
            }
        }),
        p("ExportDefaultDeclaration", {
            visitor: ["declaration"],
            aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
            fields: {
                declaration: {
                    validate: (0,
                    l.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
                },
                exportKind: (0,
                l.validateOptional)((0,
                l.assertOneOf)("value"))
            }
        }),
        p("ExportNamedDeclaration", {
            visitor: ["declaration", "specifiers", "source"],
            aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
            fields: {
                declaration: {
                    optional: !0,
                    validate: (0,
                    l.chain)((0,
                    l.assertNodeType)("Declaration"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && n && e.specifiers.length)
                            throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration")
                    }
                    ), {
                        oneOfNodeTypes: ["Declaration"]
                    }), (function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && n && e.source)
                            throw new TypeError("Cannot export a declaration from a source")
                    }
                    ))
                },
                assertions: {
                    optional: !0,
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ImportAttribute")))
                },
                specifiers: {
                    default: [],
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)(function() {
                        var e = (0,
                        l.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier")
                          , t = (0,
                        l.assertNodeType)("ExportSpecifier");
                        return Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING ? function(n, r, a) {
                            (n.source ? e : t)(n, r, a)
                        }
                        : e
                    }()))
                },
                source: {
                    validate: (0,
                    l.assertNodeType)("StringLiteral"),
                    optional: !0
                },
                exportKind: (0,
                l.validateOptional)((0,
                l.assertOneOf)("type", "value"))
            }
        }),
        p("ExportSpecifier", {
            visitor: ["local", "exported"],
            aliases: ["ModuleSpecifier"],
            fields: {
                local: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                },
                exported: {
                    validate: (0,
                    l.assertNodeType)("Identifier", "StringLiteral")
                },
                exportKind: {
                    validate: (0,
                    l.assertOneOf)("type", "value"),
                    optional: !0
                }
            }
        }),
        p("ForOfStatement", {
            visitor: ["left", "right", "body"],
            builder: ["left", "right", "body", "await"],
            aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
            fields: {
                left: {
                    validate: function() {
                        if (!Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING)
                            return (0,
                            l.assertNodeType)("VariableDeclaration", "LVal");
                        var e = (0,
                        l.assertNodeType)("VariableDeclaration")
                          , t = (0,
                        l.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern");
                        return function(n, r, a) {
                            (0,
                            i.default)("VariableDeclaration", a) ? e(n, r, a) : t(n, r, a)
                        }
                    }()
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                },
                await: {
                    default: !1
                }
            }
        }),
        p("ImportDeclaration", {
            visitor: ["specifiers", "source"],
            aliases: ["Statement", "Declaration", "ModuleDeclaration"],
            fields: {
                assertions: {
                    optional: !0,
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ImportAttribute")))
                },
                specifiers: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
                },
                source: {
                    validate: (0,
                    l.assertNodeType)("StringLiteral")
                },
                importKind: {
                    validate: (0,
                    l.assertOneOf)("type", "typeof", "value"),
                    optional: !0
                }
            }
        }),
        p("ImportDefaultSpecifier", {
            visitor: ["local"],
            aliases: ["ModuleSpecifier"],
            fields: {
                local: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                }
            }
        }),
        p("ImportNamespaceSpecifier", {
            visitor: ["local"],
            aliases: ["ModuleSpecifier"],
            fields: {
                local: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                }
            }
        }),
        p("ImportSpecifier", {
            visitor: ["local", "imported"],
            aliases: ["ModuleSpecifier"],
            fields: {
                local: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                },
                imported: {
                    validate: (0,
                    l.assertNodeType)("Identifier", "StringLiteral")
                },
                importKind: {
                    validate: (0,
                    l.assertOneOf)("type", "typeof", "value"),
                    optional: !0
                }
            }
        }),
        p("MetaProperty", {
            visitor: ["meta", "property"],
            aliases: ["Expression"],
            fields: {
                meta: {
                    validate: (0,
                    l.chain)((0,
                    l.assertNodeType)("Identifier"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING) {
                            var r;
                            switch (n.name) {
                            case "function":
                                r = "sent";
                                break;
                            case "new":
                                r = "target";
                                break;
                            case "import":
                                r = "meta"
                            }
                            if (!(0,
                            i.default)("Identifier", e.property, {
                                name: r
                            }))
                                throw new TypeError("Unrecognised MetaProperty")
                        }
                    }
                    ), {
                        oneOfNodeTypes: ["Identifier"]
                    }))
                },
                property: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                }
            }
        });
        var T = {
            abstract: {
                validate: (0,
                l.assertValueType)("boolean"),
                optional: !0
            },
            accessibility: {
                validate: (0,
                l.assertOneOf)("public", "private", "protected"),
                optional: !0
            },
            static: {
                default: !1
            },
            override: {
                default: !1
            },
            computed: {
                default: !1
            },
            optional: {
                validate: (0,
                l.assertValueType)("boolean"),
                optional: !0
            },
            key: {
                validate: (0,
                l.chain)(function() {
                    var e = (0,
                    l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral")
                      , t = (0,
                    l.assertNodeType)("Expression");
                    return function(n, r, a) {
                        (n.computed ? t : e)(n, r, a)
                    }
                }(), (0,
                l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
            }
        };
        t.classMethodOrPropertyCommon = T;
        var m = Object.assign({}, f, T, {
            params: {
                validate: (0,
                l.chain)((0,
                l.assertValueType)("array"), (0,
                l.assertEach)((0,
                l.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
            },
            kind: {
                validate: (0,
                l.assertOneOf)("get", "set", "method", "constructor"),
                default: "method"
            },
            access: {
                validate: (0,
                l.chain)((0,
                l.assertValueType)("string"), (0,
                l.assertOneOf)("public", "private", "protected")),
                optional: !0
            },
            decorators: {
                validate: (0,
                l.chain)((0,
                l.assertValueType)("array"), (0,
                l.assertEach)((0,
                l.assertNodeType)("Decorator"))),
                optional: !0
            }
        });
        t.classMethodOrDeclareMethodCommon = m,
        p("ClassMethod", {
            aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
            builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
            visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
            fields: Object.assign({}, m, d, {
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            })
        }),
        p("ObjectPattern", {
            visitor: ["properties", "typeAnnotation", "decorators"],
            builder: ["properties"],
            aliases: ["Pattern", "PatternLike", "LVal"],
            fields: Object.assign({}, y, {
                properties: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("RestElement", "ObjectProperty")))
                }
            })
        }),
        p("SpreadElement", {
            visitor: ["argument"],
            aliases: ["UnaryLike"],
            deprecatedAlias: "SpreadProperty",
            fields: {
                argument: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("Super", {
            aliases: ["Expression"]
        }),
        p("TaggedTemplateExpression", {
            visitor: ["tag", "quasi", "typeParameters"],
            builder: ["tag", "quasi"],
            aliases: ["Expression"],
            fields: {
                tag: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                quasi: {
                    validate: (0,
                    l.assertNodeType)("TemplateLiteral")
                },
                typeParameters: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
                    optional: !0
                }
            }
        }),
        p("TemplateElement", {
            builder: ["value", "tail"],
            fields: {
                value: {
                    validate: (0,
                    l.assertShape)({
                        raw: {
                            validate: (0,
                            l.assertValueType)("string")
                        },
                        cooked: {
                            validate: (0,
                            l.assertValueType)("string"),
                            optional: !0
                        }
                    })
                },
                tail: {
                    default: !1
                }
            }
        }),
        p("TemplateLiteral", {
            visitor: ["quasis", "expressions"],
            aliases: ["Expression", "Literal"],
            fields: {
                quasis: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("TemplateElement")))
                },
                expressions: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Expression", "TSType")), (function(e, t, n) {
                        if (e.quasis.length !== n.length + 1)
                            throw new TypeError("Number of ".concat(e.type, " quasis should be exactly one more than the number of expressions.\nExpected ").concat(n.length + 1, " quasis but got ").concat(e.quasis.length))
                    }
                    ))
                }
            }
        }),
        p("YieldExpression", {
            builder: ["argument", "delegate"],
            visitor: ["argument"],
            aliases: ["Expression", "Terminatorless"],
            fields: {
                delegate: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("boolean"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && n && !e.argument)
                            throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument")
                    }
                    ), {
                        type: "boolean"
                    })),
                    default: !1
                },
                argument: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("AwaitExpression", {
            builder: ["argument"],
            visitor: ["argument"],
            aliases: ["Expression", "Terminatorless"],
            fields: {
                argument: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("Import", {
            aliases: ["Expression"]
        }),
        p("BigIntLiteral", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("string")
                }
            },
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        p("ExportNamespaceSpecifier", {
            visitor: ["exported"],
            aliases: ["ModuleSpecifier"],
            fields: {
                exported: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                }
            }
        }),
        p("OptionalMemberExpression", {
            builder: ["object", "property", "computed", "optional"],
            visitor: ["object", "property"],
            aliases: ["Expression"],
            fields: {
                object: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                property: {
                    validate: function() {
                        var e = (0,
                        l.assertNodeType)("Identifier")
                          , t = (0,
                        l.assertNodeType)("Expression")
                          , n = function(n, r, a) {
                            var i = n.computed ? t : e;
                            i(n, r, a)
                        };
                        return n.oneOfNodeTypes = ["Expression", "Identifier"],
                        n
                    }()
                },
                computed: {
                    default: !1
                },
                optional: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.chain)((0,
                    l.assertValueType)("boolean"), (0,
                    l.assertOptionalChainStart)()) : (0,
                    l.assertValueType)("boolean")
                }
            }
        }),
        p("OptionalCallExpression", {
            visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
            builder: ["callee", "arguments", "optional"],
            aliases: ["Expression"],
            fields: {
                callee: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                arguments: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
                },
                optional: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.chain)((0,
                    l.assertValueType)("boolean"), (0,
                    l.assertOptionalChainStart)()) : (0,
                    l.assertValueType)("boolean")
                },
                typeArguments: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterInstantiation"),
                    optional: !0
                },
                typeParameters: {
                    validate: (0,
                    l.assertNodeType)("TSTypeParameterInstantiation"),
                    optional: !0
                }
            }
        }),
        p("ClassProperty", {
            visitor: ["key", "value", "typeAnnotation", "decorators"],
            builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
            aliases: ["Property"],
            fields: Object.assign({}, T, {
                value: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                },
                definite: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                typeAnnotation: {
                    validate: (0,
                    l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
                    optional: !0
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                readonly: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                declare: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                variance: {
                    validate: (0,
                    l.assertNodeType)("Variance"),
                    optional: !0
                }
            })
        }),
        p("ClassPrivateProperty", {
            visitor: ["key", "value", "decorators", "typeAnnotation"],
            builder: ["key", "value", "decorators", "static"],
            aliases: ["Property", "Private"],
            fields: {
                key: {
                    validate: (0,
                    l.assertNodeType)("PrivateName")
                },
                value: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                },
                typeAnnotation: {
                    validate: (0,
                    l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
                    optional: !0
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                readonly: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                definite: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                variance: {
                    validate: (0,
                    l.assertNodeType)("Variance"),
                    optional: !0
                }
            }
        }),
        p("ClassPrivateMethod", {
            builder: ["kind", "key", "params", "body", "static"],
            visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
            aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
            fields: Object.assign({}, m, d, {
                key: {
                    validate: (0,
                    l.assertNodeType)("PrivateName")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            })
        }),
        p("PrivateName", {
            visitor: ["id"],
            aliases: ["Private"],
            fields: {
                id: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                }
            }
        }),
        p("StaticBlock", {
            visitor: ["body"],
            fields: {
                body: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Statement")))
                }
            },
            aliases: ["Scopable", "BlockParent", "FunctionParent"]
        })
    },
    2822: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if (e === t)
                return !0;
            var n = a.PLACEHOLDERS_ALIAS[e];
            if (n) {
                var i, o = r(n);
                try {
                    for (o.s(); !(i = o.n()).done; ) {
                        var s = i.value;
                        if (t === s)
                            return !0
                    }
                } catch (u) {
                    o.e(u)
                } finally {
                    o.f()
                }
            }
            return !1
        }
        ;
        var a = n(2645)
    },
    2823: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PLACEHOLDERS_FLIPPED_ALIAS = t.PLACEHOLDERS_ALIAS = t.PLACEHOLDERS = void 0;
        var r = n(2654)
          , a = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
        t.PLACEHOLDERS = a;
        var i = {
            Declaration: ["Statement"],
            Pattern: ["PatternLike", "LVal"]
        };
        t.PLACEHOLDERS_ALIAS = i;
        for (var o = 0, s = a; o < s.length; o++) {
            var u = s[o]
              , l = r.ALIAS_KEYS[u];
            null != l && l.length && (i[u] = l)
        }
        var p = {};
        t.PLACEHOLDERS_FLIPPED_ALIAS = p,
        Object.keys(i).forEach((function(e) {
            i[e].forEach((function(t) {
                Object.hasOwnProperty.call(p, t) || (p[t] = []),
                p[t].push(e)
            }
            ))
        }
        ))
    },
    2824: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return !(!e || !r.VISITOR_KEYS[e.type])
        }
        ;
        var r = n(2645)
    },
    2825: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function e(t) {
            for (var n = {}, i = {}, o = new Set, s = [], u = 0; u < t.length; u++) {
                var l = t[u];
                if (l && !(s.indexOf(l) >= 0)) {
                    if ((0,
                    r.isAnyTypeAnnotation)(l))
                        return [l];
                    if ((0,
                    r.isFlowBaseAnnotation)(l))
                        i[l.type] = l;
                    else if ((0,
                    r.isUnionTypeAnnotation)(l))
                        o.has(l.types) || (t = t.concat(l.types),
                        o.add(l.types));
                    else if ((0,
                    r.isGenericTypeAnnotation)(l)) {
                        var p = a(l.id);
                        if (n[p]) {
                            var f = n[p];
                            f.typeParameters ? l.typeParameters && (f.typeParameters.params = e(f.typeParameters.params.concat(l.typeParameters.params))) : f = l.typeParameters
                        } else
                            n[p] = l
                    } else
                        s.push(l)
                }
            }
            for (var d = 0, c = Object.keys(i); d < c.length; d++) {
                var y = c[d];
                s.push(i[y])
            }
            for (var T = 0, m = Object.keys(n); T < m.length; T++) {
                var S = m[T];
                s.push(n[S])
            }
            return s
        }
        ;
        var r = n(2637);
        function a(e) {
            return (0,
            r.isIdentifier)(e) ? e.name : "".concat(e.id.name, ".").concat(a(e.qualification))
        }
    },
    2826: function(e, t, n) {
        "use strict";
        var r = n(806);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            if (!n || !e)
                return e;
            var a = "".concat(t, "Comments");
            if (e[a]) {
                var i;
                if ("leading" === t)
                    e[a] = n.concat(e[a]);
                else
                    (i = e[a]).push.apply(i, r(n))
            } else
                e[a] = n;
            return e
        }
    },
    2827: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            (0,
            r.default)("innerComments", e, t)
        }
        ;
        var r = n(2722)
    },
    2828: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            (0,
            r.default)("leadingComments", e, t)
        }
        ;
        var r = n(2722)
    },
    2829: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            return (0,
            r.default)(e, t),
            (0,
            a.default)(e, t),
            (0,
            i.default)(e, t),
            e
        }
        ;
        var r = n(2830)
          , a = n(2828)
          , i = n(2827)
    },
    2830: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            (0,
            r.default)("trailingComments", e, t)
        }
        ;
        var r = n(2722)
    },
    2831: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if ((0,
            r.isBlockStatement)(e))
                return e;
            var n = [];
            (0,
            r.isEmptyStatement)(e) ? n = [] : ((0,
            r.isStatement)(e) || (e = (0,
            r.isFunction)(t) ? (0,
            a.returnStatement)(e) : (0,
            a.expressionStatement)(e)),
            n = [e]);
            return (0,
            a.blockStatement)(n)
        }
        ;
        var r = n(2637)
          , a = n(2641)
    },
    2832: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t, n = "", o = r(e += "");
            try {
                for (o.s(); !(t = o.n()).done; ) {
                    var s = t.value;
                    n += (0,
                    i.isIdentifierChar)(s.codePointAt(0)) ? s : "-"
                }
            } catch (u) {
                o.e(u)
            } finally {
                o.f()
            }
            n = (n = n.replace(/^[-0-9]+/, "")).replace(/[-\s]+(.)?/g, (function(e, t) {
                return t ? t.toUpperCase() : ""
            }
            )),
            (0,
            a.default)(n) || (n = "_".concat(n));
            return n || "_"
        }
        ;
        var a = n(2679)
          , i = n(2720)
    },
    2833: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            return (0,
            r.default)(e, a.default, t),
            e
        }
        ;
        var r = n(2834)
          , a = n(2835)
    },
    2834: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function e(t, n, i) {
            if (!t)
                return;
            var o = a.VISITOR_KEYS[t.type];
            if (!o)
                return;
            n(t, i = i || {});
            var s, u = r(o);
            try {
                for (u.s(); !(s = u.n()).done; ) {
                    var l = s.value
                      , p = t[l];
                    if (Array.isArray(p)) {
                        var f, d = r(p);
                        try {
                            for (d.s(); !(f = d.n()).done; ) {
                                var c = f.value;
                                e(c, n, i)
                            }
                        } catch (y) {
                            d.e(y)
                        } finally {
                            d.f()
                        }
                    } else
                        e(p, n, i)
                }
            } catch (y) {
                u.e(y)
            } finally {
                u.f()
            }
        }
        ;
        var a = n(2645)
    },
    2835: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = n.preserveComments ? i : o, s = r(a);
            try {
                for (s.s(); !(t = s.n()).done; ) {
                    var u = t.value;
                    null != e[u] && (e[u] = void 0)
                }
            } catch (m) {
                s.e(m)
            } finally {
                s.f()
            }
            for (var l = 0, p = Object.keys(e); l < p.length; l++) {
                var f = p[l];
                "_" === f[0] && null != e[f] && (e[f] = void 0)
            }
            var d, c = Object.getOwnPropertySymbols(e), y = r(c);
            try {
                for (y.s(); !(d = y.n()).done; ) {
                    var T = d.value;
                    e[T] = null
                }
            } catch (m) {
                y.e(m)
            } finally {
                y.f()
            }
        }
        ;
        var a = n(2661)
          , i = ["tokens", "start", "end", "loc", "raw", "rawValue"]
          , o = a.COMMENT_KEYS.concat(["comments"]).concat(i)
    },
    2836: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.isVariableDeclaration)(e) && ("var" !== e.kind || e[a.BLOCK_SCOPED_SYMBOL])
        }
        ;
        var r = n(2637)
          , a = n(2661)
    },
    2837: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = e.node.sourceType;
            if ("module" !== t && "script" !== t)
                throw e.buildCodeFrameError('Unknown sourceType "'.concat(t, '", cannot transform.'));
            return "module" === e.node.sourceType
        }
    },
    2838: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            var n = e.split(".");
            return function(e) {
                return (0,
                r.default)(e, n, t)
            }
        }
        ;
        var r = n(2839)
    },
    2839: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            if (!(0,
            r.isMemberExpression)(e))
                return !1;
            var a, i = Array.isArray(t) ? t : t.split("."), o = [];
            for (a = e; (0,
            r.isMemberExpression)(a); a = a.object)
                o.push(a.property);
            if (o.push(a),
            o.length < i.length)
                return !1;
            if (!n && o.length > i.length)
                return !1;
            for (var s = 0, u = o.length - 1; s < i.length; s++,
            u--) {
                var l = o[u]
                  , p = void 0;
                if ((0,
                r.isIdentifier)(l))
                    p = l.name;
                else if ((0,
                r.isStringLiteral)(l))
                    p = l.value;
                else {
                    if (!(0,
                    r.isThisExpression)(l))
                        return !1;
                    p = "this"
                }
                if (i[s] !== p)
                    return !1
            }
            return !0
        }
        ;
        var r = n(2638)
    },
    2840: function(e, t, n) {
        "use strict";
        var r = n(624)
          , a = n(806);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.patternLikeCommon = t.functionTypeAnnotationCommon = t.functionDeclarationCommon = t.functionCommon = t.classMethodOrPropertyCommon = t.classMethodOrDeclareMethodCommon = void 0;
        var i = n(2680)
          , o = n(2681)
          , s = n(2725)
          , u = n(2663)
          , l = n(2655)
          , p = (0,
        l.defineAliasedType)("Standardized");
        p("ArrayExpression", {
            fields: {
                elements: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
                    default: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? void 0 : []
                }
            },
            visitor: ["elements"],
            aliases: ["Expression"]
        }),
        p("AssignmentExpression", {
            fields: {
                operator: {
                    validate: function() {
                        if (!Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING)
                            return (0,
                            l.assertValueType)("string");
                        var e = l.assertOneOf.apply(void 0, a(u.ASSIGNMENT_OPERATORS))
                          , t = (0,
                        l.assertOneOf)("=");
                        return function(n, r, a) {
                            ((0,
                            i.default)("Pattern", n.left) ? t : e)(n, r, a)
                        }
                    }()
                },
                left: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern") : (0,
                    l.assertNodeType)("LVal")
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            },
            builder: ["operator", "left", "right"],
            visitor: ["left", "right"],
            aliases: ["Expression"]
        }),
        p("BinaryExpression", {
            builder: ["operator", "left", "right"],
            fields: {
                operator: {
                    validate: l.assertOneOf.apply(void 0, a(u.BINARY_OPERATORS))
                },
                left: {
                    validate: function() {
                        var e = (0,
                        l.assertNodeType)("Expression")
                          , t = (0,
                        l.assertNodeType)("Expression", "PrivateName")
                          , n = function(n, r, a) {
                            var i = "in" === n.operator ? t : e;
                            i(n, r, a)
                        };
                        return n.oneOfNodeTypes = ["Expression", "PrivateName"],
                        n
                    }()
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            },
            visitor: ["left", "right"],
            aliases: ["Binary", "Expression"]
        }),
        p("InterpreterDirective", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("string")
                }
            }
        }),
        p("Directive", {
            visitor: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertNodeType)("DirectiveLiteral")
                }
            }
        }),
        p("DirectiveLiteral", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("string")
                }
            }
        }),
        p("BlockStatement", {
            builder: ["body", "directives"],
            visitor: ["directives", "body"],
            fields: {
                directives: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Directive"))),
                    default: []
                },
                body: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Statement")))
                }
            },
            aliases: ["Scopable", "BlockParent", "Block", "Statement"]
        }),
        p("BreakStatement", {
            visitor: ["label"],
            fields: {
                label: {
                    validate: (0,
                    l.assertNodeType)("Identifier"),
                    optional: !0
                }
            },
            aliases: ["Statement", "Terminatorless", "CompletionStatement"]
        }),
        p("CallExpression", {
            visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
            builder: ["callee", "arguments"],
            aliases: ["Expression"],
            fields: Object.assign({
                callee: {
                    validate: (0,
                    l.assertNodeType)("Expression", "V8IntrinsicIdentifier")
                },
                arguments: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
                }
            }, Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0
            }).BABEL_TYPES_8_BREAKING ? {} : {
                optional: {
                    validate: (0,
                    l.assertOneOf)(!0, !1),
                    optional: !0
                }
            }, {
                typeArguments: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterInstantiation"),
                    optional: !0
                },
                typeParameters: {
                    validate: (0,
                    l.assertNodeType)("TSTypeParameterInstantiation"),
                    optional: !0
                }
            })
        }),
        p("CatchClause", {
            visitor: ["param", "body"],
            fields: {
                param: {
                    validate: (0,
                    l.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            },
            aliases: ["Scopable", "BlockParent"]
        }),
        p("ConditionalExpression", {
            visitor: ["test", "consequent", "alternate"],
            fields: {
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                consequent: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                alternate: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            },
            aliases: ["Expression", "Conditional"]
        }),
        p("ContinueStatement", {
            visitor: ["label"],
            fields: {
                label: {
                    validate: (0,
                    l.assertNodeType)("Identifier"),
                    optional: !0
                }
            },
            aliases: ["Statement", "Terminatorless", "CompletionStatement"]
        }),
        p("DebuggerStatement", {
            aliases: ["Statement"]
        }),
        p("DoWhileStatement", {
            visitor: ["test", "body"],
            fields: {
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            },
            aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
        }),
        p("EmptyStatement", {
            aliases: ["Statement"]
        }),
        p("ExpressionStatement", {
            visitor: ["expression"],
            fields: {
                expression: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            },
            aliases: ["Statement", "ExpressionWrapper"]
        }),
        p("File", {
            builder: ["program", "comments", "tokens"],
            visitor: ["program"],
            fields: {
                program: {
                    validate: (0,
                    l.assertNodeType)("Program")
                },
                comments: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.assertEach)((0,
                    l.assertNodeType)("CommentBlock", "CommentLine")) : Object.assign((function() {}
                    ), {
                        each: {
                            oneOfNodeTypes: ["CommentBlock", "CommentLine"]
                        }
                    }),
                    optional: !0
                },
                tokens: {
                    validate: (0,
                    l.assertEach)(Object.assign((function() {}
                    ), {
                        type: "any"
                    })),
                    optional: !0
                }
            }
        }),
        p("ForInStatement", {
            visitor: ["left", "right", "body"],
            aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
            fields: {
                left: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern") : (0,
                    l.assertNodeType)("VariableDeclaration", "LVal")
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        }),
        p("ForStatement", {
            visitor: ["init", "test", "update", "body"],
            aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
            fields: {
                init: {
                    validate: (0,
                    l.assertNodeType)("VariableDeclaration", "Expression"),
                    optional: !0
                },
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                },
                update: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        });
        var f = {
            params: {
                validate: (0,
                l.chain)((0,
                l.assertValueType)("array"), (0,
                l.assertEach)((0,
                l.assertNodeType)("Identifier", "Pattern", "RestElement")))
            },
            generator: {
                default: !1
            },
            async: {
                default: !1
            }
        };
        t.functionCommon = f;
        var d = {
            returnType: {
                validate: (0,
                l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
                optional: !0
            },
            typeParameters: {
                validate: (0,
                l.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
                optional: !0
            }
        };
        t.functionTypeAnnotationCommon = d;
        var c = Object.assign({}, f, {
            declare: {
                validate: (0,
                l.assertValueType)("boolean"),
                optional: !0
            },
            id: {
                validate: (0,
                l.assertNodeType)("Identifier"),
                optional: !0
            }
        });
        t.functionDeclarationCommon = c,
        p("FunctionDeclaration", {
            builder: ["id", "params", "body", "generator", "async"],
            visitor: ["id", "params", "body", "returnType", "typeParameters"],
            fields: Object.assign({}, c, d, {
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            }),
            aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
            validate: function() {
                if (!Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0
                }).BABEL_TYPES_8_BREAKING)
                    return function() {}
                    ;
                var e = (0,
                l.assertNodeType)("Identifier");
                return function(t, n, r) {
                    (0,
                    i.default)("ExportDefaultDeclaration", t) || e(r, "id", r.id)
                }
            }()
        }),
        p("FunctionExpression", {
            inherits: "FunctionDeclaration",
            aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
            fields: Object.assign({}, f, d, {
                id: {
                    validate: (0,
                    l.assertNodeType)("Identifier"),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            })
        });
        var y = {
            typeAnnotation: {
                validate: (0,
                l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
                optional: !0
            },
            decorators: {
                validate: (0,
                l.chain)((0,
                l.assertValueType)("array"), (0,
                l.assertEach)((0,
                l.assertNodeType)("Decorator")))
            }
        };
        t.patternLikeCommon = y,
        p("Identifier", {
            builder: ["name"],
            visitor: ["typeAnnotation", "decorators"],
            aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
            fields: Object.assign({}, y, {
                name: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("string"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && !(0,
                        o.default)(n, !1))
                            throw new TypeError('"'.concat(n, '" is not a valid identifier name'))
                    }
                    ), {
                        type: "string"
                    }))
                },
                optional: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                }
            }),
            validate: function(e, t, n) {
                if (Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0
                }).BABEL_TYPES_8_BREAKING) {
                    var a = /\.(\w+)$/.exec(t);
                    if (a) {
                        var o = r(a, 2)[1]
                          , u = {
                            computed: !1
                        };
                        if ("property" === o) {
                            if ((0,
                            i.default)("MemberExpression", e, u))
                                return;
                            if ((0,
                            i.default)("OptionalMemberExpression", e, u))
                                return
                        } else if ("key" === o) {
                            if ((0,
                            i.default)("Property", e, u))
                                return;
                            if ((0,
                            i.default)("Method", e, u))
                                return
                        } else if ("exported" === o) {
                            if ((0,
                            i.default)("ExportSpecifier", e))
                                return
                        } else if ("imported" === o) {
                            if ((0,
                            i.default)("ImportSpecifier", e, {
                                imported: n
                            }))
                                return
                        } else if ("meta" === o && (0,
                        i.default)("MetaProperty", e, {
                            meta: n
                        }))
                            return;
                        if (((0,
                        s.isKeyword)(n.name) || (0,
                        s.isReservedWord)(n.name, !1)) && "this" !== n.name)
                            throw new TypeError('"'.concat(n.name, '" is not a valid identifier'))
                    }
                }
            }
        }),
        p("IfStatement", {
            visitor: ["test", "consequent", "alternate"],
            aliases: ["Statement", "Conditional"],
            fields: {
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                consequent: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                },
                alternate: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        }),
        p("LabeledStatement", {
            visitor: ["label", "body"],
            aliases: ["Statement"],
            fields: {
                label: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        }),
        p("StringLiteral", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("string")
                }
            },
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        p("NumericLiteral", {
            builder: ["value"],
            deprecatedAlias: "NumberLiteral",
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("number")
                }
            },
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        p("NullLiteral", {
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        p("BooleanLiteral", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("boolean")
                }
            },
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        p("RegExpLiteral", {
            builder: ["pattern", "flags"],
            deprecatedAlias: "RegexLiteral",
            aliases: ["Expression", "Pureish", "Literal"],
            fields: {
                pattern: {
                    validate: (0,
                    l.assertValueType)("string")
                },
                flags: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("string"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING) {
                            var r = /[^gimsuy]/.exec(n);
                            if (r)
                                throw new TypeError('"'.concat(r[0], '" is not a valid RegExp flag'))
                        }
                    }
                    ), {
                        type: "string"
                    })),
                    default: ""
                }
            }
        }),
        p("LogicalExpression", {
            builder: ["operator", "left", "right"],
            visitor: ["left", "right"],
            aliases: ["Binary", "Expression"],
            fields: {
                operator: {
                    validate: l.assertOneOf.apply(void 0, a(u.LOGICAL_OPERATORS))
                },
                left: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("MemberExpression", {
            builder: ["object", "property", "computed"].concat(a(Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0
            }).BABEL_TYPES_8_BREAKING ? [] : ["optional"])),
            visitor: ["object", "property"],
            aliases: ["Expression", "LVal"],
            fields: Object.assign({
                object: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                property: {
                    validate: function() {
                        var e = (0,
                        l.assertNodeType)("Identifier", "PrivateName")
                          , t = (0,
                        l.assertNodeType)("Expression")
                          , n = function(n, r, a) {
                            var i = n.computed ? t : e;
                            i(n, r, a)
                        };
                        return n.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"],
                        n
                    }()
                },
                computed: {
                    default: !1
                }
            }, Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0
            }).BABEL_TYPES_8_BREAKING ? {} : {
                optional: {
                    validate: (0,
                    l.assertOneOf)(!0, !1),
                    optional: !0
                }
            })
        }),
        p("NewExpression", {
            inherits: "CallExpression"
        }),
        p("Program", {
            visitor: ["directives", "body"],
            builder: ["body", "directives", "sourceType", "interpreter"],
            fields: {
                sourceFile: {
                    validate: (0,
                    l.assertValueType)("string")
                },
                sourceType: {
                    validate: (0,
                    l.assertOneOf)("script", "module"),
                    default: "script"
                },
                interpreter: {
                    validate: (0,
                    l.assertNodeType)("InterpreterDirective"),
                    default: null,
                    optional: !0
                },
                directives: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Directive"))),
                    default: []
                },
                body: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Statement")))
                }
            },
            aliases: ["Scopable", "BlockParent", "Block"]
        }),
        p("ObjectExpression", {
            visitor: ["properties"],
            aliases: ["Expression"],
            fields: {
                properties: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
                }
            }
        }),
        p("ObjectMethod", {
            builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
            fields: Object.assign({}, f, d, {
                kind: Object.assign({
                    validate: (0,
                    l.assertOneOf)("method", "get", "set")
                }, Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0
                }).BABEL_TYPES_8_BREAKING ? {} : {
                    default: "method"
                }),
                computed: {
                    default: !1
                },
                key: {
                    validate: function() {
                        var e = (0,
                        l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral")
                          , t = (0,
                        l.assertNodeType)("Expression")
                          , n = function(n, r, a) {
                            var i = n.computed ? t : e;
                            i(n, r, a)
                        };
                        return n.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"],
                        n
                    }()
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            }),
            visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
            aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
        }),
        p("ObjectProperty", {
            builder: ["key", "value", "computed", "shorthand"].concat(a(Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0
            }).BABEL_TYPES_8_BREAKING ? [] : ["decorators"])),
            fields: {
                computed: {
                    default: !1
                },
                key: {
                    validate: function() {
                        var e = (0,
                        l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral")
                          , t = (0,
                        l.assertNodeType)("Expression")
                          , n = function(n, r, a) {
                            var i = n.computed ? t : e;
                            i(n, r, a)
                        };
                        return n.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"],
                        n
                    }()
                },
                value: {
                    validate: (0,
                    l.assertNodeType)("Expression", "PatternLike")
                },
                shorthand: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("boolean"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && n && e.computed)
                            throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true")
                    }
                    ), {
                        type: "boolean"
                    }), (function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && n && !(0,
                        i.default)("Identifier", e.key))
                            throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier")
                    }
                    )),
                    default: !1
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                }
            },
            visitor: ["key", "value", "decorators"],
            aliases: ["UserWhitespacable", "Property", "ObjectMember"],
            validate: function() {
                var e = (0,
                l.assertNodeType)("Identifier", "Pattern")
                  , t = (0,
                l.assertNodeType)("Expression");
                return function(n, r, a) {
                    Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING && ((0,
                    i.default)("ObjectPattern", n) ? e : t)(a, "value", a.value)
                }
            }()
        }),
        p("RestElement", {
            visitor: ["argument", "typeAnnotation"],
            builder: ["argument"],
            aliases: ["LVal", "PatternLike"],
            deprecatedAlias: "RestProperty",
            fields: Object.assign({}, y, {
                argument: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression") : (0,
                    l.assertNodeType)("LVal")
                },
                optional: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                }
            }),
            validate: function(e, t) {
                if (Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0
                }).BABEL_TYPES_8_BREAKING) {
                    var n = /(\w+)\[(\d+)\]/.exec(t);
                    if (!n)
                        throw new Error("Internal Babel error: malformed key.");
                    var a = r(n, 3)
                      , i = a[1]
                      , o = a[2];
                    if (e[i].length > o + 1)
                        throw new TypeError("RestElement must be last element of ".concat(i))
                }
            }
        }),
        p("ReturnStatement", {
            visitor: ["argument"],
            aliases: ["Statement", "Terminatorless", "CompletionStatement"],
            fields: {
                argument: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                }
            }
        }),
        p("SequenceExpression", {
            visitor: ["expressions"],
            fields: {
                expressions: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Expression")))
                }
            },
            aliases: ["Expression"]
        }),
        p("ParenthesizedExpression", {
            visitor: ["expression"],
            aliases: ["Expression", "ExpressionWrapper"],
            fields: {
                expression: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("SwitchCase", {
            visitor: ["test", "consequent"],
            fields: {
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                },
                consequent: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Statement")))
                }
            }
        }),
        p("SwitchStatement", {
            visitor: ["discriminant", "cases"],
            aliases: ["Statement", "BlockParent", "Scopable"],
            fields: {
                discriminant: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                cases: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("SwitchCase")))
                }
            }
        }),
        p("ThisExpression", {
            aliases: ["Expression"]
        }),
        p("ThrowStatement", {
            visitor: ["argument"],
            aliases: ["Statement", "Terminatorless", "CompletionStatement"],
            fields: {
                argument: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("TryStatement", {
            visitor: ["block", "handler", "finalizer"],
            aliases: ["Statement"],
            fields: {
                block: {
                    validate: (0,
                    l.chain)((0,
                    l.assertNodeType)("BlockStatement"), Object.assign((function(e) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && !e.handler && !e.finalizer)
                            throw new TypeError("TryStatement expects either a handler or finalizer, or both")
                    }
                    ), {
                        oneOfNodeTypes: ["BlockStatement"]
                    }))
                },
                handler: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("CatchClause")
                },
                finalizer: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            }
        }),
        p("UnaryExpression", {
            builder: ["operator", "argument", "prefix"],
            fields: {
                prefix: {
                    default: !0
                },
                argument: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                operator: {
                    validate: l.assertOneOf.apply(void 0, a(u.UNARY_OPERATORS))
                }
            },
            visitor: ["argument"],
            aliases: ["UnaryLike", "Expression"]
        }),
        p("UpdateExpression", {
            builder: ["operator", "argument", "prefix"],
            fields: {
                prefix: {
                    default: !1
                },
                argument: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.assertNodeType)("Identifier", "MemberExpression") : (0,
                    l.assertNodeType)("Expression")
                },
                operator: {
                    validate: l.assertOneOf.apply(void 0, a(u.UPDATE_OPERATORS))
                }
            },
            visitor: ["argument"],
            aliases: ["Expression"]
        }),
        p("VariableDeclaration", {
            builder: ["kind", "declarations"],
            visitor: ["declarations"],
            aliases: ["Statement", "Declaration"],
            fields: {
                declare: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                kind: {
                    validate: (0,
                    l.assertOneOf)("var", "let", "const")
                },
                declarations: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("VariableDeclarator")))
                }
            },
            validate: function(e, t, n) {
                if (Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0
                }).BABEL_TYPES_8_BREAKING && (0,
                i.default)("ForXStatement", e, {
                    left: n
                }) && 1 !== n.declarations.length)
                    throw new TypeError("Exactly one VariableDeclarator is required in the VariableDeclaration of a ".concat(e.type))
            }
        }),
        p("VariableDeclarator", {
            visitor: ["id", "init"],
            fields: {
                id: {
                    validate: function() {
                        if (!Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING)
                            return (0,
                            l.assertNodeType)("LVal");
                        var e = (0,
                        l.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern")
                          , t = (0,
                        l.assertNodeType)("Identifier");
                        return function(n, r, a) {
                            (n.init ? e : t)(n, r, a)
                        }
                    }()
                },
                definite: {
                    optional: !0,
                    validate: (0,
                    l.assertValueType)("boolean")
                },
                init: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("WhileStatement", {
            visitor: ["test", "body"],
            aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
            fields: {
                test: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        }),
        p("WithStatement", {
            visitor: ["object", "body"],
            aliases: ["Statement"],
            fields: {
                object: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                }
            }
        }),
        p("AssignmentPattern", {
            visitor: ["left", "right", "decorators"],
            builder: ["left", "right"],
            aliases: ["Pattern", "PatternLike", "LVal"],
            fields: Object.assign({}, y, {
                left: {
                    validate: (0,
                    l.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression")
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                }
            })
        }),
        p("ArrayPattern", {
            visitor: ["elements", "typeAnnotation"],
            builder: ["elements"],
            aliases: ["Pattern", "PatternLike", "LVal"],
            fields: Object.assign({}, y, {
                elements: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeOrValueType)("null", "PatternLike")))
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                optional: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                }
            })
        }),
        p("ArrowFunctionExpression", {
            builder: ["params", "body", "async"],
            visitor: ["params", "body", "returnType", "typeParameters"],
            aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
            fields: Object.assign({}, f, d, {
                expression: {
                    validate: (0,
                    l.assertValueType)("boolean")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement", "Expression")
                }
            })
        }),
        p("ClassBody", {
            visitor: ["body"],
            fields: {
                body: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "TSDeclareMethod", "TSIndexSignature")))
                }
            }
        }),
        p("ClassExpression", {
            builder: ["id", "superClass", "body", "decorators"],
            visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
            aliases: ["Scopable", "Class", "Expression"],
            fields: {
                id: {
                    validate: (0,
                    l.assertNodeType)("Identifier"),
                    optional: !0
                },
                typeParameters: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("ClassBody")
                },
                superClass: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                superTypeParameters: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
                    optional: !0
                },
                implements: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
                    optional: !0
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                mixins: {
                    validate: (0,
                    l.assertNodeType)("InterfaceExtends"),
                    optional: !0
                }
            }
        }),
        p("ClassDeclaration", {
            inherits: "ClassExpression",
            aliases: ["Scopable", "Class", "Statement", "Declaration"],
            fields: {
                id: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                },
                typeParameters: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
                    optional: !0
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("ClassBody")
                },
                superClass: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                superTypeParameters: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
                    optional: !0
                },
                implements: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
                    optional: !0
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                mixins: {
                    validate: (0,
                    l.assertNodeType)("InterfaceExtends"),
                    optional: !0
                },
                declare: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                abstract: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                }
            },
            validate: function() {
                var e = (0,
                l.assertNodeType)("Identifier");
                return function(t, n, r) {
                    Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING && ((0,
                    i.default)("ExportDefaultDeclaration", t) || e(r, "id", r.id))
                }
            }()
        }),
        p("ExportAllDeclaration", {
            visitor: ["source"],
            aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
            fields: {
                source: {
                    validate: (0,
                    l.assertNodeType)("StringLiteral")
                },
                exportKind: (0,
                l.validateOptional)((0,
                l.assertOneOf)("type", "value")),
                assertions: {
                    optional: !0,
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ImportAttribute")))
                }
            }
        }),
        p("ExportDefaultDeclaration", {
            visitor: ["declaration"],
            aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
            fields: {
                declaration: {
                    validate: (0,
                    l.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
                },
                exportKind: (0,
                l.validateOptional)((0,
                l.assertOneOf)("value"))
            }
        }),
        p("ExportNamedDeclaration", {
            visitor: ["declaration", "specifiers", "source"],
            aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
            fields: {
                declaration: {
                    optional: !0,
                    validate: (0,
                    l.chain)((0,
                    l.assertNodeType)("Declaration"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && n && e.specifiers.length)
                            throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration")
                    }
                    ), {
                        oneOfNodeTypes: ["Declaration"]
                    }), (function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && n && e.source)
                            throw new TypeError("Cannot export a declaration from a source")
                    }
                    ))
                },
                assertions: {
                    optional: !0,
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ImportAttribute")))
                },
                specifiers: {
                    default: [],
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)(function() {
                        var e = (0,
                        l.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier")
                          , t = (0,
                        l.assertNodeType)("ExportSpecifier");
                        return Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING ? function(n, r, a) {
                            (n.source ? e : t)(n, r, a)
                        }
                        : e
                    }()))
                },
                source: {
                    validate: (0,
                    l.assertNodeType)("StringLiteral"),
                    optional: !0
                },
                exportKind: (0,
                l.validateOptional)((0,
                l.assertOneOf)("type", "value"))
            }
        }),
        p("ExportSpecifier", {
            visitor: ["local", "exported"],
            aliases: ["ModuleSpecifier"],
            fields: {
                local: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                },
                exported: {
                    validate: (0,
                    l.assertNodeType)("Identifier", "StringLiteral")
                },
                exportKind: {
                    validate: (0,
                    l.assertOneOf)("type", "value"),
                    optional: !0
                }
            }
        }),
        p("ForOfStatement", {
            visitor: ["left", "right", "body"],
            builder: ["left", "right", "body", "await"],
            aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
            fields: {
                left: {
                    validate: function() {
                        if (!Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING)
                            return (0,
                            l.assertNodeType)("VariableDeclaration", "LVal");
                        var e = (0,
                        l.assertNodeType)("VariableDeclaration")
                          , t = (0,
                        l.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern");
                        return function(n, r, a) {
                            (0,
                            i.default)("VariableDeclaration", a) ? e(n, r, a) : t(n, r, a)
                        }
                    }()
                },
                right: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("Statement")
                },
                await: {
                    default: !1
                }
            }
        }),
        p("ImportDeclaration", {
            visitor: ["specifiers", "source"],
            aliases: ["Statement", "Declaration", "ModuleDeclaration"],
            fields: {
                assertions: {
                    optional: !0,
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ImportAttribute")))
                },
                specifiers: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
                },
                source: {
                    validate: (0,
                    l.assertNodeType)("StringLiteral")
                },
                importKind: {
                    validate: (0,
                    l.assertOneOf)("type", "typeof", "value"),
                    optional: !0
                }
            }
        }),
        p("ImportDefaultSpecifier", {
            visitor: ["local"],
            aliases: ["ModuleSpecifier"],
            fields: {
                local: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                }
            }
        }),
        p("ImportNamespaceSpecifier", {
            visitor: ["local"],
            aliases: ["ModuleSpecifier"],
            fields: {
                local: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                }
            }
        }),
        p("ImportSpecifier", {
            visitor: ["local", "imported"],
            aliases: ["ModuleSpecifier"],
            fields: {
                local: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                },
                imported: {
                    validate: (0,
                    l.assertNodeType)("Identifier", "StringLiteral")
                },
                importKind: {
                    validate: (0,
                    l.assertOneOf)("type", "typeof", "value"),
                    optional: !0
                }
            }
        }),
        p("MetaProperty", {
            visitor: ["meta", "property"],
            aliases: ["Expression"],
            fields: {
                meta: {
                    validate: (0,
                    l.chain)((0,
                    l.assertNodeType)("Identifier"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING) {
                            var r;
                            switch (n.name) {
                            case "function":
                                r = "sent";
                                break;
                            case "new":
                                r = "target";
                                break;
                            case "import":
                                r = "meta"
                            }
                            if (!(0,
                            i.default)("Identifier", e.property, {
                                name: r
                            }))
                                throw new TypeError("Unrecognised MetaProperty")
                        }
                    }
                    ), {
                        oneOfNodeTypes: ["Identifier"]
                    }))
                },
                property: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                }
            }
        });
        var T = {
            abstract: {
                validate: (0,
                l.assertValueType)("boolean"),
                optional: !0
            },
            accessibility: {
                validate: (0,
                l.assertOneOf)("public", "private", "protected"),
                optional: !0
            },
            static: {
                default: !1
            },
            override: {
                default: !1
            },
            computed: {
                default: !1
            },
            optional: {
                validate: (0,
                l.assertValueType)("boolean"),
                optional: !0
            },
            key: {
                validate: (0,
                l.chain)(function() {
                    var e = (0,
                    l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral")
                      , t = (0,
                    l.assertNodeType)("Expression");
                    return function(n, r, a) {
                        (n.computed ? t : e)(n, r, a)
                    }
                }(), (0,
                l.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
            }
        };
        t.classMethodOrPropertyCommon = T;
        var m = Object.assign({}, f, T, {
            params: {
                validate: (0,
                l.chain)((0,
                l.assertValueType)("array"), (0,
                l.assertEach)((0,
                l.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
            },
            kind: {
                validate: (0,
                l.assertOneOf)("get", "set", "method", "constructor"),
                default: "method"
            },
            access: {
                validate: (0,
                l.chain)((0,
                l.assertValueType)("string"), (0,
                l.assertOneOf)("public", "private", "protected")),
                optional: !0
            },
            decorators: {
                validate: (0,
                l.chain)((0,
                l.assertValueType)("array"), (0,
                l.assertEach)((0,
                l.assertNodeType)("Decorator"))),
                optional: !0
            }
        });
        t.classMethodOrDeclareMethodCommon = m,
        p("ClassMethod", {
            aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
            builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
            visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
            fields: Object.assign({}, m, d, {
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            })
        }),
        p("ObjectPattern", {
            visitor: ["properties", "typeAnnotation", "decorators"],
            builder: ["properties"],
            aliases: ["Pattern", "PatternLike", "LVal"],
            fields: Object.assign({}, y, {
                properties: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("RestElement", "ObjectProperty")))
                }
            })
        }),
        p("SpreadElement", {
            visitor: ["argument"],
            aliases: ["UnaryLike"],
            deprecatedAlias: "SpreadProperty",
            fields: {
                argument: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("Super", {
            aliases: ["Expression"]
        }),
        p("TaggedTemplateExpression", {
            visitor: ["tag", "quasi", "typeParameters"],
            builder: ["tag", "quasi"],
            aliases: ["Expression"],
            fields: {
                tag: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                quasi: {
                    validate: (0,
                    l.assertNodeType)("TemplateLiteral")
                },
                typeParameters: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
                    optional: !0
                }
            }
        }),
        p("TemplateElement", {
            builder: ["value", "tail"],
            fields: {
                value: {
                    validate: (0,
                    l.assertShape)({
                        raw: {
                            validate: (0,
                            l.assertValueType)("string")
                        },
                        cooked: {
                            validate: (0,
                            l.assertValueType)("string"),
                            optional: !0
                        }
                    })
                },
                tail: {
                    default: !1
                }
            }
        }),
        p("TemplateLiteral", {
            visitor: ["quasis", "expressions"],
            aliases: ["Expression", "Literal"],
            fields: {
                quasis: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("TemplateElement")))
                },
                expressions: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Expression", "TSType")), (function(e, t, n) {
                        if (e.quasis.length !== n.length + 1)
                            throw new TypeError("Number of ".concat(e.type, " quasis should be exactly one more than the number of expressions.\nExpected ").concat(n.length + 1, " quasis but got ").concat(e.quasis.length))
                    }
                    ))
                }
            }
        }),
        p("YieldExpression", {
            builder: ["argument", "delegate"],
            visitor: ["argument"],
            aliases: ["Expression", "Terminatorless"],
            fields: {
                delegate: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("boolean"), Object.assign((function(e, t, n) {
                        if (Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).BABEL_TYPES_8_BREAKING && n && !e.argument)
                            throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument")
                    }
                    ), {
                        type: "boolean"
                    })),
                    default: !1
                },
                argument: {
                    optional: !0,
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("AwaitExpression", {
            builder: ["argument"],
            visitor: ["argument"],
            aliases: ["Expression", "Terminatorless"],
            fields: {
                argument: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                }
            }
        }),
        p("Import", {
            aliases: ["Expression"]
        }),
        p("BigIntLiteral", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    l.assertValueType)("string")
                }
            },
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        p("ExportNamespaceSpecifier", {
            visitor: ["exported"],
            aliases: ["ModuleSpecifier"],
            fields: {
                exported: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                }
            }
        }),
        p("OptionalMemberExpression", {
            builder: ["object", "property", "computed", "optional"],
            visitor: ["object", "property"],
            aliases: ["Expression"],
            fields: {
                object: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                property: {
                    validate: function() {
                        var e = (0,
                        l.assertNodeType)("Identifier")
                          , t = (0,
                        l.assertNodeType)("Expression")
                          , n = function(n, r, a) {
                            var i = n.computed ? t : e;
                            i(n, r, a)
                        };
                        return n.oneOfNodeTypes = ["Expression", "Identifier"],
                        n
                    }()
                },
                computed: {
                    default: !1
                },
                optional: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.chain)((0,
                    l.assertValueType)("boolean"), (0,
                    l.assertOptionalChainStart)()) : (0,
                    l.assertValueType)("boolean")
                }
            }
        }),
        p("OptionalCallExpression", {
            visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
            builder: ["callee", "arguments", "optional"],
            aliases: ["Expression"],
            fields: {
                callee: {
                    validate: (0,
                    l.assertNodeType)("Expression")
                },
                arguments: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
                },
                optional: {
                    validate: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).BABEL_TYPES_8_BREAKING ? (0,
                    l.chain)((0,
                    l.assertValueType)("boolean"), (0,
                    l.assertOptionalChainStart)()) : (0,
                    l.assertValueType)("boolean")
                },
                typeArguments: {
                    validate: (0,
                    l.assertNodeType)("TypeParameterInstantiation"),
                    optional: !0
                },
                typeParameters: {
                    validate: (0,
                    l.assertNodeType)("TSTypeParameterInstantiation"),
                    optional: !0
                }
            }
        }),
        p("ClassProperty", {
            visitor: ["key", "value", "typeAnnotation", "decorators"],
            builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
            aliases: ["Property"],
            fields: Object.assign({}, T, {
                value: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                },
                definite: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                typeAnnotation: {
                    validate: (0,
                    l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
                    optional: !0
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                readonly: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                declare: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                variance: {
                    validate: (0,
                    l.assertNodeType)("Variance"),
                    optional: !0
                }
            })
        }),
        p("ClassPrivateProperty", {
            visitor: ["key", "value", "decorators", "typeAnnotation"],
            builder: ["key", "value", "decorators", "static"],
            aliases: ["Property", "Private"],
            fields: {
                key: {
                    validate: (0,
                    l.assertNodeType)("PrivateName")
                },
                value: {
                    validate: (0,
                    l.assertNodeType)("Expression"),
                    optional: !0
                },
                typeAnnotation: {
                    validate: (0,
                    l.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
                    optional: !0
                },
                decorators: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Decorator"))),
                    optional: !0
                },
                readonly: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                definite: {
                    validate: (0,
                    l.assertValueType)("boolean"),
                    optional: !0
                },
                variance: {
                    validate: (0,
                    l.assertNodeType)("Variance"),
                    optional: !0
                }
            }
        }),
        p("ClassPrivateMethod", {
            builder: ["kind", "key", "params", "body", "static"],
            visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
            aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
            fields: Object.assign({}, m, d, {
                key: {
                    validate: (0,
                    l.assertNodeType)("PrivateName")
                },
                body: {
                    validate: (0,
                    l.assertNodeType)("BlockStatement")
                }
            })
        }),
        p("PrivateName", {
            visitor: ["id"],
            aliases: ["Private"],
            fields: {
                id: {
                    validate: (0,
                    l.assertNodeType)("Identifier")
                }
            }
        }),
        p("StaticBlock", {
            visitor: ["body"],
            fields: {
                body: {
                    validate: (0,
                    l.chain)((0,
                    l.assertValueType)("array"), (0,
                    l.assertEach)((0,
                    l.assertNodeType)("Statement")))
                }
            },
            aliases: ["Scopable", "BlockParent", "FunctionParent"]
        })
    },
    2841: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if (e === t)
                return !0;
            var n = a.PLACEHOLDERS_ALIAS[e];
            if (n) {
                var i, o = r(n);
                try {
                    for (o.s(); !(i = o.n()).done; ) {
                        var s = i.value;
                        if (t === s)
                            return !0
                    }
                } catch (u) {
                    o.e(u)
                } finally {
                    o.f()
                }
            }
            return !1
        }
        ;
        var a = n(2646)
    },
    2842: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PLACEHOLDERS_FLIPPED_ALIAS = t.PLACEHOLDERS_ALIAS = t.PLACEHOLDERS = void 0;
        var r = n(2655)
          , a = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
        t.PLACEHOLDERS = a;
        var i = {
            Declaration: ["Statement"],
            Pattern: ["PatternLike", "LVal"]
        };
        t.PLACEHOLDERS_ALIAS = i;
        for (var o = 0, s = a; o < s.length; o++) {
            var u = s[o]
              , l = r.ALIAS_KEYS[u];
            null != l && l.length && (i[u] = l)
        }
        var p = {};
        t.PLACEHOLDERS_FLIPPED_ALIAS = p,
        Object.keys(i).forEach((function(e) {
            i[e].forEach((function(t) {
                Object.hasOwnProperty.call(p, t) || (p[t] = []),
                p[t].push(e)
            }
            ))
        }
        ))
    },
    2843: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return !(!e || !r.VISITOR_KEYS[e.type])
        }
        ;
        var r = n(2646)
    },
    2844: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function e(t) {
            for (var n = {}, i = {}, o = new Set, s = [], u = 0; u < t.length; u++) {
                var l = t[u];
                if (l && !(s.indexOf(l) >= 0)) {
                    if ((0,
                    r.isAnyTypeAnnotation)(l))
                        return [l];
                    if ((0,
                    r.isFlowBaseAnnotation)(l))
                        i[l.type] = l;
                    else if ((0,
                    r.isUnionTypeAnnotation)(l))
                        o.has(l.types) || (t = t.concat(l.types),
                        o.add(l.types));
                    else if ((0,
                    r.isGenericTypeAnnotation)(l)) {
                        var p = a(l.id);
                        if (n[p]) {
                            var f = n[p];
                            f.typeParameters ? l.typeParameters && (f.typeParameters.params = e(f.typeParameters.params.concat(l.typeParameters.params))) : f = l.typeParameters
                        } else
                            n[p] = l
                    } else
                        s.push(l)
                }
            }
            for (var d = 0, c = Object.keys(i); d < c.length; d++) {
                var y = c[d];
                s.push(i[y])
            }
            for (var T = 0, m = Object.keys(n); T < m.length; T++) {
                var S = m[T];
                s.push(n[S])
            }
            return s
        }
        ;
        var r = n(2638);
        function a(e) {
            return (0,
            r.isIdentifier)(e) ? e.name : "".concat(e.id.name, ".").concat(a(e.qualification))
        }
    },
    2845: function(e, t, n) {
        "use strict";
        var r = n(806);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            if (!n || !e)
                return e;
            var a = "".concat(t, "Comments");
            if (e[a]) {
                var i;
                if ("leading" === t)
                    e[a] = n.concat(e[a]);
                else
                    (i = e[a]).push.apply(i, r(n))
            } else
                e[a] = n;
            return e
        }
    },
    2846: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            (0,
            r.default)("innerComments", e, t)
        }
        ;
        var r = n(2727)
    },
    2847: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            (0,
            r.default)("leadingComments", e, t)
        }
        ;
        var r = n(2727)
    },
    2848: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            return (0,
            r.default)(e, t),
            (0,
            a.default)(e, t),
            (0,
            i.default)(e, t),
            e
        }
        ;
        var r = n(2849)
          , a = n(2847)
          , i = n(2846)
    },
    2849: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            (0,
            r.default)("trailingComments", e, t)
        }
        ;
        var r = n(2727)
    },
    2850: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if ((0,
            r.isBlockStatement)(e))
                return e;
            var n = [];
            (0,
            r.isEmptyStatement)(e) ? n = [] : ((0,
            r.isStatement)(e) || (e = (0,
            r.isFunction)(t) ? (0,
            a.returnStatement)(e) : (0,
            a.expressionStatement)(e)),
            n = [e]);
            return (0,
            a.blockStatement)(n)
        }
        ;
        var r = n(2638)
          , a = n(2642)
    },
    2851: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t, n = "", o = r(e += "");
            try {
                for (o.s(); !(t = o.n()).done; ) {
                    var s = t.value;
                    n += (0,
                    i.isIdentifierChar)(s.codePointAt(0)) ? s : "-"
                }
            } catch (u) {
                o.e(u)
            } finally {
                o.f()
            }
            n = (n = n.replace(/^[-0-9]+/, "")).replace(/[-\s]+(.)?/g, (function(e, t) {
                return t ? t.toUpperCase() : ""
            }
            )),
            (0,
            a.default)(n) || (n = "_".concat(n));
            return n || "_"
        }
        ;
        var a = n(2681)
          , i = n(2725)
    },
    2852: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            return (0,
            r.default)(e, a.default, t),
            e
        }
        ;
        var r = n(2853)
          , a = n(2854)
    },
    2853: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function e(t, n, i) {
            if (!t)
                return;
            var o = a.VISITOR_KEYS[t.type];
            if (!o)
                return;
            n(t, i = i || {});
            var s, u = r(o);
            try {
                for (u.s(); !(s = u.n()).done; ) {
                    var l = s.value
                      , p = t[l];
                    if (Array.isArray(p)) {
                        var f, d = r(p);
                        try {
                            for (d.s(); !(f = d.n()).done; ) {
                                var c = f.value;
                                e(c, n, i)
                            }
                        } catch (y) {
                            d.e(y)
                        } finally {
                            d.f()
                        }
                    } else
                        e(p, n, i)
                }
            } catch (y) {
                u.e(y)
            } finally {
                u.f()
            }
        }
        ;
        var a = n(2646)
    },
    2854: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = n.preserveComments ? i : o, s = r(a);
            try {
                for (s.s(); !(t = s.n()).done; ) {
                    var u = t.value;
                    null != e[u] && (e[u] = void 0)
                }
            } catch (m) {
                s.e(m)
            } finally {
                s.f()
            }
            for (var l = 0, p = Object.keys(e); l < p.length; l++) {
                var f = p[l];
                "_" === f[0] && null != e[f] && (e[f] = void 0)
            }
            var d, c = Object.getOwnPropertySymbols(e), y = r(c);
            try {
                for (y.s(); !(d = y.n()).done; ) {
                    var T = d.value;
                    e[T] = null
                }
            } catch (m) {
                y.e(m)
            } finally {
                y.f()
            }
        }
        ;
        var a = n(2663)
          , i = ["tokens", "start", "end", "loc", "raw", "rawValue"]
          , o = a.COMMENT_KEYS.concat(["comments"]).concat(i)
    },
    2855: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.isVariableDeclaration)(e) && ("var" !== e.kind || e[a.BLOCK_SCOPED_SYMBOL])
        }
        ;
        var r = n(2638)
          , a = n(2663)
    },
    2856: function(e, t, n) {
        "use strict";
        var r = n(806);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.findSuggestion = function(e, t) {
            var n = t.map((function(t) {
                return function(e, t) {
                    var n, r, i = [], o = [], s = e.length, u = t.length;
                    if (!s)
                        return u;
                    if (!u)
                        return s;
                    for (r = 0; r <= u; r++)
                        i[r] = r;
                    for (n = 1; n <= s; n++) {
                        for (o = [n],
                        r = 1; r <= u; r++)
                            o[r] = e[n - 1] === t[r - 1] ? i[r - 1] : a(i[r - 1], i[r], o[r - 1]) + 1;
                        i = o
                    }
                    return o[u]
                }(t, e)
            }
            ));
            return t[n.indexOf(a.apply(void 0, r(n)))]
        }
        ;
        var a = Math.min
    },
    2883: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = (0,
        n(2731).default)({
            name: "transform-react-jsx",
            development: !1
        });
        t.default = r
    },
    2884: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = (0,
        n(2700).declare)((function(e) {
            return e.assertVersion(7),
            {
                name: "syntax-jsx",
                manipulateOptions: function(e, t) {
                    t.plugins.some((function(e) {
                        return "typescript" === (Array.isArray(e) ? e[0] : e)
                    }
                    )) || t.plugins.push("jsx")
                }
            }
        }
        ));
        t.default = r
    },
    3142: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ImportInjector", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }),
        t.addDefault = function(e, t, n) {
            return new r.default(e).addDefault(t, n)
        }
        ,
        t.addNamed = function(e, t, n, a) {
            return new r.default(e).addNamed(t, n, a)
        }
        ,
        t.addNamespace = function(e, t, n) {
            return new r.default(e).addNamespace(t, n)
        }
        ,
        t.addSideEffect = function(e, t, n) {
            return new r.default(e).addSideEffect(t, n)
        }
        ,
        Object.defineProperty(t, "isModule", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        });
        var r = n(3143)
          , a = n(2837)
    },
    3143: function(e, t, n) {
        "use strict";
        var r = n(220)
          , a = n(230);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = n(569)
          , o = n(2717)
          , s = n(3194)
          , u = n(2837)
          , l = o.numericLiteral
          , p = o.sequenceExpression
          , f = function() {
            function e(t, n, a) {
                r(this, e),
                this._defaultOpts = {
                    importedSource: null,
                    importedType: "commonjs",
                    importedInterop: "babel",
                    importingInterop: "babel",
                    ensureLiveReference: !1,
                    ensureNoContext: !1,
                    importPosition: "before"
                };
                var i = t.find((function(e) {
                    return e.isProgram()
                }
                ));
                this._programPath = i,
                this._programScope = i.scope,
                this._hub = i.hub,
                this._defaultOpts = this._applyDefaults(n, a, !0)
            }
            return a(e, [{
                key: "addDefault",
                value: function(e, t) {
                    return this.addNamed("default", e, t)
                }
            }, {
                key: "addNamed",
                value: function(e, t, n) {
                    return i("string" === typeof e),
                    this._generateImport(this._applyDefaults(t, n), e)
                }
            }, {
                key: "addNamespace",
                value: function(e, t) {
                    return this._generateImport(this._applyDefaults(e, t), null)
                }
            }, {
                key: "addSideEffect",
                value: function(e, t) {
                    return this._generateImport(this._applyDefaults(e, t), !1)
                }
            }, {
                key: "_applyDefaults",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , r = [];
                    "string" === typeof e ? (r.push({
                        importedSource: e
                    }),
                    r.push(t)) : (i(!t, "Unexpected secondary arguments."),
                    r.push(e));
                    for (var a = Object.assign({}, this._defaultOpts), o = function() {
                        var e = u[s];
                        if (!e)
                            return "continue";
                        Object.keys(a).forEach((function(t) {
                            void 0 !== e[t] && (a[t] = e[t])
                        }
                        )),
                        n || (void 0 !== e.nameHint && (a.nameHint = e.nameHint),
                        void 0 !== e.blockHoist && (a.blockHoist = e.blockHoist))
                    }, s = 0, u = r; s < u.length; s++)
                        o();
                    return a
                }
            }, {
                key: "_generateImport",
                value: function(e, t) {
                    var n = "default" === t
                      , r = !!t && !n
                      , a = null === t
                      , i = e.importedSource
                      , o = e.importedType
                      , f = e.importedInterop
                      , d = e.importingInterop
                      , c = e.ensureLiveReference
                      , y = e.ensureNoContext
                      , T = e.nameHint
                      , m = e.importPosition
                      , S = e.blockHoist
                      , E = T || t
                      , b = (0,
                    u.default)(this._programPath)
                      , v = b && "node" === d
                      , P = b && "babel" === d;
                    if ("after" === m && !b)
                        throw new Error('"importPosition": "after" is only supported in modules');
                    var O = new s.default(i,this._programScope,this._hub);
                    if ("es6" === o) {
                        if (!v && !P)
                            throw new Error("Cannot import an ES6 module from CommonJS");
                        O.import(),
                        a ? O.namespace(T || i) : (n || r) && O.named(E, t)
                    } else {
                        if ("commonjs" !== o)
                            throw new Error('Unexpected interopType "'.concat(o, '"'));
                        if ("babel" === f)
                            if (v) {
                                E = "default" !== E ? E : i;
                                var A = "".concat(i, "$es6Default");
                                O.import(),
                                a ? O.default(A).var(E || i).wildcardInterop() : n ? c ? O.default(A).var(E || i).defaultInterop().read("default") : O.default(A).var(E).defaultInterop().prop(t) : r && O.default(A).read(t)
                            } else
                                P ? (O.import(),
                                a ? O.namespace(E || i) : (n || r) && O.named(E, t)) : (O.require(),
                                a ? O.var(E || i).wildcardInterop() : (n || r) && c ? n ? (E = "default" !== E ? E : i,
                                O.var(E).read(t),
                                O.defaultInterop()) : O.var(i).read(t) : n ? O.var(E).defaultInterop().prop(t) : r && O.var(E).prop(t));
                        else if ("compiled" === f)
                            v ? (O.import(),
                            a ? O.default(E || i) : (n || r) && O.default(i).read(E)) : P ? (O.import(),
                            a ? O.namespace(E || i) : (n || r) && O.named(E, t)) : (O.require(),
                            a ? O.var(E || i) : (n || r) && (c ? O.var(i).read(E) : O.prop(t).var(E)));
                        else {
                            if ("uncompiled" !== f)
                                throw new Error('Unknown importedInterop "'.concat(f, '".'));
                            if (n && c)
                                throw new Error("No live reference for commonjs default");
                            v ? (O.import(),
                            a ? O.default(E || i) : n ? O.default(E) : r && O.default(i).read(E)) : P ? (O.import(),
                            a ? O.default(E || i) : n ? O.default(E) : r && O.named(E, t)) : (O.require(),
                            a ? O.var(E || i) : n ? O.var(E) : r && (c ? O.var(i).read(E) : O.var(E).prop(t)))
                        }
                    }
                    var g = O.done()
                      , x = g.statements
                      , D = g.resultName;
                    return this._insertStatements(x, m, S),
                    (n || r) && y && "Identifier" !== D.type ? p([l(0), D]) : D
                }
            }, {
                key: "_insertStatements",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "before"
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3
                      , r = this._programPath.get("body");
                    if ("after" === t) {
                        for (var a = r.length - 1; a >= 0; a--)
                            if (r[a].isImportDeclaration())
                                return void r[a].insertAfter(e)
                    } else {
                        e.forEach((function(e) {
                            e._blockHoist = n
                        }
                        ));
                        var i = r.find((function(e) {
                            var t = e.node._blockHoist;
                            return Number.isFinite(t) && t < 4
                        }
                        ));
                        if (i)
                            return void i.insertBefore(e)
                    }
                    this._programPath.unshiftContainer("body", e)
                }
            }]),
            e
        }();
        t.default = f
    },
    3144: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = (0,
        n(2819).default)("React.Component");
        t.default = r
    },
    3145: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return !!e && /^[a-z]/.test(e)
        }
    },
    3146: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            for (var t = [], n = 0; n < e.children.length; n++) {
                var i = e.children[n];
                (0,
                r.isJSXText)(i) ? (0,
                a.default)(i, t) : ((0,
                r.isJSXExpressionContainer)(i) && (i = i.expression),
                (0,
                r.isJSXEmptyExpression)(i) || t.push(i))
            }
            return t
        }
        ;
        var r = n(2637)
          , a = n(3147)
    },
    3147: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            for (var n = e.value.split(/\r\n|\n|\r/), a = 0, i = 0; i < n.length; i++)
                n[i].match(/[^ \t]/) && (a = i);
            for (var o = "", s = 0; s < n.length; s++) {
                var u = n[s]
                  , l = 0 === s
                  , p = s === n.length - 1
                  , f = s === a
                  , d = u.replace(/\t/g, " ");
                l || (d = d.replace(/^[ ]+/, "")),
                p || (d = d.replace(/[ ]+$/, "")),
                d && (f || (d += " "),
                o += d)
            }
            o && t.push((0,
            r.stringLiteral)(o))
        }
        ;
        var r = n(2641)
    },
    3148: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function() {
            var e = this
              , t = r.BUILDER_KEYS[e]
              , n = arguments.length;
            if (n > t.length)
                throw new Error("".concat(e, ": Too many arguments passed. Received ").concat(n, " but can receive no more than ").concat(t.length));
            for (var i = {
                type: e
            }, o = 0; o < t.length; ++o) {
                var s = t[o]
                  , u = r.NODE_FIELDS[e][s]
                  , l = void 0;
                o < n && (l = arguments[o]),
                void 0 === l && (l = Array.isArray(u.default) ? [] : u.default),
                i[s] = l
            }
            for (var p in i)
                (0,
                a.default)(i, p, i[p]);
            return i
        }
        ;
        var r = n(2645)
          , a = n(2721)
    },
    3149: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isIdentifierStart = p,
        t.isIdentifierChar = f,
        t.isIdentifierName = function(e) {
            for (var t = !0, n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (55296 === (64512 & r) && n + 1 < e.length) {
                    var a = e.charCodeAt(++n);
                    56320 === (64512 & a) && (r = 65536 + ((1023 & r) << 10) + (1023 & a))
                }
                if (t) {
                    if (t = !1,
                    !p(r))
                        return !1
                } else if (!f(r))
                    return !1
            }
            return !t
        }
        ;
        var r = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc"
          , a = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f"
          , i = new RegExp("[" + r + "]")
          , o = new RegExp("[" + r + a + "]");
        r = a = null;
        var s = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938]
          , u = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
        function l(e, t) {
            for (var n = 65536, r = 0, a = t.length; r < a; r += 2) {
                if ((n += t[r]) > e)
                    return !1;
                if ((n += t[r + 1]) >= e)
                    return !0
            }
            return !1
        }
        function p(e) {
            return e < 65 ? 36 === e : e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && i.test(String.fromCharCode(e)) : l(e, s)))
        }
        function f(e) {
            return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && o.test(String.fromCharCode(e)) : l(e, s) || l(e, u))))
        }
    },
    3150: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isReservedWord = u,
        t.isStrictReservedWord = l,
        t.isStrictBindOnlyReservedWord = p,
        t.isStrictBindReservedWord = function(e, t) {
            return l(e, t) || p(e)
        }
        ,
        t.isKeyword = function(e) {
            return i.has(e)
        }
        ;
        var r = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"]
          , a = ["eval", "arguments"]
          , i = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"])
          , o = new Set(r)
          , s = new Set(a);
        function u(e, t) {
            return t && "await" === e || "enum" === e
        }
        function l(e, t) {
            return u(e, t) || o.has(e)
        }
        function p(e) {
            return s.has(e)
        }
    },
    3151: function(e, t, n) {
        "use strict";
        var r = n(2654)
          , a = (0,
        r.defineAliasedType)("Flow")
          , i = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "TypeParameterDeclaration";
            a(e, {
                builder: ["id", "typeParameters", "extends", "body"],
                visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
                aliases: ["FlowDeclaration", "Statement", "Declaration"],
                fields: {
                    id: (0,
                    r.validateType)("Identifier"),
                    typeParameters: (0,
                    r.validateOptionalType)(t),
                    extends: (0,
                    r.validateOptional)((0,
                    r.arrayOfType)("InterfaceExtends")),
                    mixins: (0,
                    r.validateOptional)((0,
                    r.arrayOfType)("InterfaceExtends")),
                    implements: (0,
                    r.validateOptional)((0,
                    r.arrayOfType)("ClassImplements")),
                    body: (0,
                    r.validateType)("ObjectTypeAnnotation")
                }
            })
        };
        a("AnyTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("ArrayTypeAnnotation", {
            visitor: ["elementType"],
            aliases: ["FlowType"],
            fields: {
                elementType: (0,
                r.validateType)("FlowType")
            }
        }),
        a("BooleanTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("BooleanLiteralTypeAnnotation", {
            builder: ["value"],
            aliases: ["FlowType"],
            fields: {
                value: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("NullLiteralTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("ClassImplements", {
            visitor: ["id", "typeParameters"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterInstantiation")
            }
        }),
        i("DeclareClass"),
        a("DeclareFunction", {
            visitor: ["id"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                predicate: (0,
                r.validateOptionalType)("DeclaredPredicate")
            }
        }),
        i("DeclareInterface"),
        a("DeclareModule", {
            builder: ["id", "body", "kind"],
            visitor: ["id", "body"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)(["Identifier", "StringLiteral"]),
                body: (0,
                r.validateType)("BlockStatement"),
                kind: (0,
                r.validateOptional)((0,
                r.assertOneOf)("CommonJS", "ES"))
            }
        }),
        a("DeclareModuleExports", {
            visitor: ["typeAnnotation"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("TypeAnnotation")
            }
        }),
        a("DeclareTypeAlias", {
            visitor: ["id", "typeParameters", "right"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterDeclaration"),
                right: (0,
                r.validateType)("FlowType")
            }
        }),
        a("DeclareOpaqueType", {
            visitor: ["id", "typeParameters", "supertype"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterDeclaration"),
                supertype: (0,
                r.validateOptionalType)("FlowType"),
                impltype: (0,
                r.validateOptionalType)("FlowType")
            }
        }),
        a("DeclareVariable", {
            visitor: ["id"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier")
            }
        }),
        a("DeclareExportDeclaration", {
            visitor: ["declaration", "specifiers", "source"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                declaration: (0,
                r.validateOptionalType)("Flow"),
                specifiers: (0,
                r.validateOptional)((0,
                r.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
                source: (0,
                r.validateOptionalType)("StringLiteral"),
                default: (0,
                r.validateOptional)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("DeclareExportAllDeclaration", {
            visitor: ["source"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                source: (0,
                r.validateType)("StringLiteral"),
                exportKind: (0,
                r.validateOptional)((0,
                r.assertOneOf)("type", "value"))
            }
        }),
        a("DeclaredPredicate", {
            visitor: ["value"],
            aliases: ["FlowPredicate"],
            fields: {
                value: (0,
                r.validateType)("Flow")
            }
        }),
        a("ExistsTypeAnnotation", {
            aliases: ["FlowType"]
        }),
        a("FunctionTypeAnnotation", {
            visitor: ["typeParameters", "params", "rest", "returnType"],
            aliases: ["FlowType"],
            fields: {
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterDeclaration"),
                params: (0,
                r.validate)((0,
                r.arrayOfType)("FunctionTypeParam")),
                rest: (0,
                r.validateOptionalType)("FunctionTypeParam"),
                this: (0,
                r.validateOptionalType)("FunctionTypeParam"),
                returnType: (0,
                r.validateType)("FlowType")
            }
        }),
        a("FunctionTypeParam", {
            visitor: ["name", "typeAnnotation"],
            fields: {
                name: (0,
                r.validateOptionalType)("Identifier"),
                typeAnnotation: (0,
                r.validateType)("FlowType"),
                optional: (0,
                r.validateOptional)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("GenericTypeAnnotation", {
            visitor: ["id", "typeParameters"],
            aliases: ["FlowType"],
            fields: {
                id: (0,
                r.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterInstantiation")
            }
        }),
        a("InferredPredicate", {
            aliases: ["FlowPredicate"]
        }),
        a("InterfaceExtends", {
            visitor: ["id", "typeParameters"],
            fields: {
                id: (0,
                r.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterInstantiation")
            }
        }),
        i("InterfaceDeclaration"),
        a("InterfaceTypeAnnotation", {
            visitor: ["extends", "body"],
            aliases: ["FlowType"],
            fields: {
                extends: (0,
                r.validateOptional)((0,
                r.arrayOfType)("InterfaceExtends")),
                body: (0,
                r.validateType)("ObjectTypeAnnotation")
            }
        }),
        a("IntersectionTypeAnnotation", {
            visitor: ["types"],
            aliases: ["FlowType"],
            fields: {
                types: (0,
                r.validate)((0,
                r.arrayOfType)("FlowType"))
            }
        }),
        a("MixedTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("EmptyTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("NullableTypeAnnotation", {
            visitor: ["typeAnnotation"],
            aliases: ["FlowType"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("FlowType")
            }
        }),
        a("NumberLiteralTypeAnnotation", {
            builder: ["value"],
            aliases: ["FlowType"],
            fields: {
                value: (0,
                r.validate)((0,
                r.assertValueType)("number"))
            }
        }),
        a("NumberTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("ObjectTypeAnnotation", {
            visitor: ["properties", "indexers", "callProperties", "internalSlots"],
            aliases: ["FlowType"],
            builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
            fields: {
                properties: (0,
                r.validate)((0,
                r.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
                indexers: (0,
                r.validateOptional)((0,
                r.arrayOfType)("ObjectTypeIndexer")),
                callProperties: (0,
                r.validateOptional)((0,
                r.arrayOfType)("ObjectTypeCallProperty")),
                internalSlots: (0,
                r.validateOptional)((0,
                r.arrayOfType)("ObjectTypeInternalSlot")),
                exact: {
                    validate: (0,
                    r.assertValueType)("boolean"),
                    default: !1
                },
                inexact: (0,
                r.validateOptional)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("ObjectTypeInternalSlot", {
            visitor: ["id", "value", "optional", "static", "method"],
            aliases: ["UserWhitespacable"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                value: (0,
                r.validateType)("FlowType"),
                optional: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                static: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                method: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("ObjectTypeCallProperty", {
            visitor: ["value"],
            aliases: ["UserWhitespacable"],
            fields: {
                value: (0,
                r.validateType)("FlowType"),
                static: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("ObjectTypeIndexer", {
            visitor: ["id", "key", "value", "variance"],
            aliases: ["UserWhitespacable"],
            fields: {
                id: (0,
                r.validateOptionalType)("Identifier"),
                key: (0,
                r.validateType)("FlowType"),
                value: (0,
                r.validateType)("FlowType"),
                static: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                variance: (0,
                r.validateOptionalType)("Variance")
            }
        }),
        a("ObjectTypeProperty", {
            visitor: ["key", "value", "variance"],
            aliases: ["UserWhitespacable"],
            fields: {
                key: (0,
                r.validateType)(["Identifier", "StringLiteral"]),
                value: (0,
                r.validateType)("FlowType"),
                kind: (0,
                r.validate)((0,
                r.assertOneOf)("init", "get", "set")),
                static: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                proto: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                optional: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                variance: (0,
                r.validateOptionalType)("Variance"),
                method: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("ObjectTypeSpreadProperty", {
            visitor: ["argument"],
            aliases: ["UserWhitespacable"],
            fields: {
                argument: (0,
                r.validateType)("FlowType")
            }
        }),
        a("OpaqueType", {
            visitor: ["id", "typeParameters", "supertype", "impltype"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterDeclaration"),
                supertype: (0,
                r.validateOptionalType)("FlowType"),
                impltype: (0,
                r.validateType)("FlowType")
            }
        }),
        a("QualifiedTypeIdentifier", {
            visitor: ["id", "qualification"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                qualification: (0,
                r.validateType)(["Identifier", "QualifiedTypeIdentifier"])
            }
        }),
        a("StringLiteralTypeAnnotation", {
            builder: ["value"],
            aliases: ["FlowType"],
            fields: {
                value: (0,
                r.validate)((0,
                r.assertValueType)("string"))
            }
        }),
        a("StringTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("SymbolTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("ThisTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("TupleTypeAnnotation", {
            visitor: ["types"],
            aliases: ["FlowType"],
            fields: {
                types: (0,
                r.validate)((0,
                r.arrayOfType)("FlowType"))
            }
        }),
        a("TypeofTypeAnnotation", {
            visitor: ["argument"],
            aliases: ["FlowType"],
            fields: {
                argument: (0,
                r.validateType)("FlowType")
            }
        }),
        a("TypeAlias", {
            visitor: ["id", "typeParameters", "right"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterDeclaration"),
                right: (0,
                r.validateType)("FlowType")
            }
        }),
        a("TypeAnnotation", {
            visitor: ["typeAnnotation"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("FlowType")
            }
        }),
        a("TypeCastExpression", {
            visitor: ["expression", "typeAnnotation"],
            aliases: ["ExpressionWrapper", "Expression"],
            fields: {
                expression: (0,
                r.validateType)("Expression"),
                typeAnnotation: (0,
                r.validateType)("TypeAnnotation")
            }
        }),
        a("TypeParameter", {
            visitor: ["bound", "default", "variance"],
            fields: {
                name: (0,
                r.validate)((0,
                r.assertValueType)("string")),
                bound: (0,
                r.validateOptionalType)("TypeAnnotation"),
                default: (0,
                r.validateOptionalType)("FlowType"),
                variance: (0,
                r.validateOptionalType)("Variance")
            }
        }),
        a("TypeParameterDeclaration", {
            visitor: ["params"],
            fields: {
                params: (0,
                r.validate)((0,
                r.arrayOfType)("TypeParameter"))
            }
        }),
        a("TypeParameterInstantiation", {
            visitor: ["params"],
            fields: {
                params: (0,
                r.validate)((0,
                r.arrayOfType)("FlowType"))
            }
        }),
        a("UnionTypeAnnotation", {
            visitor: ["types"],
            aliases: ["FlowType"],
            fields: {
                types: (0,
                r.validate)((0,
                r.arrayOfType)("FlowType"))
            }
        }),
        a("Variance", {
            builder: ["kind"],
            fields: {
                kind: (0,
                r.validate)((0,
                r.assertOneOf)("minus", "plus"))
            }
        }),
        a("VoidTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("EnumDeclaration", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "body"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                body: (0,
                r.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
            }
        }),
        a("EnumBooleanBody", {
            aliases: ["EnumBody"],
            visitor: ["members"],
            fields: {
                explicitType: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                members: (0,
                r.validateArrayOfType)("EnumBooleanMember"),
                hasUnknownMembers: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("EnumNumberBody", {
            aliases: ["EnumBody"],
            visitor: ["members"],
            fields: {
                explicitType: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                members: (0,
                r.validateArrayOfType)("EnumNumberMember"),
                hasUnknownMembers: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("EnumStringBody", {
            aliases: ["EnumBody"],
            visitor: ["members"],
            fields: {
                explicitType: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                members: (0,
                r.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"]),
                hasUnknownMembers: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("EnumSymbolBody", {
            aliases: ["EnumBody"],
            visitor: ["members"],
            fields: {
                members: (0,
                r.validateArrayOfType)("EnumDefaultedMember"),
                hasUnknownMembers: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("EnumBooleanMember", {
            aliases: ["EnumMember"],
            visitor: ["id"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                init: (0,
                r.validateType)("BooleanLiteral")
            }
        }),
        a("EnumNumberMember", {
            aliases: ["EnumMember"],
            visitor: ["id", "init"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                init: (0,
                r.validateType)("NumericLiteral")
            }
        }),
        a("EnumStringMember", {
            aliases: ["EnumMember"],
            visitor: ["id", "init"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                init: (0,
                r.validateType)("StringLiteral")
            }
        }),
        a("EnumDefaultedMember", {
            aliases: ["EnumMember"],
            visitor: ["id"],
            fields: {
                id: (0,
                r.validateType)("Identifier")
            }
        }),
        a("IndexedAccessType", {
            visitor: ["objectType", "indexType"],
            aliases: ["FlowType"],
            fields: {
                objectType: (0,
                r.validateType)("FlowType"),
                indexType: (0,
                r.validateType)("FlowType")
            }
        }),
        a("OptionalIndexedAccessType", {
            visitor: ["objectType", "indexType"],
            aliases: ["FlowType"],
            fields: {
                objectType: (0,
                r.validateType)("FlowType"),
                indexType: (0,
                r.validateType)("FlowType"),
                optional: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        })
    },
    3152: function(e, t, n) {
        "use strict";
        var r = n(2654)
          , a = (0,
        r.defineAliasedType)("JSX");
        a("JSXAttribute", {
            visitor: ["name", "value"],
            aliases: ["Immutable"],
            fields: {
                name: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
                },
                value: {
                    optional: !0,
                    validate: (0,
                    r.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
                }
            }
        }),
        a("JSXClosingElement", {
            visitor: ["name"],
            aliases: ["Immutable"],
            fields: {
                name: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
                }
            }
        }),
        a("JSXElement", {
            builder: ["openingElement", "closingElement", "children", "selfClosing"],
            visitor: ["openingElement", "children", "closingElement"],
            aliases: ["Immutable", "Expression"],
            fields: {
                openingElement: {
                    validate: (0,
                    r.assertNodeType)("JSXOpeningElement")
                },
                closingElement: {
                    optional: !0,
                    validate: (0,
                    r.assertNodeType)("JSXClosingElement")
                },
                children: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
                },
                selfClosing: {
                    validate: (0,
                    r.assertValueType)("boolean"),
                    optional: !0
                }
            }
        }),
        a("JSXEmptyExpression", {}),
        a("JSXExpressionContainer", {
            visitor: ["expression"],
            aliases: ["Immutable"],
            fields: {
                expression: {
                    validate: (0,
                    r.assertNodeType)("Expression", "JSXEmptyExpression")
                }
            }
        }),
        a("JSXSpreadChild", {
            visitor: ["expression"],
            aliases: ["Immutable"],
            fields: {
                expression: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            }
        }),
        a("JSXIdentifier", {
            builder: ["name"],
            fields: {
                name: {
                    validate: (0,
                    r.assertValueType)("string")
                }
            }
        }),
        a("JSXMemberExpression", {
            visitor: ["object", "property"],
            fields: {
                object: {
                    validate: (0,
                    r.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
                },
                property: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier")
                }
            }
        }),
        a("JSXNamespacedName", {
            visitor: ["namespace", "name"],
            fields: {
                namespace: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier")
                },
                name: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier")
                }
            }
        }),
        a("JSXOpeningElement", {
            builder: ["name", "attributes", "selfClosing"],
            visitor: ["name", "attributes"],
            aliases: ["Immutable"],
            fields: {
                name: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
                },
                selfClosing: {
                    default: !1
                },
                attributes: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
                },
                typeParameters: {
                    validate: (0,
                    r.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
                    optional: !0
                }
            }
        }),
        a("JSXSpreadAttribute", {
            visitor: ["argument"],
            fields: {
                argument: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            }
        }),
        a("JSXText", {
            aliases: ["Immutable"],
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    r.assertValueType)("string")
                }
            }
        }),
        a("JSXFragment", {
            builder: ["openingFragment", "closingFragment", "children"],
            visitor: ["openingFragment", "children", "closingFragment"],
            aliases: ["Immutable", "Expression"],
            fields: {
                openingFragment: {
                    validate: (0,
                    r.assertNodeType)("JSXOpeningFragment")
                },
                closingFragment: {
                    validate: (0,
                    r.assertNodeType)("JSXClosingFragment")
                },
                children: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
                }
            }
        }),
        a("JSXOpeningFragment", {
            aliases: ["Immutable"]
        }),
        a("JSXClosingFragment", {
            aliases: ["Immutable"]
        })
    },
    3153: function(e, t, n) {
        "use strict";
        var r = n(806)
          , a = n(2654)
          , i = n(2823)
          , o = (0,
        a.defineAliasedType)("Miscellaneous");
        o("Noop", {
            visitor: []
        }),
        o("Placeholder", {
            visitor: [],
            builder: ["expectedNode", "name"],
            fields: {
                name: {
                    validate: (0,
                    a.assertNodeType)("Identifier")
                },
                expectedNode: {
                    validate: a.assertOneOf.apply(void 0, r(i.PLACEHOLDERS))
                }
            }
        }),
        o("V8IntrinsicIdentifier", {
            builder: ["name"],
            fields: {
                name: {
                    validate: (0,
                    a.assertValueType)("string")
                }
            }
        })
    },
    3154: function(e, t, n) {
        "use strict";
        var r = n(2654);
        (0,
        r.default)("ArgumentPlaceholder", {}),
        (0,
        r.default)("BindExpression", {
            visitor: ["object", "callee"],
            aliases: ["Expression"],
            fields: Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0
            }).BABEL_TYPES_8_BREAKING ? {
                object: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                },
                callee: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            } : {
                object: {
                    validate: Object.assign((function() {}
                    ), {
                        oneOfNodeTypes: ["Expression"]
                    })
                },
                callee: {
                    validate: Object.assign((function() {}
                    ), {
                        oneOfNodeTypes: ["Expression"]
                    })
                }
            }
        }),
        (0,
        r.default)("ImportAttribute", {
            visitor: ["key", "value"],
            fields: {
                key: {
                    validate: (0,
                    r.assertNodeType)("Identifier", "StringLiteral")
                },
                value: {
                    validate: (0,
                    r.assertNodeType)("StringLiteral")
                }
            }
        }),
        (0,
        r.default)("Decorator", {
            visitor: ["expression"],
            fields: {
                expression: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            }
        }),
        (0,
        r.default)("DoExpression", {
            visitor: ["body"],
            builder: ["body", "async"],
            aliases: ["Expression"],
            fields: {
                body: {
                    validate: (0,
                    r.assertNodeType)("BlockStatement")
                },
                async: {
                    validate: (0,
                    r.assertValueType)("boolean"),
                    default: !1
                }
            }
        }),
        (0,
        r.default)("ExportDefaultSpecifier", {
            visitor: ["exported"],
            aliases: ["ModuleSpecifier"],
            fields: {
                exported: {
                    validate: (0,
                    r.assertNodeType)("Identifier")
                }
            }
        }),
        (0,
        r.default)("RecordExpression", {
            visitor: ["properties"],
            aliases: ["Expression"],
            fields: {
                properties: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("ObjectProperty", "SpreadElement")))
                }
            }
        }),
        (0,
        r.default)("TupleExpression", {
            fields: {
                elements: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("Expression", "SpreadElement"))),
                    default: []
                }
            },
            visitor: ["elements"],
            aliases: ["Expression"]
        }),
        (0,
        r.default)("DecimalLiteral", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    r.assertValueType)("string")
                }
            },
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        (0,
        r.default)("ModuleExpression", {
            visitor: ["body"],
            fields: {
                body: {
                    validate: (0,
                    r.assertNodeType)("Program")
                }
            },
            aliases: ["Expression"]
        }),
        (0,
        r.default)("TopicReference", {
            aliases: ["Expression"]
        }),
        (0,
        r.default)("PipelineTopicExpression", {
            builder: ["expression"],
            visitor: ["expression"],
            fields: {
                expression: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            },
            aliases: ["Expression"]
        }),
        (0,
        r.default)("PipelineBareFunction", {
            builder: ["callee"],
            visitor: ["callee"],
            fields: {
                callee: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            },
            aliases: ["Expression"]
        }),
        (0,
        r.default)("PipelinePrimaryTopicReference", {
            aliases: ["Expression"]
        })
    },
    3155: function(e, t, n) {
        "use strict";
        var r = n(2654)
          , a = n(2821)
          , i = n(2678)
          , o = (0,
        r.defineAliasedType)("TypeScript")
          , s = (0,
        r.assertValueType)("boolean")
          , u = {
            returnType: {
                validate: (0,
                r.assertNodeType)("TSTypeAnnotation", "Noop"),
                optional: !0
            },
            typeParameters: {
                validate: (0,
                r.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
                optional: !0
            }
        };
        o("TSParameterProperty", {
            aliases: ["LVal"],
            visitor: ["parameter"],
            fields: {
                accessibility: {
                    validate: (0,
                    r.assertOneOf)("public", "private", "protected"),
                    optional: !0
                },
                readonly: {
                    validate: (0,
                    r.assertValueType)("boolean"),
                    optional: !0
                },
                parameter: {
                    validate: (0,
                    r.assertNodeType)("Identifier", "AssignmentPattern")
                },
                override: {
                    validate: (0,
                    r.assertValueType)("boolean"),
                    optional: !0
                },
                decorators: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("Decorator"))),
                    optional: !0
                }
            }
        }),
        o("TSDeclareFunction", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "typeParameters", "params", "returnType"],
            fields: Object.assign({}, a.functionDeclarationCommon, u)
        }),
        o("TSDeclareMethod", {
            visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
            fields: Object.assign({}, a.classMethodOrDeclareMethodCommon, u)
        }),
        o("TSQualifiedName", {
            aliases: ["TSEntityName"],
            visitor: ["left", "right"],
            fields: {
                left: (0,
                r.validateType)("TSEntityName"),
                right: (0,
                r.validateType)("Identifier")
            }
        });
        var l = {
            typeParameters: (0,
            r.validateOptionalType)("TSTypeParameterDeclaration"),
            parameters: (0,
            r.validateArrayOfType)(["Identifier", "RestElement"]),
            typeAnnotation: (0,
            r.validateOptionalType)("TSTypeAnnotation")
        }
          , p = {
            aliases: ["TSTypeElement"],
            visitor: ["typeParameters", "parameters", "typeAnnotation"],
            fields: l
        };
        o("TSCallSignatureDeclaration", p),
        o("TSConstructSignatureDeclaration", p);
        var f = {
            key: (0,
            r.validateType)("Expression"),
            computed: (0,
            r.validate)(s),
            optional: (0,
            r.validateOptional)(s)
        };
        o("TSPropertySignature", {
            aliases: ["TSTypeElement"],
            visitor: ["key", "typeAnnotation", "initializer"],
            fields: Object.assign({}, f, {
                readonly: (0,
                r.validateOptional)(s),
                typeAnnotation: (0,
                r.validateOptionalType)("TSTypeAnnotation"),
                initializer: (0,
                r.validateOptionalType)("Expression"),
                kind: {
                    validate: (0,
                    r.assertOneOf)("get", "set")
                }
            })
        }),
        o("TSMethodSignature", {
            aliases: ["TSTypeElement"],
            visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
            fields: Object.assign({}, l, f, {
                kind: {
                    validate: (0,
                    r.assertOneOf)("method", "get", "set")
                }
            })
        }),
        o("TSIndexSignature", {
            aliases: ["TSTypeElement"],
            visitor: ["parameters", "typeAnnotation"],
            fields: {
                readonly: (0,
                r.validateOptional)(s),
                static: (0,
                r.validateOptional)(s),
                parameters: (0,
                r.validateArrayOfType)("Identifier"),
                typeAnnotation: (0,
                r.validateOptionalType)("TSTypeAnnotation")
            }
        });
        for (var d = 0, c = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"]; d < c.length; d++) {
            o(c[d], {
                aliases: ["TSType", "TSBaseType"],
                visitor: [],
                fields: {}
            })
        }
        o("TSThisType", {
            aliases: ["TSType", "TSBaseType"],
            visitor: [],
            fields: {}
        });
        var y = {
            aliases: ["TSType"],
            visitor: ["typeParameters", "parameters", "typeAnnotation"]
        };
        o("TSFunctionType", Object.assign({}, y, {
            fields: l
        })),
        o("TSConstructorType", Object.assign({}, y, {
            fields: Object.assign({}, l, {
                abstract: (0,
                r.validateOptional)(s)
            })
        })),
        o("TSTypeReference", {
            aliases: ["TSType"],
            visitor: ["typeName", "typeParameters"],
            fields: {
                typeName: (0,
                r.validateType)("TSEntityName"),
                typeParameters: (0,
                r.validateOptionalType)("TSTypeParameterInstantiation")
            }
        }),
        o("TSTypePredicate", {
            aliases: ["TSType"],
            visitor: ["parameterName", "typeAnnotation"],
            builder: ["parameterName", "typeAnnotation", "asserts"],
            fields: {
                parameterName: (0,
                r.validateType)(["Identifier", "TSThisType"]),
                typeAnnotation: (0,
                r.validateOptionalType)("TSTypeAnnotation"),
                asserts: (0,
                r.validateOptional)(s)
            }
        }),
        o("TSTypeQuery", {
            aliases: ["TSType"],
            visitor: ["exprName"],
            fields: {
                exprName: (0,
                r.validateType)(["TSEntityName", "TSImportType"])
            }
        }),
        o("TSTypeLiteral", {
            aliases: ["TSType"],
            visitor: ["members"],
            fields: {
                members: (0,
                r.validateArrayOfType)("TSTypeElement")
            }
        }),
        o("TSArrayType", {
            aliases: ["TSType"],
            visitor: ["elementType"],
            fields: {
                elementType: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSTupleType", {
            aliases: ["TSType"],
            visitor: ["elementTypes"],
            fields: {
                elementTypes: (0,
                r.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
            }
        }),
        o("TSOptionalType", {
            aliases: ["TSType"],
            visitor: ["typeAnnotation"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSRestType", {
            aliases: ["TSType"],
            visitor: ["typeAnnotation"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSNamedTupleMember", {
            visitor: ["label", "elementType"],
            builder: ["label", "elementType", "optional"],
            fields: {
                label: (0,
                r.validateType)("Identifier"),
                optional: {
                    validate: s,
                    default: !1
                },
                elementType: (0,
                r.validateType)("TSType")
            }
        });
        var T = {
            aliases: ["TSType"],
            visitor: ["types"],
            fields: {
                types: (0,
                r.validateArrayOfType)("TSType")
            }
        };
        o("TSUnionType", T),
        o("TSIntersectionType", T),
        o("TSConditionalType", {
            aliases: ["TSType"],
            visitor: ["checkType", "extendsType", "trueType", "falseType"],
            fields: {
                checkType: (0,
                r.validateType)("TSType"),
                extendsType: (0,
                r.validateType)("TSType"),
                trueType: (0,
                r.validateType)("TSType"),
                falseType: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSInferType", {
            aliases: ["TSType"],
            visitor: ["typeParameter"],
            fields: {
                typeParameter: (0,
                r.validateType)("TSTypeParameter")
            }
        }),
        o("TSParenthesizedType", {
            aliases: ["TSType"],
            visitor: ["typeAnnotation"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSTypeOperator", {
            aliases: ["TSType"],
            visitor: ["typeAnnotation"],
            fields: {
                operator: (0,
                r.validate)((0,
                r.assertValueType)("string")),
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSIndexedAccessType", {
            aliases: ["TSType"],
            visitor: ["objectType", "indexType"],
            fields: {
                objectType: (0,
                r.validateType)("TSType"),
                indexType: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSMappedType", {
            aliases: ["TSType"],
            visitor: ["typeParameter", "typeAnnotation", "nameType"],
            fields: {
                readonly: (0,
                r.validateOptional)(s),
                typeParameter: (0,
                r.validateType)("TSTypeParameter"),
                optional: (0,
                r.validateOptional)(s),
                typeAnnotation: (0,
                r.validateOptionalType)("TSType"),
                nameType: (0,
                r.validateOptionalType)("TSType")
            }
        }),
        o("TSLiteralType", {
            aliases: ["TSType", "TSBaseType"],
            visitor: ["literal"],
            fields: {
                literal: {
                    validate: function() {
                        var e = (0,
                        r.assertNodeType)("NumericLiteral", "BigIntLiteral")
                          , t = (0,
                        r.assertOneOf)("-")
                          , n = (0,
                        r.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral");
                        function a(r, a, o) {
                            (0,
                            i.default)("UnaryExpression", o) ? (t(o, "operator", o.operator),
                            e(o, "argument", o.argument)) : n(r, a, o)
                        }
                        return a.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "UnaryExpression"],
                        a
                    }()
                }
            }
        }),
        o("TSExpressionWithTypeArguments", {
            aliases: ["TSType"],
            visitor: ["expression", "typeParameters"],
            fields: {
                expression: (0,
                r.validateType)("TSEntityName"),
                typeParameters: (0,
                r.validateOptionalType)("TSTypeParameterInstantiation")
            }
        }),
        o("TSInterfaceDeclaration", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "typeParameters", "extends", "body"],
            fields: {
                declare: (0,
                r.validateOptional)(s),
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TSTypeParameterDeclaration"),
                extends: (0,
                r.validateOptional)((0,
                r.arrayOfType)("TSExpressionWithTypeArguments")),
                body: (0,
                r.validateType)("TSInterfaceBody")
            }
        }),
        o("TSInterfaceBody", {
            visitor: ["body"],
            fields: {
                body: (0,
                r.validateArrayOfType)("TSTypeElement")
            }
        }),
        o("TSTypeAliasDeclaration", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "typeParameters", "typeAnnotation"],
            fields: {
                declare: (0,
                r.validateOptional)(s),
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TSTypeParameterDeclaration"),
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSAsExpression", {
            aliases: ["Expression"],
            visitor: ["expression", "typeAnnotation"],
            fields: {
                expression: (0,
                r.validateType)("Expression"),
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSTypeAssertion", {
            aliases: ["Expression"],
            visitor: ["typeAnnotation", "expression"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("TSType"),
                expression: (0,
                r.validateType)("Expression")
            }
        }),
        o("TSEnumDeclaration", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "members"],
            fields: {
                declare: (0,
                r.validateOptional)(s),
                const: (0,
                r.validateOptional)(s),
                id: (0,
                r.validateType)("Identifier"),
                members: (0,
                r.validateArrayOfType)("TSEnumMember"),
                initializer: (0,
                r.validateOptionalType)("Expression")
            }
        }),
        o("TSEnumMember", {
            visitor: ["id", "initializer"],
            fields: {
                id: (0,
                r.validateType)(["Identifier", "StringLiteral"]),
                initializer: (0,
                r.validateOptionalType)("Expression")
            }
        }),
        o("TSModuleDeclaration", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "body"],
            fields: {
                declare: (0,
                r.validateOptional)(s),
                global: (0,
                r.validateOptional)(s),
                id: (0,
                r.validateType)(["Identifier", "StringLiteral"]),
                body: (0,
                r.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
            }
        }),
        o("TSModuleBlock", {
            aliases: ["Scopable", "Block", "BlockParent"],
            visitor: ["body"],
            fields: {
                body: (0,
                r.validateArrayOfType)("Statement")
            }
        }),
        o("TSImportType", {
            aliases: ["TSType"],
            visitor: ["argument", "qualifier", "typeParameters"],
            fields: {
                argument: (0,
                r.validateType)("StringLiteral"),
                qualifier: (0,
                r.validateOptionalType)("TSEntityName"),
                typeParameters: (0,
                r.validateOptionalType)("TSTypeParameterInstantiation")
            }
        }),
        o("TSImportEqualsDeclaration", {
            aliases: ["Statement"],
            visitor: ["id", "moduleReference"],
            fields: {
                isExport: (0,
                r.validate)(s),
                id: (0,
                r.validateType)("Identifier"),
                moduleReference: (0,
                r.validateType)(["TSEntityName", "TSExternalModuleReference"]),
                importKind: {
                    validate: (0,
                    r.assertOneOf)("type", "value"),
                    optional: !0
                }
            }
        }),
        o("TSExternalModuleReference", {
            visitor: ["expression"],
            fields: {
                expression: (0,
                r.validateType)("StringLiteral")
            }
        }),
        o("TSNonNullExpression", {
            aliases: ["Expression"],
            visitor: ["expression"],
            fields: {
                expression: (0,
                r.validateType)("Expression")
            }
        }),
        o("TSExportAssignment", {
            aliases: ["Statement"],
            visitor: ["expression"],
            fields: {
                expression: (0,
                r.validateType)("Expression")
            }
        }),
        o("TSNamespaceExportDeclaration", {
            aliases: ["Statement"],
            visitor: ["id"],
            fields: {
                id: (0,
                r.validateType)("Identifier")
            }
        }),
        o("TSTypeAnnotation", {
            visitor: ["typeAnnotation"],
            fields: {
                typeAnnotation: {
                    validate: (0,
                    r.assertNodeType)("TSType")
                }
            }
        }),
        o("TSTypeParameterInstantiation", {
            visitor: ["params"],
            fields: {
                params: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("TSType")))
                }
            }
        }),
        o("TSTypeParameterDeclaration", {
            visitor: ["params"],
            fields: {
                params: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("TSTypeParameter")))
                }
            }
        }),
        o("TSTypeParameter", {
            builder: ["constraint", "default", "name"],
            visitor: ["constraint", "default"],
            fields: {
                name: {
                    validate: (0,
                    r.assertValueType)("string")
                },
                constraint: {
                    validate: (0,
                    r.assertNodeType)("TSType"),
                    optional: !0
                },
                default: {
                    validate: (0,
                    r.assertNodeType)("TSType"),
                    optional: !0
                }
            }
        })
    },
    3156: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            if (!(0,
            r.default)(e)) {
                var t, n = null != (t = null == e ? void 0 : e.type) ? t : JSON.stringify(e);
                throw new TypeError('Not a valid node of type "'.concat(n, '"'))
            }
        }
        ;
        var r = n(2824)
    },
    3157: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.assertAnyTypeAnnotation = function(e, t) {
            a("AnyTypeAnnotation", e, t)
        }
        ,
        t.assertArgumentPlaceholder = function(e, t) {
            a("ArgumentPlaceholder", e, t)
        }
        ,
        t.assertArrayExpression = function(e, t) {
            a("ArrayExpression", e, t)
        }
        ,
        t.assertArrayPattern = function(e, t) {
            a("ArrayPattern", e, t)
        }
        ,
        t.assertArrayTypeAnnotation = function(e, t) {
            a("ArrayTypeAnnotation", e, t)
        }
        ,
        t.assertArrowFunctionExpression = function(e, t) {
            a("ArrowFunctionExpression", e, t)
        }
        ,
        t.assertAssignmentExpression = function(e, t) {
            a("AssignmentExpression", e, t)
        }
        ,
        t.assertAssignmentPattern = function(e, t) {
            a("AssignmentPattern", e, t)
        }
        ,
        t.assertAwaitExpression = function(e, t) {
            a("AwaitExpression", e, t)
        }
        ,
        t.assertBigIntLiteral = function(e, t) {
            a("BigIntLiteral", e, t)
        }
        ,
        t.assertBinary = function(e, t) {
            a("Binary", e, t)
        }
        ,
        t.assertBinaryExpression = function(e, t) {
            a("BinaryExpression", e, t)
        }
        ,
        t.assertBindExpression = function(e, t) {
            a("BindExpression", e, t)
        }
        ,
        t.assertBlock = function(e, t) {
            a("Block", e, t)
        }
        ,
        t.assertBlockParent = function(e, t) {
            a("BlockParent", e, t)
        }
        ,
        t.assertBlockStatement = function(e, t) {
            a("BlockStatement", e, t)
        }
        ,
        t.assertBooleanLiteral = function(e, t) {
            a("BooleanLiteral", e, t)
        }
        ,
        t.assertBooleanLiteralTypeAnnotation = function(e, t) {
            a("BooleanLiteralTypeAnnotation", e, t)
        }
        ,
        t.assertBooleanTypeAnnotation = function(e, t) {
            a("BooleanTypeAnnotation", e, t)
        }
        ,
        t.assertBreakStatement = function(e, t) {
            a("BreakStatement", e, t)
        }
        ,
        t.assertCallExpression = function(e, t) {
            a("CallExpression", e, t)
        }
        ,
        t.assertCatchClause = function(e, t) {
            a("CatchClause", e, t)
        }
        ,
        t.assertClass = function(e, t) {
            a("Class", e, t)
        }
        ,
        t.assertClassBody = function(e, t) {
            a("ClassBody", e, t)
        }
        ,
        t.assertClassDeclaration = function(e, t) {
            a("ClassDeclaration", e, t)
        }
        ,
        t.assertClassExpression = function(e, t) {
            a("ClassExpression", e, t)
        }
        ,
        t.assertClassImplements = function(e, t) {
            a("ClassImplements", e, t)
        }
        ,
        t.assertClassMethod = function(e, t) {
            a("ClassMethod", e, t)
        }
        ,
        t.assertClassPrivateMethod = function(e, t) {
            a("ClassPrivateMethod", e, t)
        }
        ,
        t.assertClassPrivateProperty = function(e, t) {
            a("ClassPrivateProperty", e, t)
        }
        ,
        t.assertClassProperty = function(e, t) {
            a("ClassProperty", e, t)
        }
        ,
        t.assertCompletionStatement = function(e, t) {
            a("CompletionStatement", e, t)
        }
        ,
        t.assertConditional = function(e, t) {
            a("Conditional", e, t)
        }
        ,
        t.assertConditionalExpression = function(e, t) {
            a("ConditionalExpression", e, t)
        }
        ,
        t.assertContinueStatement = function(e, t) {
            a("ContinueStatement", e, t)
        }
        ,
        t.assertDebuggerStatement = function(e, t) {
            a("DebuggerStatement", e, t)
        }
        ,
        t.assertDecimalLiteral = function(e, t) {
            a("DecimalLiteral", e, t)
        }
        ,
        t.assertDeclaration = function(e, t) {
            a("Declaration", e, t)
        }
        ,
        t.assertDeclareClass = function(e, t) {
            a("DeclareClass", e, t)
        }
        ,
        t.assertDeclareExportAllDeclaration = function(e, t) {
            a("DeclareExportAllDeclaration", e, t)
        }
        ,
        t.assertDeclareExportDeclaration = function(e, t) {
            a("DeclareExportDeclaration", e, t)
        }
        ,
        t.assertDeclareFunction = function(e, t) {
            a("DeclareFunction", e, t)
        }
        ,
        t.assertDeclareInterface = function(e, t) {
            a("DeclareInterface", e, t)
        }
        ,
        t.assertDeclareModule = function(e, t) {
            a("DeclareModule", e, t)
        }
        ,
        t.assertDeclareModuleExports = function(e, t) {
            a("DeclareModuleExports", e, t)
        }
        ,
        t.assertDeclareOpaqueType = function(e, t) {
            a("DeclareOpaqueType", e, t)
        }
        ,
        t.assertDeclareTypeAlias = function(e, t) {
            a("DeclareTypeAlias", e, t)
        }
        ,
        t.assertDeclareVariable = function(e, t) {
            a("DeclareVariable", e, t)
        }
        ,
        t.assertDeclaredPredicate = function(e, t) {
            a("DeclaredPredicate", e, t)
        }
        ,
        t.assertDecorator = function(e, t) {
            a("Decorator", e, t)
        }
        ,
        t.assertDirective = function(e, t) {
            a("Directive", e, t)
        }
        ,
        t.assertDirectiveLiteral = function(e, t) {
            a("DirectiveLiteral", e, t)
        }
        ,
        t.assertDoExpression = function(e, t) {
            a("DoExpression", e, t)
        }
        ,
        t.assertDoWhileStatement = function(e, t) {
            a("DoWhileStatement", e, t)
        }
        ,
        t.assertEmptyStatement = function(e, t) {
            a("EmptyStatement", e, t)
        }
        ,
        t.assertEmptyTypeAnnotation = function(e, t) {
            a("EmptyTypeAnnotation", e, t)
        }
        ,
        t.assertEnumBody = function(e, t) {
            a("EnumBody", e, t)
        }
        ,
        t.assertEnumBooleanBody = function(e, t) {
            a("EnumBooleanBody", e, t)
        }
        ,
        t.assertEnumBooleanMember = function(e, t) {
            a("EnumBooleanMember", e, t)
        }
        ,
        t.assertEnumDeclaration = function(e, t) {
            a("EnumDeclaration", e, t)
        }
        ,
        t.assertEnumDefaultedMember = function(e, t) {
            a("EnumDefaultedMember", e, t)
        }
        ,
        t.assertEnumMember = function(e, t) {
            a("EnumMember", e, t)
        }
        ,
        t.assertEnumNumberBody = function(e, t) {
            a("EnumNumberBody", e, t)
        }
        ,
        t.assertEnumNumberMember = function(e, t) {
            a("EnumNumberMember", e, t)
        }
        ,
        t.assertEnumStringBody = function(e, t) {
            a("EnumStringBody", e, t)
        }
        ,
        t.assertEnumStringMember = function(e, t) {
            a("EnumStringMember", e, t)
        }
        ,
        t.assertEnumSymbolBody = function(e, t) {
            a("EnumSymbolBody", e, t)
        }
        ,
        t.assertExistsTypeAnnotation = function(e, t) {
            a("ExistsTypeAnnotation", e, t)
        }
        ,
        t.assertExportAllDeclaration = function(e, t) {
            a("ExportAllDeclaration", e, t)
        }
        ,
        t.assertExportDeclaration = function(e, t) {
            a("ExportDeclaration", e, t)
        }
        ,
        t.assertExportDefaultDeclaration = function(e, t) {
            a("ExportDefaultDeclaration", e, t)
        }
        ,
        t.assertExportDefaultSpecifier = function(e, t) {
            a("ExportDefaultSpecifier", e, t)
        }
        ,
        t.assertExportNamedDeclaration = function(e, t) {
            a("ExportNamedDeclaration", e, t)
        }
        ,
        t.assertExportNamespaceSpecifier = function(e, t) {
            a("ExportNamespaceSpecifier", e, t)
        }
        ,
        t.assertExportSpecifier = function(e, t) {
            a("ExportSpecifier", e, t)
        }
        ,
        t.assertExpression = function(e, t) {
            a("Expression", e, t)
        }
        ,
        t.assertExpressionStatement = function(e, t) {
            a("ExpressionStatement", e, t)
        }
        ,
        t.assertExpressionWrapper = function(e, t) {
            a("ExpressionWrapper", e, t)
        }
        ,
        t.assertFile = function(e, t) {
            a("File", e, t)
        }
        ,
        t.assertFlow = function(e, t) {
            a("Flow", e, t)
        }
        ,
        t.assertFlowBaseAnnotation = function(e, t) {
            a("FlowBaseAnnotation", e, t)
        }
        ,
        t.assertFlowDeclaration = function(e, t) {
            a("FlowDeclaration", e, t)
        }
        ,
        t.assertFlowPredicate = function(e, t) {
            a("FlowPredicate", e, t)
        }
        ,
        t.assertFlowType = function(e, t) {
            a("FlowType", e, t)
        }
        ,
        t.assertFor = function(e, t) {
            a("For", e, t)
        }
        ,
        t.assertForInStatement = function(e, t) {
            a("ForInStatement", e, t)
        }
        ,
        t.assertForOfStatement = function(e, t) {
            a("ForOfStatement", e, t)
        }
        ,
        t.assertForStatement = function(e, t) {
            a("ForStatement", e, t)
        }
        ,
        t.assertForXStatement = function(e, t) {
            a("ForXStatement", e, t)
        }
        ,
        t.assertFunction = function(e, t) {
            a("Function", e, t)
        }
        ,
        t.assertFunctionDeclaration = function(e, t) {
            a("FunctionDeclaration", e, t)
        }
        ,
        t.assertFunctionExpression = function(e, t) {
            a("FunctionExpression", e, t)
        }
        ,
        t.assertFunctionParent = function(e, t) {
            a("FunctionParent", e, t)
        }
        ,
        t.assertFunctionTypeAnnotation = function(e, t) {
            a("FunctionTypeAnnotation", e, t)
        }
        ,
        t.assertFunctionTypeParam = function(e, t) {
            a("FunctionTypeParam", e, t)
        }
        ,
        t.assertGenericTypeAnnotation = function(e, t) {
            a("GenericTypeAnnotation", e, t)
        }
        ,
        t.assertIdentifier = function(e, t) {
            a("Identifier", e, t)
        }
        ,
        t.assertIfStatement = function(e, t) {
            a("IfStatement", e, t)
        }
        ,
        t.assertImmutable = function(e, t) {
            a("Immutable", e, t)
        }
        ,
        t.assertImport = function(e, t) {
            a("Import", e, t)
        }
        ,
        t.assertImportAttribute = function(e, t) {
            a("ImportAttribute", e, t)
        }
        ,
        t.assertImportDeclaration = function(e, t) {
            a("ImportDeclaration", e, t)
        }
        ,
        t.assertImportDefaultSpecifier = function(e, t) {
            a("ImportDefaultSpecifier", e, t)
        }
        ,
        t.assertImportNamespaceSpecifier = function(e, t) {
            a("ImportNamespaceSpecifier", e, t)
        }
        ,
        t.assertImportSpecifier = function(e, t) {
            a("ImportSpecifier", e, t)
        }
        ,
        t.assertIndexedAccessType = function(e, t) {
            a("IndexedAccessType", e, t)
        }
        ,
        t.assertInferredPredicate = function(e, t) {
            a("InferredPredicate", e, t)
        }
        ,
        t.assertInterfaceDeclaration = function(e, t) {
            a("InterfaceDeclaration", e, t)
        }
        ,
        t.assertInterfaceExtends = function(e, t) {
            a("InterfaceExtends", e, t)
        }
        ,
        t.assertInterfaceTypeAnnotation = function(e, t) {
            a("InterfaceTypeAnnotation", e, t)
        }
        ,
        t.assertInterpreterDirective = function(e, t) {
            a("InterpreterDirective", e, t)
        }
        ,
        t.assertIntersectionTypeAnnotation = function(e, t) {
            a("IntersectionTypeAnnotation", e, t)
        }
        ,
        t.assertJSX = function(e, t) {
            a("JSX", e, t)
        }
        ,
        t.assertJSXAttribute = function(e, t) {
            a("JSXAttribute", e, t)
        }
        ,
        t.assertJSXClosingElement = function(e, t) {
            a("JSXClosingElement", e, t)
        }
        ,
        t.assertJSXClosingFragment = function(e, t) {
            a("JSXClosingFragment", e, t)
        }
        ,
        t.assertJSXElement = function(e, t) {
            a("JSXElement", e, t)
        }
        ,
        t.assertJSXEmptyExpression = function(e, t) {
            a("JSXEmptyExpression", e, t)
        }
        ,
        t.assertJSXExpressionContainer = function(e, t) {
            a("JSXExpressionContainer", e, t)
        }
        ,
        t.assertJSXFragment = function(e, t) {
            a("JSXFragment", e, t)
        }
        ,
        t.assertJSXIdentifier = function(e, t) {
            a("JSXIdentifier", e, t)
        }
        ,
        t.assertJSXMemberExpression = function(e, t) {
            a("JSXMemberExpression", e, t)
        }
        ,
        t.assertJSXNamespacedName = function(e, t) {
            a("JSXNamespacedName", e, t)
        }
        ,
        t.assertJSXOpeningElement = function(e, t) {
            a("JSXOpeningElement", e, t)
        }
        ,
        t.assertJSXOpeningFragment = function(e, t) {
            a("JSXOpeningFragment", e, t)
        }
        ,
        t.assertJSXSpreadAttribute = function(e, t) {
            a("JSXSpreadAttribute", e, t)
        }
        ,
        t.assertJSXSpreadChild = function(e, t) {
            a("JSXSpreadChild", e, t)
        }
        ,
        t.assertJSXText = function(e, t) {
            a("JSXText", e, t)
        }
        ,
        t.assertLVal = function(e, t) {
            a("LVal", e, t)
        }
        ,
        t.assertLabeledStatement = function(e, t) {
            a("LabeledStatement", e, t)
        }
        ,
        t.assertLiteral = function(e, t) {
            a("Literal", e, t)
        }
        ,
        t.assertLogicalExpression = function(e, t) {
            a("LogicalExpression", e, t)
        }
        ,
        t.assertLoop = function(e, t) {
            a("Loop", e, t)
        }
        ,
        t.assertMemberExpression = function(e, t) {
            a("MemberExpression", e, t)
        }
        ,
        t.assertMetaProperty = function(e, t) {
            a("MetaProperty", e, t)
        }
        ,
        t.assertMethod = function(e, t) {
            a("Method", e, t)
        }
        ,
        t.assertMiscellaneous = function(e, t) {
            a("Miscellaneous", e, t)
        }
        ,
        t.assertMixedTypeAnnotation = function(e, t) {
            a("MixedTypeAnnotation", e, t)
        }
        ,
        t.assertModuleDeclaration = function(e, t) {
            a("ModuleDeclaration", e, t)
        }
        ,
        t.assertModuleExpression = function(e, t) {
            a("ModuleExpression", e, t)
        }
        ,
        t.assertModuleSpecifier = function(e, t) {
            a("ModuleSpecifier", e, t)
        }
        ,
        t.assertNewExpression = function(e, t) {
            a("NewExpression", e, t)
        }
        ,
        t.assertNoop = function(e, t) {
            a("Noop", e, t)
        }
        ,
        t.assertNullLiteral = function(e, t) {
            a("NullLiteral", e, t)
        }
        ,
        t.assertNullLiteralTypeAnnotation = function(e, t) {
            a("NullLiteralTypeAnnotation", e, t)
        }
        ,
        t.assertNullableTypeAnnotation = function(e, t) {
            a("NullableTypeAnnotation", e, t)
        }
        ,
        t.assertNumberLiteral = function(e, t) {
            console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),
            a("NumberLiteral", e, t)
        }
        ,
        t.assertNumberLiteralTypeAnnotation = function(e, t) {
            a("NumberLiteralTypeAnnotation", e, t)
        }
        ,
        t.assertNumberTypeAnnotation = function(e, t) {
            a("NumberTypeAnnotation", e, t)
        }
        ,
        t.assertNumericLiteral = function(e, t) {
            a("NumericLiteral", e, t)
        }
        ,
        t.assertObjectExpression = function(e, t) {
            a("ObjectExpression", e, t)
        }
        ,
        t.assertObjectMember = function(e, t) {
            a("ObjectMember", e, t)
        }
        ,
        t.assertObjectMethod = function(e, t) {
            a("ObjectMethod", e, t)
        }
        ,
        t.assertObjectPattern = function(e, t) {
            a("ObjectPattern", e, t)
        }
        ,
        t.assertObjectProperty = function(e, t) {
            a("ObjectProperty", e, t)
        }
        ,
        t.assertObjectTypeAnnotation = function(e, t) {
            a("ObjectTypeAnnotation", e, t)
        }
        ,
        t.assertObjectTypeCallProperty = function(e, t) {
            a("ObjectTypeCallProperty", e, t)
        }
        ,
        t.assertObjectTypeIndexer = function(e, t) {
            a("ObjectTypeIndexer", e, t)
        }
        ,
        t.assertObjectTypeInternalSlot = function(e, t) {
            a("ObjectTypeInternalSlot", e, t)
        }
        ,
        t.assertObjectTypeProperty = function(e, t) {
            a("ObjectTypeProperty", e, t)
        }
        ,
        t.assertObjectTypeSpreadProperty = function(e, t) {
            a("ObjectTypeSpreadProperty", e, t)
        }
        ,
        t.assertOpaqueType = function(e, t) {
            a("OpaqueType", e, t)
        }
        ,
        t.assertOptionalCallExpression = function(e, t) {
            a("OptionalCallExpression", e, t)
        }
        ,
        t.assertOptionalIndexedAccessType = function(e, t) {
            a("OptionalIndexedAccessType", e, t)
        }
        ,
        t.assertOptionalMemberExpression = function(e, t) {
            a("OptionalMemberExpression", e, t)
        }
        ,
        t.assertParenthesizedExpression = function(e, t) {
            a("ParenthesizedExpression", e, t)
        }
        ,
        t.assertPattern = function(e, t) {
            a("Pattern", e, t)
        }
        ,
        t.assertPatternLike = function(e, t) {
            a("PatternLike", e, t)
        }
        ,
        t.assertPipelineBareFunction = function(e, t) {
            a("PipelineBareFunction", e, t)
        }
        ,
        t.assertPipelinePrimaryTopicReference = function(e, t) {
            a("PipelinePrimaryTopicReference", e, t)
        }
        ,
        t.assertPipelineTopicExpression = function(e, t) {
            a("PipelineTopicExpression", e, t)
        }
        ,
        t.assertPlaceholder = function(e, t) {
            a("Placeholder", e, t)
        }
        ,
        t.assertPrivate = function(e, t) {
            a("Private", e, t)
        }
        ,
        t.assertPrivateName = function(e, t) {
            a("PrivateName", e, t)
        }
        ,
        t.assertProgram = function(e, t) {
            a("Program", e, t)
        }
        ,
        t.assertProperty = function(e, t) {
            a("Property", e, t)
        }
        ,
        t.assertPureish = function(e, t) {
            a("Pureish", e, t)
        }
        ,
        t.assertQualifiedTypeIdentifier = function(e, t) {
            a("QualifiedTypeIdentifier", e, t)
        }
        ,
        t.assertRecordExpression = function(e, t) {
            a("RecordExpression", e, t)
        }
        ,
        t.assertRegExpLiteral = function(e, t) {
            a("RegExpLiteral", e, t)
        }
        ,
        t.assertRegexLiteral = function(e, t) {
            console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),
            a("RegexLiteral", e, t)
        }
        ,
        t.assertRestElement = function(e, t) {
            a("RestElement", e, t)
        }
        ,
        t.assertRestProperty = function(e, t) {
            console.trace("The node type RestProperty has been renamed to RestElement"),
            a("RestProperty", e, t)
        }
        ,
        t.assertReturnStatement = function(e, t) {
            a("ReturnStatement", e, t)
        }
        ,
        t.assertScopable = function(e, t) {
            a("Scopable", e, t)
        }
        ,
        t.assertSequenceExpression = function(e, t) {
            a("SequenceExpression", e, t)
        }
        ,
        t.assertSpreadElement = function(e, t) {
            a("SpreadElement", e, t)
        }
        ,
        t.assertSpreadProperty = function(e, t) {
            console.trace("The node type SpreadProperty has been renamed to SpreadElement"),
            a("SpreadProperty", e, t)
        }
        ,
        t.assertStandardized = function(e, t) {
            a("Standardized", e, t)
        }
        ,
        t.assertStatement = function(e, t) {
            a("Statement", e, t)
        }
        ,
        t.assertStaticBlock = function(e, t) {
            a("StaticBlock", e, t)
        }
        ,
        t.assertStringLiteral = function(e, t) {
            a("StringLiteral", e, t)
        }
        ,
        t.assertStringLiteralTypeAnnotation = function(e, t) {
            a("StringLiteralTypeAnnotation", e, t)
        }
        ,
        t.assertStringTypeAnnotation = function(e, t) {
            a("StringTypeAnnotation", e, t)
        }
        ,
        t.assertSuper = function(e, t) {
            a("Super", e, t)
        }
        ,
        t.assertSwitchCase = function(e, t) {
            a("SwitchCase", e, t)
        }
        ,
        t.assertSwitchStatement = function(e, t) {
            a("SwitchStatement", e, t)
        }
        ,
        t.assertSymbolTypeAnnotation = function(e, t) {
            a("SymbolTypeAnnotation", e, t)
        }
        ,
        t.assertTSAnyKeyword = function(e, t) {
            a("TSAnyKeyword", e, t)
        }
        ,
        t.assertTSArrayType = function(e, t) {
            a("TSArrayType", e, t)
        }
        ,
        t.assertTSAsExpression = function(e, t) {
            a("TSAsExpression", e, t)
        }
        ,
        t.assertTSBaseType = function(e, t) {
            a("TSBaseType", e, t)
        }
        ,
        t.assertTSBigIntKeyword = function(e, t) {
            a("TSBigIntKeyword", e, t)
        }
        ,
        t.assertTSBooleanKeyword = function(e, t) {
            a("TSBooleanKeyword", e, t)
        }
        ,
        t.assertTSCallSignatureDeclaration = function(e, t) {
            a("TSCallSignatureDeclaration", e, t)
        }
        ,
        t.assertTSConditionalType = function(e, t) {
            a("TSConditionalType", e, t)
        }
        ,
        t.assertTSConstructSignatureDeclaration = function(e, t) {
            a("TSConstructSignatureDeclaration", e, t)
        }
        ,
        t.assertTSConstructorType = function(e, t) {
            a("TSConstructorType", e, t)
        }
        ,
        t.assertTSDeclareFunction = function(e, t) {
            a("TSDeclareFunction", e, t)
        }
        ,
        t.assertTSDeclareMethod = function(e, t) {
            a("TSDeclareMethod", e, t)
        }
        ,
        t.assertTSEntityName = function(e, t) {
            a("TSEntityName", e, t)
        }
        ,
        t.assertTSEnumDeclaration = function(e, t) {
            a("TSEnumDeclaration", e, t)
        }
        ,
        t.assertTSEnumMember = function(e, t) {
            a("TSEnumMember", e, t)
        }
        ,
        t.assertTSExportAssignment = function(e, t) {
            a("TSExportAssignment", e, t)
        }
        ,
        t.assertTSExpressionWithTypeArguments = function(e, t) {
            a("TSExpressionWithTypeArguments", e, t)
        }
        ,
        t.assertTSExternalModuleReference = function(e, t) {
            a("TSExternalModuleReference", e, t)
        }
        ,
        t.assertTSFunctionType = function(e, t) {
            a("TSFunctionType", e, t)
        }
        ,
        t.assertTSImportEqualsDeclaration = function(e, t) {
            a("TSImportEqualsDeclaration", e, t)
        }
        ,
        t.assertTSImportType = function(e, t) {
            a("TSImportType", e, t)
        }
        ,
        t.assertTSIndexSignature = function(e, t) {
            a("TSIndexSignature", e, t)
        }
        ,
        t.assertTSIndexedAccessType = function(e, t) {
            a("TSIndexedAccessType", e, t)
        }
        ,
        t.assertTSInferType = function(e, t) {
            a("TSInferType", e, t)
        }
        ,
        t.assertTSInterfaceBody = function(e, t) {
            a("TSInterfaceBody", e, t)
        }
        ,
        t.assertTSInterfaceDeclaration = function(e, t) {
            a("TSInterfaceDeclaration", e, t)
        }
        ,
        t.assertTSIntersectionType = function(e, t) {
            a("TSIntersectionType", e, t)
        }
        ,
        t.assertTSIntrinsicKeyword = function(e, t) {
            a("TSIntrinsicKeyword", e, t)
        }
        ,
        t.assertTSLiteralType = function(e, t) {
            a("TSLiteralType", e, t)
        }
        ,
        t.assertTSMappedType = function(e, t) {
            a("TSMappedType", e, t)
        }
        ,
        t.assertTSMethodSignature = function(e, t) {
            a("TSMethodSignature", e, t)
        }
        ,
        t.assertTSModuleBlock = function(e, t) {
            a("TSModuleBlock", e, t)
        }
        ,
        t.assertTSModuleDeclaration = function(e, t) {
            a("TSModuleDeclaration", e, t)
        }
        ,
        t.assertTSNamedTupleMember = function(e, t) {
            a("TSNamedTupleMember", e, t)
        }
        ,
        t.assertTSNamespaceExportDeclaration = function(e, t) {
            a("TSNamespaceExportDeclaration", e, t)
        }
        ,
        t.assertTSNeverKeyword = function(e, t) {
            a("TSNeverKeyword", e, t)
        }
        ,
        t.assertTSNonNullExpression = function(e, t) {
            a("TSNonNullExpression", e, t)
        }
        ,
        t.assertTSNullKeyword = function(e, t) {
            a("TSNullKeyword", e, t)
        }
        ,
        t.assertTSNumberKeyword = function(e, t) {
            a("TSNumberKeyword", e, t)
        }
        ,
        t.assertTSObjectKeyword = function(e, t) {
            a("TSObjectKeyword", e, t)
        }
        ,
        t.assertTSOptionalType = function(e, t) {
            a("TSOptionalType", e, t)
        }
        ,
        t.assertTSParameterProperty = function(e, t) {
            a("TSParameterProperty", e, t)
        }
        ,
        t.assertTSParenthesizedType = function(e, t) {
            a("TSParenthesizedType", e, t)
        }
        ,
        t.assertTSPropertySignature = function(e, t) {
            a("TSPropertySignature", e, t)
        }
        ,
        t.assertTSQualifiedName = function(e, t) {
            a("TSQualifiedName", e, t)
        }
        ,
        t.assertTSRestType = function(e, t) {
            a("TSRestType", e, t)
        }
        ,
        t.assertTSStringKeyword = function(e, t) {
            a("TSStringKeyword", e, t)
        }
        ,
        t.assertTSSymbolKeyword = function(e, t) {
            a("TSSymbolKeyword", e, t)
        }
        ,
        t.assertTSThisType = function(e, t) {
            a("TSThisType", e, t)
        }
        ,
        t.assertTSTupleType = function(e, t) {
            a("TSTupleType", e, t)
        }
        ,
        t.assertTSType = function(e, t) {
            a("TSType", e, t)
        }
        ,
        t.assertTSTypeAliasDeclaration = function(e, t) {
            a("TSTypeAliasDeclaration", e, t)
        }
        ,
        t.assertTSTypeAnnotation = function(e, t) {
            a("TSTypeAnnotation", e, t)
        }
        ,
        t.assertTSTypeAssertion = function(e, t) {
            a("TSTypeAssertion", e, t)
        }
        ,
        t.assertTSTypeElement = function(e, t) {
            a("TSTypeElement", e, t)
        }
        ,
        t.assertTSTypeLiteral = function(e, t) {
            a("TSTypeLiteral", e, t)
        }
        ,
        t.assertTSTypeOperator = function(e, t) {
            a("TSTypeOperator", e, t)
        }
        ,
        t.assertTSTypeParameter = function(e, t) {
            a("TSTypeParameter", e, t)
        }
        ,
        t.assertTSTypeParameterDeclaration = function(e, t) {
            a("TSTypeParameterDeclaration", e, t)
        }
        ,
        t.assertTSTypeParameterInstantiation = function(e, t) {
            a("TSTypeParameterInstantiation", e, t)
        }
        ,
        t.assertTSTypePredicate = function(e, t) {
            a("TSTypePredicate", e, t)
        }
        ,
        t.assertTSTypeQuery = function(e, t) {
            a("TSTypeQuery", e, t)
        }
        ,
        t.assertTSTypeReference = function(e, t) {
            a("TSTypeReference", e, t)
        }
        ,
        t.assertTSUndefinedKeyword = function(e, t) {
            a("TSUndefinedKeyword", e, t)
        }
        ,
        t.assertTSUnionType = function(e, t) {
            a("TSUnionType", e, t)
        }
        ,
        t.assertTSUnknownKeyword = function(e, t) {
            a("TSUnknownKeyword", e, t)
        }
        ,
        t.assertTSVoidKeyword = function(e, t) {
            a("TSVoidKeyword", e, t)
        }
        ,
        t.assertTaggedTemplateExpression = function(e, t) {
            a("TaggedTemplateExpression", e, t)
        }
        ,
        t.assertTemplateElement = function(e, t) {
            a("TemplateElement", e, t)
        }
        ,
        t.assertTemplateLiteral = function(e, t) {
            a("TemplateLiteral", e, t)
        }
        ,
        t.assertTerminatorless = function(e, t) {
            a("Terminatorless", e, t)
        }
        ,
        t.assertThisExpression = function(e, t) {
            a("ThisExpression", e, t)
        }
        ,
        t.assertThisTypeAnnotation = function(e, t) {
            a("ThisTypeAnnotation", e, t)
        }
        ,
        t.assertThrowStatement = function(e, t) {
            a("ThrowStatement", e, t)
        }
        ,
        t.assertTopicReference = function(e, t) {
            a("TopicReference", e, t)
        }
        ,
        t.assertTryStatement = function(e, t) {
            a("TryStatement", e, t)
        }
        ,
        t.assertTupleExpression = function(e, t) {
            a("TupleExpression", e, t)
        }
        ,
        t.assertTupleTypeAnnotation = function(e, t) {
            a("TupleTypeAnnotation", e, t)
        }
        ,
        t.assertTypeAlias = function(e, t) {
            a("TypeAlias", e, t)
        }
        ,
        t.assertTypeAnnotation = function(e, t) {
            a("TypeAnnotation", e, t)
        }
        ,
        t.assertTypeCastExpression = function(e, t) {
            a("TypeCastExpression", e, t)
        }
        ,
        t.assertTypeParameter = function(e, t) {
            a("TypeParameter", e, t)
        }
        ,
        t.assertTypeParameterDeclaration = function(e, t) {
            a("TypeParameterDeclaration", e, t)
        }
        ,
        t.assertTypeParameterInstantiation = function(e, t) {
            a("TypeParameterInstantiation", e, t)
        }
        ,
        t.assertTypeScript = function(e, t) {
            a("TypeScript", e, t)
        }
        ,
        t.assertTypeofTypeAnnotation = function(e, t) {
            a("TypeofTypeAnnotation", e, t)
        }
        ,
        t.assertUnaryExpression = function(e, t) {
            a("UnaryExpression", e, t)
        }
        ,
        t.assertUnaryLike = function(e, t) {
            a("UnaryLike", e, t)
        }
        ,
        t.assertUnionTypeAnnotation = function(e, t) {
            a("UnionTypeAnnotation", e, t)
        }
        ,
        t.assertUpdateExpression = function(e, t) {
            a("UpdateExpression", e, t)
        }
        ,
        t.assertUserWhitespacable = function(e, t) {
            a("UserWhitespacable", e, t)
        }
        ,
        t.assertV8IntrinsicIdentifier = function(e, t) {
            a("V8IntrinsicIdentifier", e, t)
        }
        ,
        t.assertVariableDeclaration = function(e, t) {
            a("VariableDeclaration", e, t)
        }
        ,
        t.assertVariableDeclarator = function(e, t) {
            a("VariableDeclarator", e, t)
        }
        ,
        t.assertVariance = function(e, t) {
            a("Variance", e, t)
        }
        ,
        t.assertVoidTypeAnnotation = function(e, t) {
            a("VoidTypeAnnotation", e, t)
        }
        ,
        t.assertWhile = function(e, t) {
            a("While", e, t)
        }
        ,
        t.assertWhileStatement = function(e, t) {
            a("WhileStatement", e, t)
        }
        ,
        t.assertWithStatement = function(e, t) {
            a("WithStatement", e, t)
        }
        ,
        t.assertYieldExpression = function(e, t) {
            a("YieldExpression", e, t)
        }
        ;
        var r = n(2678);
        function a(e, t, n) {
            if (!(0,
            r.default)(e, t, n))
                throw new Error('Expected type "'.concat(e, '" with option ').concat(JSON.stringify(n), ", ") + 'but instead got "'.concat(t.type, '".'))
        }
    },
    3158: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2641)
          , a = function(e) {
            switch (e) {
            case "string":
                return (0,
                r.stringTypeAnnotation)();
            case "number":
                return (0,
                r.numberTypeAnnotation)();
            case "undefined":
                return (0,
                r.voidTypeAnnotation)();
            case "boolean":
                return (0,
                r.booleanTypeAnnotation)();
            case "function":
                return (0,
                r.genericTypeAnnotation)((0,
                r.identifier)("Function"));
            case "object":
                return (0,
                r.genericTypeAnnotation)((0,
                r.identifier)("Object"));
            case "symbol":
                return (0,
                r.genericTypeAnnotation)((0,
                r.identifier)("Symbol"));
            case "bigint":
                return (0,
                r.anyTypeAnnotation)()
            }
            throw new Error("Invalid typeof value: " + e)
        };
        t.default = a
    },
    3159: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = (0,
            a.default)(e);
            return 1 === t.length ? t[0] : (0,
            r.unionTypeAnnotation)(t)
        }
        ;
        var r = n(2641)
          , a = n(2825)
    },
    3160: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = e.map((function(e) {
                return e.typeAnnotation
            }
            ))
              , n = (0,
            a.default)(t);
            return 1 === n.length ? n[0] : (0,
            r.tsUnionType)(n)
        }
        ;
        var r = n(2641)
          , a = n(3161)
    },
    3161: function(e, t, n) {
        "use strict";
        var r = n(806);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            for (var t = {}, n = {}, i = new Set, o = [], s = 0; s < e.length; s++) {
                var u = e[s];
                if (u && !(o.indexOf(u) >= 0)) {
                    if ((0,
                    a.isTSAnyKeyword)(u))
                        return [u];
                    (0,
                    a.isTSBaseType)(u) ? n[u.type] = u : (0,
                    a.isTSUnionType)(u) ? i.has(u.types) || (e.push.apply(e, r(u.types)),
                    i.add(u.types)) : o.push(u)
                }
            }
            for (var l = 0, p = Object.keys(n); l < p.length; l++) {
                var f = p[l];
                o.push(n[f])
            }
            for (var d = 0, c = Object.keys(t); d < c.length; d++) {
                var y = c[d];
                o.push(t[y])
            }
            return o
        }
        ;
        var a = n(2637)
    },
    3162: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AnyTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.anyTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ArgumentPlaceholder", {
            enumerable: !0,
            get: function() {
                return r.argumentPlaceholder
            }
        }),
        Object.defineProperty(t, "ArrayExpression", {
            enumerable: !0,
            get: function() {
                return r.arrayExpression
            }
        }),
        Object.defineProperty(t, "ArrayPattern", {
            enumerable: !0,
            get: function() {
                return r.arrayPattern
            }
        }),
        Object.defineProperty(t, "ArrayTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.arrayTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ArrowFunctionExpression", {
            enumerable: !0,
            get: function() {
                return r.arrowFunctionExpression
            }
        }),
        Object.defineProperty(t, "AssignmentExpression", {
            enumerable: !0,
            get: function() {
                return r.assignmentExpression
            }
        }),
        Object.defineProperty(t, "AssignmentPattern", {
            enumerable: !0,
            get: function() {
                return r.assignmentPattern
            }
        }),
        Object.defineProperty(t, "AwaitExpression", {
            enumerable: !0,
            get: function() {
                return r.awaitExpression
            }
        }),
        Object.defineProperty(t, "BigIntLiteral", {
            enumerable: !0,
            get: function() {
                return r.bigIntLiteral
            }
        }),
        Object.defineProperty(t, "BinaryExpression", {
            enumerable: !0,
            get: function() {
                return r.binaryExpression
            }
        }),
        Object.defineProperty(t, "BindExpression", {
            enumerable: !0,
            get: function() {
                return r.bindExpression
            }
        }),
        Object.defineProperty(t, "BlockStatement", {
            enumerable: !0,
            get: function() {
                return r.blockStatement
            }
        }),
        Object.defineProperty(t, "BooleanLiteral", {
            enumerable: !0,
            get: function() {
                return r.booleanLiteral
            }
        }),
        Object.defineProperty(t, "BooleanLiteralTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.booleanLiteralTypeAnnotation
            }
        }),
        Object.defineProperty(t, "BooleanTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.booleanTypeAnnotation
            }
        }),
        Object.defineProperty(t, "BreakStatement", {
            enumerable: !0,
            get: function() {
                return r.breakStatement
            }
        }),
        Object.defineProperty(t, "CallExpression", {
            enumerable: !0,
            get: function() {
                return r.callExpression
            }
        }),
        Object.defineProperty(t, "CatchClause", {
            enumerable: !0,
            get: function() {
                return r.catchClause
            }
        }),
        Object.defineProperty(t, "ClassBody", {
            enumerable: !0,
            get: function() {
                return r.classBody
            }
        }),
        Object.defineProperty(t, "ClassDeclaration", {
            enumerable: !0,
            get: function() {
                return r.classDeclaration
            }
        }),
        Object.defineProperty(t, "ClassExpression", {
            enumerable: !0,
            get: function() {
                return r.classExpression
            }
        }),
        Object.defineProperty(t, "ClassImplements", {
            enumerable: !0,
            get: function() {
                return r.classImplements
            }
        }),
        Object.defineProperty(t, "ClassMethod", {
            enumerable: !0,
            get: function() {
                return r.classMethod
            }
        }),
        Object.defineProperty(t, "ClassPrivateMethod", {
            enumerable: !0,
            get: function() {
                return r.classPrivateMethod
            }
        }),
        Object.defineProperty(t, "ClassPrivateProperty", {
            enumerable: !0,
            get: function() {
                return r.classPrivateProperty
            }
        }),
        Object.defineProperty(t, "ClassProperty", {
            enumerable: !0,
            get: function() {
                return r.classProperty
            }
        }),
        Object.defineProperty(t, "ConditionalExpression", {
            enumerable: !0,
            get: function() {
                return r.conditionalExpression
            }
        }),
        Object.defineProperty(t, "ContinueStatement", {
            enumerable: !0,
            get: function() {
                return r.continueStatement
            }
        }),
        Object.defineProperty(t, "DebuggerStatement", {
            enumerable: !0,
            get: function() {
                return r.debuggerStatement
            }
        }),
        Object.defineProperty(t, "DecimalLiteral", {
            enumerable: !0,
            get: function() {
                return r.decimalLiteral
            }
        }),
        Object.defineProperty(t, "DeclareClass", {
            enumerable: !0,
            get: function() {
                return r.declareClass
            }
        }),
        Object.defineProperty(t, "DeclareExportAllDeclaration", {
            enumerable: !0,
            get: function() {
                return r.declareExportAllDeclaration
            }
        }),
        Object.defineProperty(t, "DeclareExportDeclaration", {
            enumerable: !0,
            get: function() {
                return r.declareExportDeclaration
            }
        }),
        Object.defineProperty(t, "DeclareFunction", {
            enumerable: !0,
            get: function() {
                return r.declareFunction
            }
        }),
        Object.defineProperty(t, "DeclareInterface", {
            enumerable: !0,
            get: function() {
                return r.declareInterface
            }
        }),
        Object.defineProperty(t, "DeclareModule", {
            enumerable: !0,
            get: function() {
                return r.declareModule
            }
        }),
        Object.defineProperty(t, "DeclareModuleExports", {
            enumerable: !0,
            get: function() {
                return r.declareModuleExports
            }
        }),
        Object.defineProperty(t, "DeclareOpaqueType", {
            enumerable: !0,
            get: function() {
                return r.declareOpaqueType
            }
        }),
        Object.defineProperty(t, "DeclareTypeAlias", {
            enumerable: !0,
            get: function() {
                return r.declareTypeAlias
            }
        }),
        Object.defineProperty(t, "DeclareVariable", {
            enumerable: !0,
            get: function() {
                return r.declareVariable
            }
        }),
        Object.defineProperty(t, "DeclaredPredicate", {
            enumerable: !0,
            get: function() {
                return r.declaredPredicate
            }
        }),
        Object.defineProperty(t, "Decorator", {
            enumerable: !0,
            get: function() {
                return r.decorator
            }
        }),
        Object.defineProperty(t, "Directive", {
            enumerable: !0,
            get: function() {
                return r.directive
            }
        }),
        Object.defineProperty(t, "DirectiveLiteral", {
            enumerable: !0,
            get: function() {
                return r.directiveLiteral
            }
        }),
        Object.defineProperty(t, "DoExpression", {
            enumerable: !0,
            get: function() {
                return r.doExpression
            }
        }),
        Object.defineProperty(t, "DoWhileStatement", {
            enumerable: !0,
            get: function() {
                return r.doWhileStatement
            }
        }),
        Object.defineProperty(t, "EmptyStatement", {
            enumerable: !0,
            get: function() {
                return r.emptyStatement
            }
        }),
        Object.defineProperty(t, "EmptyTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.emptyTypeAnnotation
            }
        }),
        Object.defineProperty(t, "EnumBooleanBody", {
            enumerable: !0,
            get: function() {
                return r.enumBooleanBody
            }
        }),
        Object.defineProperty(t, "EnumBooleanMember", {
            enumerable: !0,
            get: function() {
                return r.enumBooleanMember
            }
        }),
        Object.defineProperty(t, "EnumDeclaration", {
            enumerable: !0,
            get: function() {
                return r.enumDeclaration
            }
        }),
        Object.defineProperty(t, "EnumDefaultedMember", {
            enumerable: !0,
            get: function() {
                return r.enumDefaultedMember
            }
        }),
        Object.defineProperty(t, "EnumNumberBody", {
            enumerable: !0,
            get: function() {
                return r.enumNumberBody
            }
        }),
        Object.defineProperty(t, "EnumNumberMember", {
            enumerable: !0,
            get: function() {
                return r.enumNumberMember
            }
        }),
        Object.defineProperty(t, "EnumStringBody", {
            enumerable: !0,
            get: function() {
                return r.enumStringBody
            }
        }),
        Object.defineProperty(t, "EnumStringMember", {
            enumerable: !0,
            get: function() {
                return r.enumStringMember
            }
        }),
        Object.defineProperty(t, "EnumSymbolBody", {
            enumerable: !0,
            get: function() {
                return r.enumSymbolBody
            }
        }),
        Object.defineProperty(t, "ExistsTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.existsTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ExportAllDeclaration", {
            enumerable: !0,
            get: function() {
                return r.exportAllDeclaration
            }
        }),
        Object.defineProperty(t, "ExportDefaultDeclaration", {
            enumerable: !0,
            get: function() {
                return r.exportDefaultDeclaration
            }
        }),
        Object.defineProperty(t, "ExportDefaultSpecifier", {
            enumerable: !0,
            get: function() {
                return r.exportDefaultSpecifier
            }
        }),
        Object.defineProperty(t, "ExportNamedDeclaration", {
            enumerable: !0,
            get: function() {
                return r.exportNamedDeclaration
            }
        }),
        Object.defineProperty(t, "ExportNamespaceSpecifier", {
            enumerable: !0,
            get: function() {
                return r.exportNamespaceSpecifier
            }
        }),
        Object.defineProperty(t, "ExportSpecifier", {
            enumerable: !0,
            get: function() {
                return r.exportSpecifier
            }
        }),
        Object.defineProperty(t, "ExpressionStatement", {
            enumerable: !0,
            get: function() {
                return r.expressionStatement
            }
        }),
        Object.defineProperty(t, "File", {
            enumerable: !0,
            get: function() {
                return r.file
            }
        }),
        Object.defineProperty(t, "ForInStatement", {
            enumerable: !0,
            get: function() {
                return r.forInStatement
            }
        }),
        Object.defineProperty(t, "ForOfStatement", {
            enumerable: !0,
            get: function() {
                return r.forOfStatement
            }
        }),
        Object.defineProperty(t, "ForStatement", {
            enumerable: !0,
            get: function() {
                return r.forStatement
            }
        }),
        Object.defineProperty(t, "FunctionDeclaration", {
            enumerable: !0,
            get: function() {
                return r.functionDeclaration
            }
        }),
        Object.defineProperty(t, "FunctionExpression", {
            enumerable: !0,
            get: function() {
                return r.functionExpression
            }
        }),
        Object.defineProperty(t, "FunctionTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.functionTypeAnnotation
            }
        }),
        Object.defineProperty(t, "FunctionTypeParam", {
            enumerable: !0,
            get: function() {
                return r.functionTypeParam
            }
        }),
        Object.defineProperty(t, "GenericTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.genericTypeAnnotation
            }
        }),
        Object.defineProperty(t, "Identifier", {
            enumerable: !0,
            get: function() {
                return r.identifier
            }
        }),
        Object.defineProperty(t, "IfStatement", {
            enumerable: !0,
            get: function() {
                return r.ifStatement
            }
        }),
        Object.defineProperty(t, "Import", {
            enumerable: !0,
            get: function() {
                return r.import
            }
        }),
        Object.defineProperty(t, "ImportAttribute", {
            enumerable: !0,
            get: function() {
                return r.importAttribute
            }
        }),
        Object.defineProperty(t, "ImportDeclaration", {
            enumerable: !0,
            get: function() {
                return r.importDeclaration
            }
        }),
        Object.defineProperty(t, "ImportDefaultSpecifier", {
            enumerable: !0,
            get: function() {
                return r.importDefaultSpecifier
            }
        }),
        Object.defineProperty(t, "ImportNamespaceSpecifier", {
            enumerable: !0,
            get: function() {
                return r.importNamespaceSpecifier
            }
        }),
        Object.defineProperty(t, "ImportSpecifier", {
            enumerable: !0,
            get: function() {
                return r.importSpecifier
            }
        }),
        Object.defineProperty(t, "IndexedAccessType", {
            enumerable: !0,
            get: function() {
                return r.indexedAccessType
            }
        }),
        Object.defineProperty(t, "InferredPredicate", {
            enumerable: !0,
            get: function() {
                return r.inferredPredicate
            }
        }),
        Object.defineProperty(t, "InterfaceDeclaration", {
            enumerable: !0,
            get: function() {
                return r.interfaceDeclaration
            }
        }),
        Object.defineProperty(t, "InterfaceExtends", {
            enumerable: !0,
            get: function() {
                return r.interfaceExtends
            }
        }),
        Object.defineProperty(t, "InterfaceTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.interfaceTypeAnnotation
            }
        }),
        Object.defineProperty(t, "InterpreterDirective", {
            enumerable: !0,
            get: function() {
                return r.interpreterDirective
            }
        }),
        Object.defineProperty(t, "IntersectionTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.intersectionTypeAnnotation
            }
        }),
        Object.defineProperty(t, "JSXAttribute", {
            enumerable: !0,
            get: function() {
                return r.jsxAttribute
            }
        }),
        Object.defineProperty(t, "JSXClosingElement", {
            enumerable: !0,
            get: function() {
                return r.jsxClosingElement
            }
        }),
        Object.defineProperty(t, "JSXClosingFragment", {
            enumerable: !0,
            get: function() {
                return r.jsxClosingFragment
            }
        }),
        Object.defineProperty(t, "JSXElement", {
            enumerable: !0,
            get: function() {
                return r.jsxElement
            }
        }),
        Object.defineProperty(t, "JSXEmptyExpression", {
            enumerable: !0,
            get: function() {
                return r.jsxEmptyExpression
            }
        }),
        Object.defineProperty(t, "JSXExpressionContainer", {
            enumerable: !0,
            get: function() {
                return r.jsxExpressionContainer
            }
        }),
        Object.defineProperty(t, "JSXFragment", {
            enumerable: !0,
            get: function() {
                return r.jsxFragment
            }
        }),
        Object.defineProperty(t, "JSXIdentifier", {
            enumerable: !0,
            get: function() {
                return r.jsxIdentifier
            }
        }),
        Object.defineProperty(t, "JSXMemberExpression", {
            enumerable: !0,
            get: function() {
                return r.jsxMemberExpression
            }
        }),
        Object.defineProperty(t, "JSXNamespacedName", {
            enumerable: !0,
            get: function() {
                return r.jsxNamespacedName
            }
        }),
        Object.defineProperty(t, "JSXOpeningElement", {
            enumerable: !0,
            get: function() {
                return r.jsxOpeningElement
            }
        }),
        Object.defineProperty(t, "JSXOpeningFragment", {
            enumerable: !0,
            get: function() {
                return r.jsxOpeningFragment
            }
        }),
        Object.defineProperty(t, "JSXSpreadAttribute", {
            enumerable: !0,
            get: function() {
                return r.jsxSpreadAttribute
            }
        }),
        Object.defineProperty(t, "JSXSpreadChild", {
            enumerable: !0,
            get: function() {
                return r.jsxSpreadChild
            }
        }),
        Object.defineProperty(t, "JSXText", {
            enumerable: !0,
            get: function() {
                return r.jsxText
            }
        }),
        Object.defineProperty(t, "LabeledStatement", {
            enumerable: !0,
            get: function() {
                return r.labeledStatement
            }
        }),
        Object.defineProperty(t, "LogicalExpression", {
            enumerable: !0,
            get: function() {
                return r.logicalExpression
            }
        }),
        Object.defineProperty(t, "MemberExpression", {
            enumerable: !0,
            get: function() {
                return r.memberExpression
            }
        }),
        Object.defineProperty(t, "MetaProperty", {
            enumerable: !0,
            get: function() {
                return r.metaProperty
            }
        }),
        Object.defineProperty(t, "MixedTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.mixedTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ModuleExpression", {
            enumerable: !0,
            get: function() {
                return r.moduleExpression
            }
        }),
        Object.defineProperty(t, "NewExpression", {
            enumerable: !0,
            get: function() {
                return r.newExpression
            }
        }),
        Object.defineProperty(t, "Noop", {
            enumerable: !0,
            get: function() {
                return r.noop
            }
        }),
        Object.defineProperty(t, "NullLiteral", {
            enumerable: !0,
            get: function() {
                return r.nullLiteral
            }
        }),
        Object.defineProperty(t, "NullLiteralTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.nullLiteralTypeAnnotation
            }
        }),
        Object.defineProperty(t, "NullableTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.nullableTypeAnnotation
            }
        }),
        Object.defineProperty(t, "NumberLiteral", {
            enumerable: !0,
            get: function() {
                return r.numberLiteral
            }
        }),
        Object.defineProperty(t, "NumberLiteralTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.numberLiteralTypeAnnotation
            }
        }),
        Object.defineProperty(t, "NumberTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.numberTypeAnnotation
            }
        }),
        Object.defineProperty(t, "NumericLiteral", {
            enumerable: !0,
            get: function() {
                return r.numericLiteral
            }
        }),
        Object.defineProperty(t, "ObjectExpression", {
            enumerable: !0,
            get: function() {
                return r.objectExpression
            }
        }),
        Object.defineProperty(t, "ObjectMethod", {
            enumerable: !0,
            get: function() {
                return r.objectMethod
            }
        }),
        Object.defineProperty(t, "ObjectPattern", {
            enumerable: !0,
            get: function() {
                return r.objectPattern
            }
        }),
        Object.defineProperty(t, "ObjectProperty", {
            enumerable: !0,
            get: function() {
                return r.objectProperty
            }
        }),
        Object.defineProperty(t, "ObjectTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.objectTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ObjectTypeCallProperty", {
            enumerable: !0,
            get: function() {
                return r.objectTypeCallProperty
            }
        }),
        Object.defineProperty(t, "ObjectTypeIndexer", {
            enumerable: !0,
            get: function() {
                return r.objectTypeIndexer
            }
        }),
        Object.defineProperty(t, "ObjectTypeInternalSlot", {
            enumerable: !0,
            get: function() {
                return r.objectTypeInternalSlot
            }
        }),
        Object.defineProperty(t, "ObjectTypeProperty", {
            enumerable: !0,
            get: function() {
                return r.objectTypeProperty
            }
        }),
        Object.defineProperty(t, "ObjectTypeSpreadProperty", {
            enumerable: !0,
            get: function() {
                return r.objectTypeSpreadProperty
            }
        }),
        Object.defineProperty(t, "OpaqueType", {
            enumerable: !0,
            get: function() {
                return r.opaqueType
            }
        }),
        Object.defineProperty(t, "OptionalCallExpression", {
            enumerable: !0,
            get: function() {
                return r.optionalCallExpression
            }
        }),
        Object.defineProperty(t, "OptionalIndexedAccessType", {
            enumerable: !0,
            get: function() {
                return r.optionalIndexedAccessType
            }
        }),
        Object.defineProperty(t, "OptionalMemberExpression", {
            enumerable: !0,
            get: function() {
                return r.optionalMemberExpression
            }
        }),
        Object.defineProperty(t, "ParenthesizedExpression", {
            enumerable: !0,
            get: function() {
                return r.parenthesizedExpression
            }
        }),
        Object.defineProperty(t, "PipelineBareFunction", {
            enumerable: !0,
            get: function() {
                return r.pipelineBareFunction
            }
        }),
        Object.defineProperty(t, "PipelinePrimaryTopicReference", {
            enumerable: !0,
            get: function() {
                return r.pipelinePrimaryTopicReference
            }
        }),
        Object.defineProperty(t, "PipelineTopicExpression", {
            enumerable: !0,
            get: function() {
                return r.pipelineTopicExpression
            }
        }),
        Object.defineProperty(t, "Placeholder", {
            enumerable: !0,
            get: function() {
                return r.placeholder
            }
        }),
        Object.defineProperty(t, "PrivateName", {
            enumerable: !0,
            get: function() {
                return r.privateName
            }
        }),
        Object.defineProperty(t, "Program", {
            enumerable: !0,
            get: function() {
                return r.program
            }
        }),
        Object.defineProperty(t, "QualifiedTypeIdentifier", {
            enumerable: !0,
            get: function() {
                return r.qualifiedTypeIdentifier
            }
        }),
        Object.defineProperty(t, "RecordExpression", {
            enumerable: !0,
            get: function() {
                return r.recordExpression
            }
        }),
        Object.defineProperty(t, "RegExpLiteral", {
            enumerable: !0,
            get: function() {
                return r.regExpLiteral
            }
        }),
        Object.defineProperty(t, "RegexLiteral", {
            enumerable: !0,
            get: function() {
                return r.regexLiteral
            }
        }),
        Object.defineProperty(t, "RestElement", {
            enumerable: !0,
            get: function() {
                return r.restElement
            }
        }),
        Object.defineProperty(t, "RestProperty", {
            enumerable: !0,
            get: function() {
                return r.restProperty
            }
        }),
        Object.defineProperty(t, "ReturnStatement", {
            enumerable: !0,
            get: function() {
                return r.returnStatement
            }
        }),
        Object.defineProperty(t, "SequenceExpression", {
            enumerable: !0,
            get: function() {
                return r.sequenceExpression
            }
        }),
        Object.defineProperty(t, "SpreadElement", {
            enumerable: !0,
            get: function() {
                return r.spreadElement
            }
        }),
        Object.defineProperty(t, "SpreadProperty", {
            enumerable: !0,
            get: function() {
                return r.spreadProperty
            }
        }),
        Object.defineProperty(t, "StaticBlock", {
            enumerable: !0,
            get: function() {
                return r.staticBlock
            }
        }),
        Object.defineProperty(t, "StringLiteral", {
            enumerable: !0,
            get: function() {
                return r.stringLiteral
            }
        }),
        Object.defineProperty(t, "StringLiteralTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.stringLiteralTypeAnnotation
            }
        }),
        Object.defineProperty(t, "StringTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.stringTypeAnnotation
            }
        }),
        Object.defineProperty(t, "Super", {
            enumerable: !0,
            get: function() {
                return r.super
            }
        }),
        Object.defineProperty(t, "SwitchCase", {
            enumerable: !0,
            get: function() {
                return r.switchCase
            }
        }),
        Object.defineProperty(t, "SwitchStatement", {
            enumerable: !0,
            get: function() {
                return r.switchStatement
            }
        }),
        Object.defineProperty(t, "SymbolTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.symbolTypeAnnotation
            }
        }),
        Object.defineProperty(t, "TSAnyKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsAnyKeyword
            }
        }),
        Object.defineProperty(t, "TSArrayType", {
            enumerable: !0,
            get: function() {
                return r.tsArrayType
            }
        }),
        Object.defineProperty(t, "TSAsExpression", {
            enumerable: !0,
            get: function() {
                return r.tsAsExpression
            }
        }),
        Object.defineProperty(t, "TSBigIntKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsBigIntKeyword
            }
        }),
        Object.defineProperty(t, "TSBooleanKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsBooleanKeyword
            }
        }),
        Object.defineProperty(t, "TSCallSignatureDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsCallSignatureDeclaration
            }
        }),
        Object.defineProperty(t, "TSConditionalType", {
            enumerable: !0,
            get: function() {
                return r.tsConditionalType
            }
        }),
        Object.defineProperty(t, "TSConstructSignatureDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsConstructSignatureDeclaration
            }
        }),
        Object.defineProperty(t, "TSConstructorType", {
            enumerable: !0,
            get: function() {
                return r.tsConstructorType
            }
        }),
        Object.defineProperty(t, "TSDeclareFunction", {
            enumerable: !0,
            get: function() {
                return r.tsDeclareFunction
            }
        }),
        Object.defineProperty(t, "TSDeclareMethod", {
            enumerable: !0,
            get: function() {
                return r.tsDeclareMethod
            }
        }),
        Object.defineProperty(t, "TSEnumDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsEnumDeclaration
            }
        }),
        Object.defineProperty(t, "TSEnumMember", {
            enumerable: !0,
            get: function() {
                return r.tsEnumMember
            }
        }),
        Object.defineProperty(t, "TSExportAssignment", {
            enumerable: !0,
            get: function() {
                return r.tsExportAssignment
            }
        }),
        Object.defineProperty(t, "TSExpressionWithTypeArguments", {
            enumerable: !0,
            get: function() {
                return r.tsExpressionWithTypeArguments
            }
        }),
        Object.defineProperty(t, "TSExternalModuleReference", {
            enumerable: !0,
            get: function() {
                return r.tsExternalModuleReference
            }
        }),
        Object.defineProperty(t, "TSFunctionType", {
            enumerable: !0,
            get: function() {
                return r.tsFunctionType
            }
        }),
        Object.defineProperty(t, "TSImportEqualsDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsImportEqualsDeclaration
            }
        }),
        Object.defineProperty(t, "TSImportType", {
            enumerable: !0,
            get: function() {
                return r.tsImportType
            }
        }),
        Object.defineProperty(t, "TSIndexSignature", {
            enumerable: !0,
            get: function() {
                return r.tsIndexSignature
            }
        }),
        Object.defineProperty(t, "TSIndexedAccessType", {
            enumerable: !0,
            get: function() {
                return r.tsIndexedAccessType
            }
        }),
        Object.defineProperty(t, "TSInferType", {
            enumerable: !0,
            get: function() {
                return r.tsInferType
            }
        }),
        Object.defineProperty(t, "TSInterfaceBody", {
            enumerable: !0,
            get: function() {
                return r.tsInterfaceBody
            }
        }),
        Object.defineProperty(t, "TSInterfaceDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsInterfaceDeclaration
            }
        }),
        Object.defineProperty(t, "TSIntersectionType", {
            enumerable: !0,
            get: function() {
                return r.tsIntersectionType
            }
        }),
        Object.defineProperty(t, "TSIntrinsicKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsIntrinsicKeyword
            }
        }),
        Object.defineProperty(t, "TSLiteralType", {
            enumerable: !0,
            get: function() {
                return r.tsLiteralType
            }
        }),
        Object.defineProperty(t, "TSMappedType", {
            enumerable: !0,
            get: function() {
                return r.tsMappedType
            }
        }),
        Object.defineProperty(t, "TSMethodSignature", {
            enumerable: !0,
            get: function() {
                return r.tsMethodSignature
            }
        }),
        Object.defineProperty(t, "TSModuleBlock", {
            enumerable: !0,
            get: function() {
                return r.tsModuleBlock
            }
        }),
        Object.defineProperty(t, "TSModuleDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsModuleDeclaration
            }
        }),
        Object.defineProperty(t, "TSNamedTupleMember", {
            enumerable: !0,
            get: function() {
                return r.tsNamedTupleMember
            }
        }),
        Object.defineProperty(t, "TSNamespaceExportDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsNamespaceExportDeclaration
            }
        }),
        Object.defineProperty(t, "TSNeverKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsNeverKeyword
            }
        }),
        Object.defineProperty(t, "TSNonNullExpression", {
            enumerable: !0,
            get: function() {
                return r.tsNonNullExpression
            }
        }),
        Object.defineProperty(t, "TSNullKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsNullKeyword
            }
        }),
        Object.defineProperty(t, "TSNumberKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsNumberKeyword
            }
        }),
        Object.defineProperty(t, "TSObjectKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsObjectKeyword
            }
        }),
        Object.defineProperty(t, "TSOptionalType", {
            enumerable: !0,
            get: function() {
                return r.tsOptionalType
            }
        }),
        Object.defineProperty(t, "TSParameterProperty", {
            enumerable: !0,
            get: function() {
                return r.tsParameterProperty
            }
        }),
        Object.defineProperty(t, "TSParenthesizedType", {
            enumerable: !0,
            get: function() {
                return r.tsParenthesizedType
            }
        }),
        Object.defineProperty(t, "TSPropertySignature", {
            enumerable: !0,
            get: function() {
                return r.tsPropertySignature
            }
        }),
        Object.defineProperty(t, "TSQualifiedName", {
            enumerable: !0,
            get: function() {
                return r.tsQualifiedName
            }
        }),
        Object.defineProperty(t, "TSRestType", {
            enumerable: !0,
            get: function() {
                return r.tsRestType
            }
        }),
        Object.defineProperty(t, "TSStringKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsStringKeyword
            }
        }),
        Object.defineProperty(t, "TSSymbolKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsSymbolKeyword
            }
        }),
        Object.defineProperty(t, "TSThisType", {
            enumerable: !0,
            get: function() {
                return r.tsThisType
            }
        }),
        Object.defineProperty(t, "TSTupleType", {
            enumerable: !0,
            get: function() {
                return r.tsTupleType
            }
        }),
        Object.defineProperty(t, "TSTypeAliasDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsTypeAliasDeclaration
            }
        }),
        Object.defineProperty(t, "TSTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.tsTypeAnnotation
            }
        }),
        Object.defineProperty(t, "TSTypeAssertion", {
            enumerable: !0,
            get: function() {
                return r.tsTypeAssertion
            }
        }),
        Object.defineProperty(t, "TSTypeLiteral", {
            enumerable: !0,
            get: function() {
                return r.tsTypeLiteral
            }
        }),
        Object.defineProperty(t, "TSTypeOperator", {
            enumerable: !0,
            get: function() {
                return r.tsTypeOperator
            }
        }),
        Object.defineProperty(t, "TSTypeParameter", {
            enumerable: !0,
            get: function() {
                return r.tsTypeParameter
            }
        }),
        Object.defineProperty(t, "TSTypeParameterDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsTypeParameterDeclaration
            }
        }),
        Object.defineProperty(t, "TSTypeParameterInstantiation", {
            enumerable: !0,
            get: function() {
                return r.tsTypeParameterInstantiation
            }
        }),
        Object.defineProperty(t, "TSTypePredicate", {
            enumerable: !0,
            get: function() {
                return r.tsTypePredicate
            }
        }),
        Object.defineProperty(t, "TSTypeQuery", {
            enumerable: !0,
            get: function() {
                return r.tsTypeQuery
            }
        }),
        Object.defineProperty(t, "TSTypeReference", {
            enumerable: !0,
            get: function() {
                return r.tsTypeReference
            }
        }),
        Object.defineProperty(t, "TSUndefinedKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsUndefinedKeyword
            }
        }),
        Object.defineProperty(t, "TSUnionType", {
            enumerable: !0,
            get: function() {
                return r.tsUnionType
            }
        }),
        Object.defineProperty(t, "TSUnknownKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsUnknownKeyword
            }
        }),
        Object.defineProperty(t, "TSVoidKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsVoidKeyword
            }
        }),
        Object.defineProperty(t, "TaggedTemplateExpression", {
            enumerable: !0,
            get: function() {
                return r.taggedTemplateExpression
            }
        }),
        Object.defineProperty(t, "TemplateElement", {
            enumerable: !0,
            get: function() {
                return r.templateElement
            }
        }),
        Object.defineProperty(t, "TemplateLiteral", {
            enumerable: !0,
            get: function() {
                return r.templateLiteral
            }
        }),
        Object.defineProperty(t, "ThisExpression", {
            enumerable: !0,
            get: function() {
                return r.thisExpression
            }
        }),
        Object.defineProperty(t, "ThisTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.thisTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ThrowStatement", {
            enumerable: !0,
            get: function() {
                return r.throwStatement
            }
        }),
        Object.defineProperty(t, "TopicReference", {
            enumerable: !0,
            get: function() {
                return r.topicReference
            }
        }),
        Object.defineProperty(t, "TryStatement", {
            enumerable: !0,
            get: function() {
                return r.tryStatement
            }
        }),
        Object.defineProperty(t, "TupleExpression", {
            enumerable: !0,
            get: function() {
                return r.tupleExpression
            }
        }),
        Object.defineProperty(t, "TupleTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.tupleTypeAnnotation
            }
        }),
        Object.defineProperty(t, "TypeAlias", {
            enumerable: !0,
            get: function() {
                return r.typeAlias
            }
        }),
        Object.defineProperty(t, "TypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.typeAnnotation
            }
        }),
        Object.defineProperty(t, "TypeCastExpression", {
            enumerable: !0,
            get: function() {
                return r.typeCastExpression
            }
        }),
        Object.defineProperty(t, "TypeParameter", {
            enumerable: !0,
            get: function() {
                return r.typeParameter
            }
        }),
        Object.defineProperty(t, "TypeParameterDeclaration", {
            enumerable: !0,
            get: function() {
                return r.typeParameterDeclaration
            }
        }),
        Object.defineProperty(t, "TypeParameterInstantiation", {
            enumerable: !0,
            get: function() {
                return r.typeParameterInstantiation
            }
        }),
        Object.defineProperty(t, "TypeofTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.typeofTypeAnnotation
            }
        }),
        Object.defineProperty(t, "UnaryExpression", {
            enumerable: !0,
            get: function() {
                return r.unaryExpression
            }
        }),
        Object.defineProperty(t, "UnionTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.unionTypeAnnotation
            }
        }),
        Object.defineProperty(t, "UpdateExpression", {
            enumerable: !0,
            get: function() {
                return r.updateExpression
            }
        }),
        Object.defineProperty(t, "V8IntrinsicIdentifier", {
            enumerable: !0,
            get: function() {
                return r.v8IntrinsicIdentifier
            }
        }),
        Object.defineProperty(t, "VariableDeclaration", {
            enumerable: !0,
            get: function() {
                return r.variableDeclaration
            }
        }),
        Object.defineProperty(t, "VariableDeclarator", {
            enumerable: !0,
            get: function() {
                return r.variableDeclarator
            }
        }),
        Object.defineProperty(t, "Variance", {
            enumerable: !0,
            get: function() {
                return r.variance
            }
        }),
        Object.defineProperty(t, "VoidTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.voidTypeAnnotation
            }
        }),
        Object.defineProperty(t, "WhileStatement", {
            enumerable: !0,
            get: function() {
                return r.whileStatement
            }
        }),
        Object.defineProperty(t, "WithStatement", {
            enumerable: !0,
            get: function() {
                return r.withStatement
            }
        }),
        Object.defineProperty(t, "YieldExpression", {
            enumerable: !0,
            get: function() {
                return r.yieldExpression
            }
        });
        var r = n(2641)
    },
    3163: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.default)(e, !1)
        }
        ;
        var r = n(2662)
    },
    3164: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.default)(e)
        }
        ;
        var r = n(2662)
    },
    3165: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.default)(e, !0, !0)
        }
        ;
        var r = n(2662)
    },
    3166: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.default)(e, !1, !0)
        }
        ;
        var r = n(2662)
    },
    3167: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n, a) {
            return (0,
            r.default)(e, t, [{
                type: a ? "CommentLine" : "CommentBlock",
                value: n
            }])
        }
        ;
        var r = n(2826)
    },
    3168: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return r.COMMENT_KEYS.forEach((function(t) {
                e[t] = null
            }
            )),
            e
        }
        ;
        var r = n(2661)
    },
    3169: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WHILE_TYPES = t.USERWHITESPACABLE_TYPES = t.UNARYLIKE_TYPES = t.TYPESCRIPT_TYPES = t.TSTYPE_TYPES = t.TSTYPEELEMENT_TYPES = t.TSENTITYNAME_TYPES = t.TSBASETYPE_TYPES = t.TERMINATORLESS_TYPES = t.STATEMENT_TYPES = t.STANDARDIZED_TYPES = t.SCOPABLE_TYPES = t.PUREISH_TYPES = t.PROPERTY_TYPES = t.PRIVATE_TYPES = t.PATTERN_TYPES = t.PATTERNLIKE_TYPES = t.OBJECTMEMBER_TYPES = t.MODULESPECIFIER_TYPES = t.MODULEDECLARATION_TYPES = t.MISCELLANEOUS_TYPES = t.METHOD_TYPES = t.LVAL_TYPES = t.LOOP_TYPES = t.LITERAL_TYPES = t.JSX_TYPES = t.IMMUTABLE_TYPES = t.FUNCTION_TYPES = t.FUNCTIONPARENT_TYPES = t.FOR_TYPES = t.FORXSTATEMENT_TYPES = t.FLOW_TYPES = t.FLOWTYPE_TYPES = t.FLOWPREDICATE_TYPES = t.FLOWDECLARATION_TYPES = t.FLOWBASEANNOTATION_TYPES = t.EXPRESSION_TYPES = t.EXPRESSIONWRAPPER_TYPES = t.EXPORTDECLARATION_TYPES = t.ENUMMEMBER_TYPES = t.ENUMBODY_TYPES = t.DECLARATION_TYPES = t.CONDITIONAL_TYPES = t.COMPLETIONSTATEMENT_TYPES = t.CLASS_TYPES = t.BLOCK_TYPES = t.BLOCKPARENT_TYPES = t.BINARY_TYPES = void 0;
        var r = n(2645)
          , a = r.FLIPPED_ALIAS_KEYS.Standardized;
        t.STANDARDIZED_TYPES = a;
        var i = r.FLIPPED_ALIAS_KEYS.Expression;
        t.EXPRESSION_TYPES = i;
        var o = r.FLIPPED_ALIAS_KEYS.Binary;
        t.BINARY_TYPES = o;
        var s = r.FLIPPED_ALIAS_KEYS.Scopable;
        t.SCOPABLE_TYPES = s;
        var u = r.FLIPPED_ALIAS_KEYS.BlockParent;
        t.BLOCKPARENT_TYPES = u;
        var l = r.FLIPPED_ALIAS_KEYS.Block;
        t.BLOCK_TYPES = l;
        var p = r.FLIPPED_ALIAS_KEYS.Statement;
        t.STATEMENT_TYPES = p;
        var f = r.FLIPPED_ALIAS_KEYS.Terminatorless;
        t.TERMINATORLESS_TYPES = f;
        var d = r.FLIPPED_ALIAS_KEYS.CompletionStatement;
        t.COMPLETIONSTATEMENT_TYPES = d;
        var c = r.FLIPPED_ALIAS_KEYS.Conditional;
        t.CONDITIONAL_TYPES = c;
        var y = r.FLIPPED_ALIAS_KEYS.Loop;
        t.LOOP_TYPES = y;
        var T = r.FLIPPED_ALIAS_KEYS.While;
        t.WHILE_TYPES = T;
        var m = r.FLIPPED_ALIAS_KEYS.ExpressionWrapper;
        t.EXPRESSIONWRAPPER_TYPES = m;
        var S = r.FLIPPED_ALIAS_KEYS.For;
        t.FOR_TYPES = S;
        var E = r.FLIPPED_ALIAS_KEYS.ForXStatement;
        t.FORXSTATEMENT_TYPES = E;
        var b = r.FLIPPED_ALIAS_KEYS.Function;
        t.FUNCTION_TYPES = b;
        var v = r.FLIPPED_ALIAS_KEYS.FunctionParent;
        t.FUNCTIONPARENT_TYPES = v;
        var P = r.FLIPPED_ALIAS_KEYS.Pureish;
        t.PUREISH_TYPES = P;
        var O = r.FLIPPED_ALIAS_KEYS.Declaration;
        t.DECLARATION_TYPES = O;
        var A = r.FLIPPED_ALIAS_KEYS.PatternLike;
        t.PATTERNLIKE_TYPES = A;
        var g = r.FLIPPED_ALIAS_KEYS.LVal;
        t.LVAL_TYPES = g;
        var x = r.FLIPPED_ALIAS_KEYS.TSEntityName;
        t.TSENTITYNAME_TYPES = x;
        var D = r.FLIPPED_ALIAS_KEYS.Literal;
        t.LITERAL_TYPES = D;
        var I = r.FLIPPED_ALIAS_KEYS.Immutable;
        t.IMMUTABLE_TYPES = I;
        var _ = r.FLIPPED_ALIAS_KEYS.UserWhitespacable;
        t.USERWHITESPACABLE_TYPES = _;
        var h = r.FLIPPED_ALIAS_KEYS.Method;
        t.METHOD_TYPES = h;
        var N = r.FLIPPED_ALIAS_KEYS.ObjectMember;
        t.OBJECTMEMBER_TYPES = N;
        var j = r.FLIPPED_ALIAS_KEYS.Property;
        t.PROPERTY_TYPES = j;
        var L = r.FLIPPED_ALIAS_KEYS.UnaryLike;
        t.UNARYLIKE_TYPES = L;
        var C = r.FLIPPED_ALIAS_KEYS.Pattern;
        t.PATTERN_TYPES = C;
        var B = r.FLIPPED_ALIAS_KEYS.Class;
        t.CLASS_TYPES = B;
        var w = r.FLIPPED_ALIAS_KEYS.ModuleDeclaration;
        t.MODULEDECLARATION_TYPES = w;
        var M = r.FLIPPED_ALIAS_KEYS.ExportDeclaration;
        t.EXPORTDECLARATION_TYPES = M;
        var F = r.FLIPPED_ALIAS_KEYS.ModuleSpecifier;
        t.MODULESPECIFIER_TYPES = F;
        var R = r.FLIPPED_ALIAS_KEYS.Private;
        t.PRIVATE_TYPES = R;
        var K = r.FLIPPED_ALIAS_KEYS.Flow;
        t.FLOW_TYPES = K;
        var V = r.FLIPPED_ALIAS_KEYS.FlowType;
        t.FLOWTYPE_TYPES = V;
        var k = r.FLIPPED_ALIAS_KEYS.FlowBaseAnnotation;
        t.FLOWBASEANNOTATION_TYPES = k;
        var Y = r.FLIPPED_ALIAS_KEYS.FlowDeclaration;
        t.FLOWDECLARATION_TYPES = Y;
        var U = r.FLIPPED_ALIAS_KEYS.FlowPredicate;
        t.FLOWPREDICATE_TYPES = U;
        var X = r.FLIPPED_ALIAS_KEYS.EnumBody;
        t.ENUMBODY_TYPES = X;
        var W = r.FLIPPED_ALIAS_KEYS.EnumMember;
        t.ENUMMEMBER_TYPES = W;
        var J = r.FLIPPED_ALIAS_KEYS.JSX;
        t.JSX_TYPES = J;
        var H = r.FLIPPED_ALIAS_KEYS.Miscellaneous;
        t.MISCELLANEOUS_TYPES = H;
        var q = r.FLIPPED_ALIAS_KEYS.TypeScript;
        t.TYPESCRIPT_TYPES = q;
        var G = r.FLIPPED_ALIAS_KEYS.TSTypeElement;
        t.TSTYPEELEMENT_TYPES = G;
        var z = r.FLIPPED_ALIAS_KEYS.TSType;
        t.TSTYPE_TYPES = z;
        var Q = r.FLIPPED_ALIAS_KEYS.TSBaseType;
        t.TSBASETYPE_TYPES = Q
    },
    3170: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "body";
            return e[t] = (0,
            r.default)(e[t], e)
        }
        ;
        var r = n(2831)
    },
    3171: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            "eval" !== (e = (0,
            r.default)(e)) && "arguments" !== e || (e = "_" + e);
            return e
        }
        ;
        var r = n(2832)
    },
    3172: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.key || e.property;
            !e.computed && (0,
            r.isIdentifier)(t) && (t = (0,
            a.stringLiteral)(t.name));
            return t
        }
        ;
        var r = n(2637)
          , a = n(2641)
    },
    3173: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2637)
          , a = function(e) {
            (0,
            r.isExpressionStatement)(e) && (e = e.expression);
            if ((0,
            r.isExpression)(e))
                return e;
            (0,
            r.isClass)(e) ? e.type = "ClassExpression" : (0,
            r.isFunction)(e) && (e.type = "FunctionExpression");
            if (!(0,
            r.isExpression)(e))
                throw new Error("cannot turn ".concat(e.type, " to an expression"));
            return e
        };
        t.default = a
    },
    3174: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = o;
        var r = n(2637)
          , a = n(2662)
          , i = n(2833);
        function o(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.key;
            return "method" === e.kind ? o.increment() + "" : (t = (0,
            r.isIdentifier)(n) ? n.name : (0,
            r.isStringLiteral)(n) ? JSON.stringify(n.value) : JSON.stringify((0,
            i.default)((0,
            a.default)(n))),
            e.computed && (t = "[".concat(t, "]")),
            e.static && (t = "static:".concat(t)),
            t)
        }
        o.uid = 0,
        o.increment = function() {
            return o.uid >= Number.MAX_SAFE_INTEGER ? o.uid = 0 : o.uid++
        }
    },
    3175: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if (null == e || !e.length)
                return;
            var n = []
              , a = (0,
            r.default)(e, t, n);
            if (!a)
                return;
            for (var i = 0, o = n; i < o.length; i++) {
                var s = o[i];
                t.push(s)
            }
            return a
        }
        ;
        var r = n(3176)
    },
    3176: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function e(t, n, u) {
            var l, p = [], f = !0, d = r(t);
            try {
                for (d.s(); !(l = d.n()).done; ) {
                    var c = l.value;
                    if ((0,
                    i.isEmptyStatement)(c) || (f = !1),
                    (0,
                    i.isExpression)(c))
                        p.push(c);
                    else if ((0,
                    i.isExpressionStatement)(c))
                        p.push(c.expression);
                    else if ((0,
                    i.isVariableDeclaration)(c)) {
                        if ("var" !== c.kind)
                            return;
                        var y, T = r(c.declarations);
                        try {
                            for (T.s(); !(y = T.n()).done; ) {
                                for (var m = y.value, S = (0,
                                a.default)(m), E = 0, b = Object.keys(S); E < b.length; E++) {
                                    var v = b[E];
                                    u.push({
                                        kind: c.kind,
                                        id: (0,
                                        s.default)(S[v])
                                    })
                                }
                                m.init && p.push((0,
                                o.assignmentExpression)("=", m.id, m.init))
                            }
                        } catch (g) {
                            T.e(g)
                        } finally {
                            T.f()
                        }
                        f = !0
                    } else if ((0,
                    i.isIfStatement)(c)) {
                        var P = c.consequent ? e([c.consequent], n, u) : n.buildUndefinedNode()
                          , O = c.alternate ? e([c.alternate], n, u) : n.buildUndefinedNode();
                        if (!P || !O)
                            return;
                        p.push((0,
                        o.conditionalExpression)(c.test, P, O))
                    } else if ((0,
                    i.isBlockStatement)(c)) {
                        var A = e(c.body, n, u);
                        if (!A)
                            return;
                        p.push(A)
                    } else {
                        if (!(0,
                        i.isEmptyStatement)(c))
                            return;
                        0 === t.indexOf(c) && (f = !0)
                    }
                }
            } catch (g) {
                d.e(g)
            } finally {
                d.f()
            }
            f && p.push(n.buildUndefinedNode());
            return 1 === p.length ? p[0] : (0,
            o.sequenceExpression)(p)
        }
        ;
        var a = n(2696)
          , i = n(2637)
          , o = n(2641)
          , s = n(2662)
    },
    3177: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2637)
          , a = n(2641)
          , i = function(e, t) {
            if ((0,
            r.isStatement)(e))
                return e;
            var n, i = !1;
            if ((0,
            r.isClass)(e))
                i = !0,
                n = "ClassDeclaration";
            else if ((0,
            r.isFunction)(e))
                i = !0,
                n = "FunctionDeclaration";
            else if ((0,
            r.isAssignmentExpression)(e))
                return (0,
                a.expressionStatement)(e);
            i && !e.id && (n = !1);
            if (!n) {
                if (t)
                    return !1;
                throw new Error("cannot turn ".concat(e.type, " to a statement"))
            }
            return e.type = n,
            e
        };
        t.default = i
    },
    3178: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2679)
          , a = n(2641)
          , i = function e(t) {
            if (void 0 === t)
                return (0,
                a.identifier)("undefined");
            if (!0 === t || !1 === t)
                return (0,
                a.booleanLiteral)(t);
            if (null === t)
                return (0,
                a.nullLiteral)();
            if ("string" === typeof t)
                return (0,
                a.stringLiteral)(t);
            if ("number" === typeof t) {
                var n, i;
                if (Number.isFinite(t))
                    n = (0,
                    a.numericLiteral)(Math.abs(t));
                else
                    i = Number.isNaN(t) ? (0,
                    a.numericLiteral)(0) : (0,
                    a.numericLiteral)(1),
                    n = (0,
                    a.binaryExpression)("/", i, (0,
                    a.numericLiteral)(0));
                return (t < 0 || Object.is(t, -0)) && (n = (0,
                a.unaryExpression)("-", n)),
                n
            }
            if (function(e) {
                return "[object RegExp]" === o(e)
            }(t)) {
                var s = t.source
                  , u = t.toString().match(/\/([a-z]+|)$/)[1];
                return (0,
                a.regExpLiteral)(s, u)
            }
            if (Array.isArray(t))
                return (0,
                a.arrayExpression)(t.map(e));
            if (function(e) {
                if ("object" !== typeof e || null === e || "[object Object]" !== Object.prototype.toString.call(e))
                    return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || null === Object.getPrototypeOf(t)
            }(t)) {
                for (var l = [], p = 0, f = Object.keys(t); p < f.length; p++) {
                    var d = f[p]
                      , c = void 0;
                    c = (0,
                    r.default)(d) ? (0,
                    a.identifier)(d) : (0,
                    a.stringLiteral)(d),
                    l.push((0,
                    a.objectProperty)(c, e(t[d])))
                }
                return (0,
                a.objectExpression)(l)
            }
            throw new Error("don't know how to turn this value into a node")
        };
        t.default = i;
        var o = Function.call.bind(Object.prototype.toString)
    },
    3179: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return e.object = (0,
            r.memberExpression)(e.object, e.property, e.computed),
            e.property = t,
            e.computed = !!n,
            e
        }
        ;
        var r = n(2641)
    },
    3180: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if (!e || !t)
                return e;
            var n, o = r(a.INHERIT_KEYS.optional);
            try {
                for (o.s(); !(n = o.n()).done; ) {
                    var s = n.value;
                    null == e[s] && (e[s] = t[s])
                }
            } catch (y) {
                o.e(y)
            } finally {
                o.f()
            }
            for (var u = 0, l = Object.keys(t); u < l.length; u++) {
                var p = l[u];
                "_" === p[0] && "__clone" !== p && (e[p] = t[p])
            }
            var f, d = r(a.INHERIT_KEYS.force);
            try {
                for (d.s(); !(f = d.n()).done; ) {
                    var c = f.value;
                    e[c] = t[c]
                }
            } catch (y) {
                d.e(y)
            } finally {
                d.f()
            }
            return (0,
            i.default)(e, t),
            e
        }
        ;
        var a = n(2661)
          , i = n(2829)
    },
    3181: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            return e.object = (0,
            r.memberExpression)(t, e.object),
            e
        }
        ;
        var r = n(2641)
    },
    3182: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2696)
          , a = function(e, t) {
            return (0,
            r.default)(e, t, !0)
        };
        t.default = a
    },
    3183: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            "function" === typeof t && (t = {
                enter: t
            });
            var i = t
              , o = i.enter
              , s = i.exit;
            !function e(t, n, i, o, s) {
                var u = a.VISITOR_KEYS[t.type];
                if (!u)
                    return;
                n && n(t, s, o);
                var l, p = r(u);
                try {
                    for (p.s(); !(l = p.n()).done; ) {
                        var f = l.value
                          , d = t[f];
                        if (Array.isArray(d))
                            for (var c = 0; c < d.length; c++) {
                                var y = d[c];
                                y && (s.push({
                                    node: t,
                                    key: f,
                                    index: c
                                }),
                                e(y, n, i, o, s),
                                s.pop())
                            }
                        else
                            d && (s.push({
                                node: t,
                                key: f
                            }),
                            e(d, n, i, o, s),
                            s.pop())
                    }
                } catch (T) {
                    p.e(T)
                } finally {
                    p.f()
                }
                i && i(t, s, o)
            }(e, o, s, n, [])
        }
        ;
        var a = n(2645)
    },
    3184: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            if (n && "Identifier" === e.type && "ObjectProperty" === t.type && "ObjectExpression" === n.type)
                return !1;
            var a = r.default.keys[t.type];
            if (a)
                for (var i = 0; i < a.length; i++) {
                    var o = a[i]
                      , s = t[o];
                    if (Array.isArray(s)) {
                        if (s.indexOf(e) >= 0)
                            return !0
                    } else if (s === e)
                        return !0
                }
            return !1
        }
        ;
        var r = n(2696)
    },
    3185: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.isFunctionDeclaration)(e) || (0,
            r.isClassDeclaration)(e) || (0,
            a.default)(e)
        }
        ;
        var r = n(2637)
          , a = n(2836)
    },
    3186: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            if ((0,
            r.default)(e.type, "Immutable"))
                return !0;
            if ((0,
            a.isIdentifier)(e))
                return "undefined" === e.name;
            return !1
        }
        ;
        var r = n(2719)
          , a = n(2637)
    },
    3187: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function e(t, n) {
            if ("object" !== typeof t || "object" !== typeof n || null == t || null == n)
                return t === n;
            if (t.type !== n.type)
                return !1;
            for (var a = Object.keys(r.NODE_FIELDS[t.type] || t.type), i = r.VISITOR_KEYS[t.type], o = 0, s = a; o < s.length; o++) {
                var u = s[o];
                if (typeof t[u] !== typeof n[u])
                    return !1;
                if (null != t[u] || null != n[u]) {
                    if (null == t[u] || null == n[u])
                        return !1;
                    if (Array.isArray(t[u])) {
                        if (!Array.isArray(n[u]))
                            return !1;
                        if (t[u].length !== n[u].length)
                            return !1;
                        for (var l = 0; l < t[u].length; l++)
                            if (!e(t[u][l], n[u][l]))
                                return !1
                    } else if ("object" !== typeof t[u] || null != i && i.includes(u)) {
                        if (!e(t[u], n[u]))
                            return !1
                    } else
                        for (var p = 0, f = Object.keys(t[u]); p < f.length; p++) {
                            var d = f[p];
                            if (t[u][d] !== n[u][d])
                                return !1
                        }
                }
            }
            return !0
        }
        ;
        var r = n(2645)
    },
    3188: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            switch (t.type) {
            case "MemberExpression":
            case "OptionalMemberExpression":
                return t.property === e ? !!t.computed : t.object === e;
            case "JSXMemberExpression":
                return t.object === e;
            case "VariableDeclarator":
                return t.init === e;
            case "ArrowFunctionExpression":
                return t.body === e;
            case "PrivateName":
                return !1;
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "ObjectMethod":
                return t.key === e && !!t.computed;
            case "ObjectProperty":
                return t.key === e ? !!t.computed : !n || "ObjectPattern" !== n.type;
            case "ClassProperty":
                return t.key !== e || !!t.computed;
            case "ClassPrivateProperty":
                return t.key !== e;
            case "ClassDeclaration":
            case "ClassExpression":
                return t.superClass === e;
            case "AssignmentExpression":
            case "AssignmentPattern":
                return t.right === e;
            case "LabeledStatement":
            case "CatchClause":
            case "RestElement":
                return !1;
            case "BreakStatement":
            case "ContinueStatement":
                return !1;
            case "FunctionDeclaration":
            case "FunctionExpression":
                return !1;
            case "ExportNamespaceSpecifier":
            case "ExportDefaultSpecifier":
                return !1;
            case "ExportSpecifier":
                return (null == n || !n.source) && t.local === e;
            case "ImportDefaultSpecifier":
            case "ImportNamespaceSpecifier":
            case "ImportSpecifier":
            case "ImportAttribute":
            case "JSXAttribute":
                return !1;
            case "ObjectPattern":
            case "ArrayPattern":
            case "MetaProperty":
                return !1;
            case "ObjectTypeProperty":
                return t.key !== e;
            case "TSEnumMember":
                return t.id !== e;
            case "TSPropertySignature":
                return t.key !== e || !!t.computed
            }
            return !0
        }
    },
    3189: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if ((0,
            r.isBlockStatement)(e) && ((0,
            r.isFunction)(t) || (0,
            r.isCatchClause)(t)))
                return !1;
            if ((0,
            r.isPattern)(e) && ((0,
            r.isFunction)(t) || (0,
            r.isCatchClause)(t)))
                return !0;
            return (0,
            r.isScopable)(e)
        }
        ;
        var r = n(2637)
    },
    3190: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.isImportDefaultSpecifier)(e) || (0,
            r.isIdentifier)(e.imported || e.exported, {
                name: "default"
            })
        }
        ;
        var r = n(2637)
    },
    3191: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.default)(e) && !a.has(e)
        }
        ;
        var r = n(2679)
          , a = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"])
    },
    3192: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.isVariableDeclaration)(e, {
                kind: "var"
            }) && !e[a.BLOCK_SCOPED_SYMBOL]
        }
        ;
        var r = n(2637)
          , a = n(2661)
    },
    3193: function(e, t) {},
    3194: function(e, t, n) {
        "use strict";
        var r = n(220)
          , a = n(230);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = n(569)
          , o = n(2717)
          , s = o.callExpression
          , u = o.cloneNode
          , l = o.expressionStatement
          , p = o.identifier
          , f = o.importDeclaration
          , d = o.importDefaultSpecifier
          , c = o.importNamespaceSpecifier
          , y = o.importSpecifier
          , T = o.memberExpression
          , m = o.stringLiteral
          , S = o.variableDeclaration
          , E = o.variableDeclarator
          , b = function() {
            function e(t, n, a) {
                r(this, e),
                this._statements = [],
                this._resultName = null,
                this._scope = null,
                this._hub = null,
                this._importedSource = void 0,
                this._scope = n,
                this._hub = a,
                this._importedSource = t
            }
            return a(e, [{
                key: "done",
                value: function() {
                    return {
                        statements: this._statements,
                        resultName: this._resultName
                    }
                }
            }, {
                key: "import",
                value: function() {
                    return this._statements.push(f([], m(this._importedSource))),
                    this
                }
            }, {
                key: "require",
                value: function() {
                    return this._statements.push(l(s(p("require"), [m(this._importedSource)]))),
                    this
                }
            }, {
                key: "namespace",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "namespace"
                      , t = this._scope.generateUidIdentifier(e)
                      , n = this._statements[this._statements.length - 1];
                    return i("ImportDeclaration" === n.type),
                    i(0 === n.specifiers.length),
                    n.specifiers = [c(t)],
                    this._resultName = u(t),
                    this
                }
            }, {
                key: "default",
                value: function(e) {
                    e = this._scope.generateUidIdentifier(e);
                    var t = this._statements[this._statements.length - 1];
                    return i("ImportDeclaration" === t.type),
                    i(0 === t.specifiers.length),
                    t.specifiers = [d(e)],
                    this._resultName = u(e),
                    this
                }
            }, {
                key: "named",
                value: function(e, t) {
                    if ("default" === t)
                        return this.default(e);
                    e = this._scope.generateUidIdentifier(e);
                    var n = this._statements[this._statements.length - 1];
                    return i("ImportDeclaration" === n.type),
                    i(0 === n.specifiers.length),
                    n.specifiers = [y(e, p(t))],
                    this._resultName = u(e),
                    this
                }
            }, {
                key: "var",
                value: function(e) {
                    e = this._scope.generateUidIdentifier(e);
                    var t = this._statements[this._statements.length - 1];
                    return "ExpressionStatement" !== t.type && (i(this._resultName),
                    t = l(this._resultName),
                    this._statements.push(t)),
                    this._statements[this._statements.length - 1] = S("var", [E(e, t.expression)]),
                    this._resultName = u(e),
                    this
                }
            }, {
                key: "defaultInterop",
                value: function() {
                    return this._interop(this._hub.addHelper("interopRequireDefault"))
                }
            }, {
                key: "wildcardInterop",
                value: function() {
                    return this._interop(this._hub.addHelper("interopRequireWildcard"))
                }
            }, {
                key: "_interop",
                value: function(e) {
                    var t = this._statements[this._statements.length - 1];
                    return "ExpressionStatement" === t.type ? t.expression = s(e, [t.expression]) : "VariableDeclaration" === t.type ? (i(1 === t.declarations.length),
                    t.declarations[0].init = s(e, [t.declarations[0].init])) : i.fail("Unexpected type."),
                    this
                }
            }, {
                key: "prop",
                value: function(e) {
                    var t = this._statements[this._statements.length - 1];
                    return "ExpressionStatement" === t.type ? t.expression = T(t.expression, p(e)) : "VariableDeclaration" === t.type ? (i(1 === t.declarations.length),
                    t.declarations[0].init = T(t.declarations[0].init, p(e))) : i.fail("Unexpected type:" + t.type),
                    this
                }
            }, {
                key: "read",
                value: function(e) {
                    this._resultName = T(this._resultName, p(e))
                }
            }]),
            e
        }();
        t.default = b
    },
    3195: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = e.node || e;
            if (function(e) {
                var t = e.leadingComments;
                return !!t && t.some((function(e) {
                    return /[@#]__PURE__/.test(e.value)
                }
                ))
            }(t))
                return;
            r(t, "leading", "#__PURE__")
        }
        ;
        var r = n(2717).addComment
    },
    3196: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        });
        var r = n(3197)
    },
    3197: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = (0,
        n(2731).default)({
            name: "transform-react-jsx/development",
            development: !0
        });
        t.default = r
    },
    3198: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(3199)
          , a = n(1187)
          , i = n(2668)
          , o = (0,
        r.declare)((function(e) {
            function t(e, t) {
                for (var n = t.arguments[0].properties, r = !0, a = 0; a < n.length; a++) {
                    var o = n[a]
                      , s = i.types.toComputedKey(o);
                    if (i.types.isLiteral(s, {
                        value: "displayName"
                    })) {
                        r = !1;
                        break
                    }
                }
                r && n.unshift(i.types.objectProperty(i.types.identifier("displayName"), i.types.stringLiteral(e)))
            }
            e.assertVersion(7);
            var n = i.types.buildMatchMemberExpression("React.createClass");
            function r(e) {
                if (!e || !i.types.isCallExpression(e))
                    return !1;
                if (!n(e.callee) && "createReactClass" !== e.callee.name)
                    return !1;
                var t = e.arguments;
                if (1 !== t.length)
                    return !1;
                var r = t[0];
                return !!i.types.isObjectExpression(r)
            }
            return {
                name: "transform-react-display-name",
                visitor: {
                    ExportDefaultDeclaration: function(e, n) {
                        var i = e.node;
                        if (r(i.declaration)) {
                            var o = n.filename || "unknown"
                              , s = a.basename(o, a.extname(o));
                            "index" === s && (s = a.basename(a.dirname(o))),
                            t(s, i.declaration)
                        }
                    },
                    CallExpression: function(e) {
                        var n, a = e.node;
                        r(a) && (e.find((function(e) {
                            if (e.isAssignmentExpression())
                                n = e.node.left;
                            else if (e.isObjectProperty())
                                n = e.node.key;
                            else if (e.isVariableDeclarator())
                                n = e.node.id;
                            else if (e.isStatement())
                                return !0;
                            if (n)
                                return !0
                        }
                        )),
                        n && (i.types.isMemberExpression(n) && (n = n.property),
                        i.types.isIdentifier(n) && t(n.name, a)))
                    }
                }
            }
        }
        ));
        t.default = o
    },
    3199: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.declare = function(e) {
            return function(t, n, i) {
                for (var o, s, u = 0, l = Object.keys(r); u < l.length; u++) {
                    var p, f = l[u];
                    t[f] || ((s = null != (p = s) ? p : a(t))[f] = r[f](s))
                }
                return e(null != (o = s) ? o : t, n || {}, i)
            }
        }
        ;
        var r = {
            assertVersion: function(e) {
                return function(t) {
                    !function(e, t) {
                        if ("number" === typeof e) {
                            if (!Number.isInteger(e))
                                throw new Error("Expected string or integer value.");
                            e = "^".concat(e, ".0.0-0")
                        }
                        if ("string" !== typeof e)
                            throw new Error("Expected string or integer value.");
                        var n, r = Error.stackTraceLimit;
                        "number" === typeof r && r < 25 && (Error.stackTraceLimit = 25);
                        n = "7." === t.slice(0, 2) ? new Error('Requires Babel "^7.0.0-beta.41", but was loaded with "'.concat(t, '". ') + "You'll need to update your @babel/core version.") : new Error('Requires Babel "'.concat(e, '", but was loaded with "').concat(t, '". ') + 'If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn\'t mention "@babel/core" or "babel-core" to see what is calling Babel.');
                        "number" === typeof r && (Error.stackTraceLimit = r);
                        throw Object.assign(n, {
                            code: "BABEL_VERSION_UNSUPPORTED",
                            version: t,
                            range: e
                        })
                    }(t, e.version)
                }
            },
            targets: function() {
                return function() {
                    return {}
                }
            },
            assumption: function() {
                return function() {}
            }
        };
        function a(e) {
            var t = null;
            return "string" === typeof e.version && /^7\./.test(e.version) && (!(t = Object.getPrototypeOf(e)) || i(t, "version") && i(t, "transform") && i(t, "template") && i(t, "types") || (t = null)),
            Object.assign({}, t, e)
        }
        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    },
    3200: function(e, t, n) {
        "use strict";
        var r = n(624)
          , a = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = n(3201)
          , o = n(3202)
          , s = n(2668)
          , u = new Map([["react", ["cloneElement", "createContext", "createElement", "createFactory", "createRef", "forwardRef", "isValidElement", "memo", "lazy"]], ["react-dom", ["createPortal"]]])
          , l = (0,
        i.declare)((function(e) {
            return e.assertVersion(7),
            {
                name: "transform-react-pure-annotations",
                visitor: {
                    CallExpression: function(e) {
                        (function(e) {
                            if (!s.types.isMemberExpression(e.node.callee)) {
                                var t, n = e.get("callee"), i = a(u);
                                try {
                                    for (i.s(); !(t = i.n()).done; ) {
                                        var o, l = r(t.value, 2), p = l[0], f = l[1], d = a(f);
                                        try {
                                            for (d.s(); !(o = d.n()).done; ) {
                                                var c = o.value;
                                                if (n.referencesImport(p, c))
                                                    return !0
                                            }
                                        } catch (A) {
                                            d.e(A)
                                        } finally {
                                            d.f()
                                        }
                                    }
                                } catch (A) {
                                    i.e(A)
                                } finally {
                                    i.f()
                                }
                                return !1
                            }
                            var y, T = a(u);
                            try {
                                for (T.s(); !(y = T.n()).done; ) {
                                    var m = r(y.value, 2)
                                      , S = m[0]
                                      , E = m[1]
                                      , b = e.get("callee.object");
                                    if (b.referencesImport(S, "default") || b.referencesImport(S, "*")) {
                                        var v, P = a(E);
                                        try {
                                            for (P.s(); !(v = P.n()).done; ) {
                                                var O = v.value;
                                                if (s.types.isIdentifier(e.node.callee.property, {
                                                    name: O
                                                }))
                                                    return !0
                                            }
                                        } catch (A) {
                                            P.e(A)
                                        } finally {
                                            P.f()
                                        }
                                        return !1
                                    }
                                }
                            } catch (A) {
                                T.e(A)
                            } finally {
                                T.f()
                            }
                            return !1
                        }
                        )(e) && (0,
                        o.default)(e)
                    }
                }
            }
        }
        ));
        t.default = l
    },
    3201: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.declare = function(e) {
            return function(t, n, i) {
                for (var o, s, u = 0, l = Object.keys(r); u < l.length; u++) {
                    var p, f = l[u];
                    t[f] || ((s = null != (p = s) ? p : a(t))[f] = r[f](s))
                }
                return e(null != (o = s) ? o : t, n || {}, i)
            }
        }
        ;
        var r = {
            assertVersion: function(e) {
                return function(t) {
                    !function(e, t) {
                        if ("number" === typeof e) {
                            if (!Number.isInteger(e))
                                throw new Error("Expected string or integer value.");
                            e = "^".concat(e, ".0.0-0")
                        }
                        if ("string" !== typeof e)
                            throw new Error("Expected string or integer value.");
                        var n, r = Error.stackTraceLimit;
                        "number" === typeof r && r < 25 && (Error.stackTraceLimit = 25);
                        n = "7." === t.slice(0, 2) ? new Error('Requires Babel "^7.0.0-beta.41", but was loaded with "'.concat(t, '". ') + "You'll need to update your @babel/core version.") : new Error('Requires Babel "'.concat(e, '", but was loaded with "').concat(t, '". ') + 'If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn\'t mention "@babel/core" or "babel-core" to see what is calling Babel.');
                        "number" === typeof r && (Error.stackTraceLimit = r);
                        throw Object.assign(n, {
                            code: "BABEL_VERSION_UNSUPPORTED",
                            version: t,
                            range: e
                        })
                    }(t, e.version)
                }
            },
            targets: function() {
                return function() {
                    return {}
                }
            },
            assumption: function() {
                return function() {}
            }
        };
        function a(e) {
            var t = null;
            return "string" === typeof e.version && /^7\./.test(e.version) && (!(t = Object.getPrototypeOf(e)) || i(t, "version") && i(t, "transform") && i(t, "template") && i(t, "types") || (t = null)),
            Object.assign({}, t, e)
        }
        function i(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    },
    3202: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = e.node || e;
            if (function(e) {
                var t = e.leadingComments;
                return !!t && t.some((function(e) {
                    return /[@#]__PURE__/.test(e.value)
                }
                ))
            }(t))
                return;
            r(t, "leading", "#__PURE__")
        }
        ;
        var r = n(3203).addComment
    },
    3203: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {
            react: !0,
            assertNode: !0,
            createTypeAnnotationBasedOnTypeof: !0,
            createUnionTypeAnnotation: !0,
            createFlowUnionType: !0,
            createTSUnionType: !0,
            cloneNode: !0,
            clone: !0,
            cloneDeep: !0,
            cloneDeepWithoutLoc: !0,
            cloneWithoutLoc: !0,
            addComment: !0,
            addComments: !0,
            inheritInnerComments: !0,
            inheritLeadingComments: !0,
            inheritsComments: !0,
            inheritTrailingComments: !0,
            removeComments: !0,
            ensureBlock: !0,
            toBindingIdentifierName: !0,
            toBlock: !0,
            toComputedKey: !0,
            toExpression: !0,
            toIdentifier: !0,
            toKeyAlias: !0,
            toSequenceExpression: !0,
            toStatement: !0,
            valueToNode: !0,
            appendToMemberExpression: !0,
            inherits: !0,
            prependToMemberExpression: !0,
            removeProperties: !0,
            removePropertiesDeep: !0,
            removeTypeDuplicates: !0,
            getBindingIdentifiers: !0,
            getOuterBindingIdentifiers: !0,
            traverse: !0,
            traverseFast: !0,
            shallowEqual: !0,
            is: !0,
            isBinding: !0,
            isBlockScoped: !0,
            isImmutable: !0,
            isLet: !0,
            isNode: !0,
            isNodesEquivalent: !0,
            isPlaceholderType: !0,
            isReferenced: !0,
            isScope: !0,
            isSpecifierDefault: !0,
            isType: !0,
            isValidES3Identifier: !0,
            isValidIdentifier: !0,
            isVar: !0,
            matchesPattern: !0,
            validate: !0,
            buildMatchMemberExpression: !0
        };
        Object.defineProperty(t, "addComment", {
            enumerable: !0,
            get: function() {
                return b.default
            }
        }),
        Object.defineProperty(t, "addComments", {
            enumerable: !0,
            get: function() {
                return v.default
            }
        }),
        Object.defineProperty(t, "appendToMemberExpression", {
            enumerable: !0,
            get: function() {
                return K.default
            }
        }),
        Object.defineProperty(t, "assertNode", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }),
        Object.defineProperty(t, "buildMatchMemberExpression", {
            enumerable: !0,
            get: function() {
                return ce.default
            }
        }),
        Object.defineProperty(t, "clone", {
            enumerable: !0,
            get: function() {
                return T.default
            }
        }),
        Object.defineProperty(t, "cloneDeep", {
            enumerable: !0,
            get: function() {
                return m.default
            }
        }),
        Object.defineProperty(t, "cloneDeepWithoutLoc", {
            enumerable: !0,
            get: function() {
                return S.default
            }
        }),
        Object.defineProperty(t, "cloneNode", {
            enumerable: !0,
            get: function() {
                return y.default
            }
        }),
        Object.defineProperty(t, "cloneWithoutLoc", {
            enumerable: !0,
            get: function() {
                return E.default
            }
        }),
        Object.defineProperty(t, "createFlowUnionType", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }),
        Object.defineProperty(t, "createTSUnionType", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }),
        Object.defineProperty(t, "createTypeAnnotationBasedOnTypeof", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }),
        Object.defineProperty(t, "createUnionTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }),
        Object.defineProperty(t, "ensureBlock", {
            enumerable: !0,
            get: function() {
                return _.default
            }
        }),
        Object.defineProperty(t, "getBindingIdentifiers", {
            enumerable: !0,
            get: function() {
                return W.default
            }
        }),
        Object.defineProperty(t, "getOuterBindingIdentifiers", {
            enumerable: !0,
            get: function() {
                return J.default
            }
        }),
        Object.defineProperty(t, "inheritInnerComments", {
            enumerable: !0,
            get: function() {
                return P.default
            }
        }),
        Object.defineProperty(t, "inheritLeadingComments", {
            enumerable: !0,
            get: function() {
                return O.default
            }
        }),
        Object.defineProperty(t, "inheritTrailingComments", {
            enumerable: !0,
            get: function() {
                return g.default
            }
        }),
        Object.defineProperty(t, "inherits", {
            enumerable: !0,
            get: function() {
                return V.default
            }
        }),
        Object.defineProperty(t, "inheritsComments", {
            enumerable: !0,
            get: function() {
                return A.default
            }
        }),
        Object.defineProperty(t, "is", {
            enumerable: !0,
            get: function() {
                return z.default
            }
        }),
        Object.defineProperty(t, "isBinding", {
            enumerable: !0,
            get: function() {
                return Q.default
            }
        }),
        Object.defineProperty(t, "isBlockScoped", {
            enumerable: !0,
            get: function() {
                return $.default
            }
        }),
        Object.defineProperty(t, "isImmutable", {
            enumerable: !0,
            get: function() {
                return Z.default
            }
        }),
        Object.defineProperty(t, "isLet", {
            enumerable: !0,
            get: function() {
                return ee.default
            }
        }),
        Object.defineProperty(t, "isNode", {
            enumerable: !0,
            get: function() {
                return te.default
            }
        }),
        Object.defineProperty(t, "isNodesEquivalent", {
            enumerable: !0,
            get: function() {
                return ne.default
            }
        }),
        Object.defineProperty(t, "isPlaceholderType", {
            enumerable: !0,
            get: function() {
                return re.default
            }
        }),
        Object.defineProperty(t, "isReferenced", {
            enumerable: !0,
            get: function() {
                return ae.default
            }
        }),
        Object.defineProperty(t, "isScope", {
            enumerable: !0,
            get: function() {
                return ie.default
            }
        }),
        Object.defineProperty(t, "isSpecifierDefault", {
            enumerable: !0,
            get: function() {
                return oe.default
            }
        }),
        Object.defineProperty(t, "isType", {
            enumerable: !0,
            get: function() {
                return se.default
            }
        }),
        Object.defineProperty(t, "isValidES3Identifier", {
            enumerable: !0,
            get: function() {
                return ue.default
            }
        }),
        Object.defineProperty(t, "isValidIdentifier", {
            enumerable: !0,
            get: function() {
                return le.default
            }
        }),
        Object.defineProperty(t, "isVar", {
            enumerable: !0,
            get: function() {
                return pe.default
            }
        }),
        Object.defineProperty(t, "matchesPattern", {
            enumerable: !0,
            get: function() {
                return fe.default
            }
        }),
        Object.defineProperty(t, "prependToMemberExpression", {
            enumerable: !0,
            get: function() {
                return k.default
            }
        }),
        t.react = void 0,
        Object.defineProperty(t, "removeComments", {
            enumerable: !0,
            get: function() {
                return x.default
            }
        }),
        Object.defineProperty(t, "removeProperties", {
            enumerable: !0,
            get: function() {
                return Y.default
            }
        }),
        Object.defineProperty(t, "removePropertiesDeep", {
            enumerable: !0,
            get: function() {
                return U.default
            }
        }),
        Object.defineProperty(t, "removeTypeDuplicates", {
            enumerable: !0,
            get: function() {
                return X.default
            }
        }),
        Object.defineProperty(t, "shallowEqual", {
            enumerable: !0,
            get: function() {
                return G.default
            }
        }),
        Object.defineProperty(t, "toBindingIdentifierName", {
            enumerable: !0,
            get: function() {
                return h.default
            }
        }),
        Object.defineProperty(t, "toBlock", {
            enumerable: !0,
            get: function() {
                return N.default
            }
        }),
        Object.defineProperty(t, "toComputedKey", {
            enumerable: !0,
            get: function() {
                return j.default
            }
        }),
        Object.defineProperty(t, "toExpression", {
            enumerable: !0,
            get: function() {
                return L.default
            }
        }),
        Object.defineProperty(t, "toIdentifier", {
            enumerable: !0,
            get: function() {
                return C.default
            }
        }),
        Object.defineProperty(t, "toKeyAlias", {
            enumerable: !0,
            get: function() {
                return B.default
            }
        }),
        Object.defineProperty(t, "toSequenceExpression", {
            enumerable: !0,
            get: function() {
                return w.default
            }
        }),
        Object.defineProperty(t, "toStatement", {
            enumerable: !0,
            get: function() {
                return M.default
            }
        }),
        Object.defineProperty(t, "traverse", {
            enumerable: !0,
            get: function() {
                return H.default
            }
        }),
        Object.defineProperty(t, "traverseFast", {
            enumerable: !0,
            get: function() {
                return q.default
            }
        }),
        Object.defineProperty(t, "validate", {
            enumerable: !0,
            get: function() {
                return de.default
            }
        }),
        Object.defineProperty(t, "valueToNode", {
            enumerable: !0,
            get: function() {
                return F.default
            }
        });
        var a = n(3204)
          , i = n(3205)
          , o = n(3206)
          , s = n(3216)
          , u = n(3217);
        Object.keys(u).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === u[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return u[e]
                }
            }))
        }
        ));
        var l = n(3218)
          , p = n(3219)
          , f = n(3220)
          , d = n(2642);
        Object.keys(d).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === d[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return d[e]
                }
            }))
        }
        ));
        var c = n(3222);
        Object.keys(c).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === c[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return c[e]
                }
            }))
        }
        ));
        var y = n(2664)
          , T = n(3223)
          , m = n(3224)
          , S = n(3225)
          , E = n(3226)
          , b = n(3227)
          , v = n(2845)
          , P = n(2846)
          , O = n(2847)
          , A = n(2848)
          , g = n(2849)
          , x = n(3228)
          , D = n(3229);
        Object.keys(D).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === D[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return D[e]
                }
            }))
        }
        ));
        var I = n(2663);
        Object.keys(I).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === I[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return I[e]
                }
            }))
        }
        ));
        var _ = n(3230)
          , h = n(3231)
          , N = n(2850)
          , j = n(3232)
          , L = n(3233)
          , C = n(2851)
          , B = n(3234)
          , w = n(3235)
          , M = n(3237)
          , F = n(3238)
          , R = n(2646);
        Object.keys(R).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === R[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return R[e]
                }
            }))
        }
        ));
        var K = n(3239)
          , V = n(3240)
          , k = n(3241)
          , Y = n(2854)
          , U = n(2852)
          , X = n(2844)
          , W = n(2697)
          , J = n(3242)
          , H = n(3243);
        Object.keys(H).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === H[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return H[e]
                }
            }))
        }
        ));
        var q = n(2853)
          , G = n(2723)
          , z = n(2680)
          , Q = n(3244)
          , $ = n(3245)
          , Z = n(3246)
          , ee = n(2855)
          , te = n(2843)
          , ne = n(3247)
          , re = n(2841)
          , ae = n(3248)
          , ie = n(3249)
          , oe = n(3250)
          , se = n(2724)
          , ue = n(3251)
          , le = n(2681)
          , pe = n(3252)
          , fe = n(2839)
          , de = n(2726)
          , ce = n(2838)
          , ye = n(2638);
        Object.keys(ye).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === ye[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return ye[e]
                }
            }))
        }
        ));
        var Te = n(3253);
        Object.keys(Te).forEach((function(e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === Te[e] || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return Te[e]
                }
            }))
        }
        ));
        var me = {
            isReactComponent: a.default,
            isCompatTag: i.default,
            buildChildren: o.default
        };
        t.react = me
    },
    3204: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = (0,
        n(2838).default)("React.Component");
        t.default = r
    },
    3205: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return !!e && /^[a-z]/.test(e)
        }
    },
    3206: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            for (var t = [], n = 0; n < e.children.length; n++) {
                var i = e.children[n];
                (0,
                r.isJSXText)(i) ? (0,
                a.default)(i, t) : ((0,
                r.isJSXExpressionContainer)(i) && (i = i.expression),
                (0,
                r.isJSXEmptyExpression)(i) || t.push(i))
            }
            return t
        }
        ;
        var r = n(2638)
          , a = n(3207)
    },
    3207: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            for (var n = e.value.split(/\r\n|\n|\r/), a = 0, i = 0; i < n.length; i++)
                n[i].match(/[^ \t]/) && (a = i);
            for (var o = "", s = 0; s < n.length; s++) {
                var u = n[s]
                  , l = 0 === s
                  , p = s === n.length - 1
                  , f = s === a
                  , d = u.replace(/\t/g, " ");
                l || (d = d.replace(/^[ ]+/, "")),
                p || (d = d.replace(/[ ]+$/, "")),
                d && (f || (d += " "),
                o += d)
            }
            o && t.push((0,
            r.stringLiteral)(o))
        }
        ;
        var r = n(2642)
    },
    3208: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function() {
            var e = this
              , t = r.BUILDER_KEYS[e]
              , n = arguments.length;
            if (n > t.length)
                throw new Error("".concat(e, ": Too many arguments passed. Received ").concat(n, " but can receive no more than ").concat(t.length));
            for (var i = {
                type: e
            }, o = 0; o < t.length; ++o) {
                var s = t[o]
                  , u = r.NODE_FIELDS[e][s]
                  , l = void 0;
                o < n && (l = arguments[o]),
                void 0 === l && (l = Array.isArray(u.default) ? [] : u.default),
                i[s] = l
            }
            for (var p in i)
                (0,
                a.default)(i, p, i[p]);
            return i
        }
        ;
        var r = n(2646)
          , a = n(2726)
    },
    3209: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isIdentifierStart = p,
        t.isIdentifierChar = f,
        t.isIdentifierName = function(e) {
            for (var t = !0, n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (55296 === (64512 & r) && n + 1 < e.length) {
                    var a = e.charCodeAt(++n);
                    56320 === (64512 & a) && (r = 65536 + ((1023 & r) << 10) + (1023 & a))
                }
                if (t) {
                    if (t = !1,
                    !p(r))
                        return !1
                } else if (!f(r))
                    return !1
            }
            return !t
        }
        ;
        var r = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc"
          , a = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f"
          , i = new RegExp("[" + r + "]")
          , o = new RegExp("[" + r + a + "]");
        r = a = null;
        var s = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938]
          , u = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
        function l(e, t) {
            for (var n = 65536, r = 0, a = t.length; r < a; r += 2) {
                if ((n += t[r]) > e)
                    return !1;
                if ((n += t[r + 1]) >= e)
                    return !0
            }
            return !1
        }
        function p(e) {
            return e < 65 ? 36 === e : e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && i.test(String.fromCharCode(e)) : l(e, s)))
        }
        function f(e) {
            return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && o.test(String.fromCharCode(e)) : l(e, s) || l(e, u))))
        }
    },
    3210: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isReservedWord = u,
        t.isStrictReservedWord = l,
        t.isStrictBindOnlyReservedWord = p,
        t.isStrictBindReservedWord = function(e, t) {
            return l(e, t) || p(e)
        }
        ,
        t.isKeyword = function(e) {
            return i.has(e)
        }
        ;
        var r = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"]
          , a = ["eval", "arguments"]
          , i = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"])
          , o = new Set(r)
          , s = new Set(a);
        function u(e, t) {
            return t && "await" === e || "enum" === e
        }
        function l(e, t) {
            return u(e, t) || o.has(e)
        }
        function p(e) {
            return s.has(e)
        }
    },
    3211: function(e, t, n) {
        "use strict";
        var r = n(2655)
          , a = (0,
        r.defineAliasedType)("Flow")
          , i = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "TypeParameterDeclaration";
            a(e, {
                builder: ["id", "typeParameters", "extends", "body"],
                visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
                aliases: ["FlowDeclaration", "Statement", "Declaration"],
                fields: {
                    id: (0,
                    r.validateType)("Identifier"),
                    typeParameters: (0,
                    r.validateOptionalType)(t),
                    extends: (0,
                    r.validateOptional)((0,
                    r.arrayOfType)("InterfaceExtends")),
                    mixins: (0,
                    r.validateOptional)((0,
                    r.arrayOfType)("InterfaceExtends")),
                    implements: (0,
                    r.validateOptional)((0,
                    r.arrayOfType)("ClassImplements")),
                    body: (0,
                    r.validateType)("ObjectTypeAnnotation")
                }
            })
        };
        a("AnyTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("ArrayTypeAnnotation", {
            visitor: ["elementType"],
            aliases: ["FlowType"],
            fields: {
                elementType: (0,
                r.validateType)("FlowType")
            }
        }),
        a("BooleanTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("BooleanLiteralTypeAnnotation", {
            builder: ["value"],
            aliases: ["FlowType"],
            fields: {
                value: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("NullLiteralTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("ClassImplements", {
            visitor: ["id", "typeParameters"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterInstantiation")
            }
        }),
        i("DeclareClass"),
        a("DeclareFunction", {
            visitor: ["id"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                predicate: (0,
                r.validateOptionalType)("DeclaredPredicate")
            }
        }),
        i("DeclareInterface"),
        a("DeclareModule", {
            builder: ["id", "body", "kind"],
            visitor: ["id", "body"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)(["Identifier", "StringLiteral"]),
                body: (0,
                r.validateType)("BlockStatement"),
                kind: (0,
                r.validateOptional)((0,
                r.assertOneOf)("CommonJS", "ES"))
            }
        }),
        a("DeclareModuleExports", {
            visitor: ["typeAnnotation"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("TypeAnnotation")
            }
        }),
        a("DeclareTypeAlias", {
            visitor: ["id", "typeParameters", "right"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterDeclaration"),
                right: (0,
                r.validateType)("FlowType")
            }
        }),
        a("DeclareOpaqueType", {
            visitor: ["id", "typeParameters", "supertype"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterDeclaration"),
                supertype: (0,
                r.validateOptionalType)("FlowType"),
                impltype: (0,
                r.validateOptionalType)("FlowType")
            }
        }),
        a("DeclareVariable", {
            visitor: ["id"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier")
            }
        }),
        a("DeclareExportDeclaration", {
            visitor: ["declaration", "specifiers", "source"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                declaration: (0,
                r.validateOptionalType)("Flow"),
                specifiers: (0,
                r.validateOptional)((0,
                r.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
                source: (0,
                r.validateOptionalType)("StringLiteral"),
                default: (0,
                r.validateOptional)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("DeclareExportAllDeclaration", {
            visitor: ["source"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                source: (0,
                r.validateType)("StringLiteral"),
                exportKind: (0,
                r.validateOptional)((0,
                r.assertOneOf)("type", "value"))
            }
        }),
        a("DeclaredPredicate", {
            visitor: ["value"],
            aliases: ["FlowPredicate"],
            fields: {
                value: (0,
                r.validateType)("Flow")
            }
        }),
        a("ExistsTypeAnnotation", {
            aliases: ["FlowType"]
        }),
        a("FunctionTypeAnnotation", {
            visitor: ["typeParameters", "params", "rest", "returnType"],
            aliases: ["FlowType"],
            fields: {
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterDeclaration"),
                params: (0,
                r.validate)((0,
                r.arrayOfType)("FunctionTypeParam")),
                rest: (0,
                r.validateOptionalType)("FunctionTypeParam"),
                this: (0,
                r.validateOptionalType)("FunctionTypeParam"),
                returnType: (0,
                r.validateType)("FlowType")
            }
        }),
        a("FunctionTypeParam", {
            visitor: ["name", "typeAnnotation"],
            fields: {
                name: (0,
                r.validateOptionalType)("Identifier"),
                typeAnnotation: (0,
                r.validateType)("FlowType"),
                optional: (0,
                r.validateOptional)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("GenericTypeAnnotation", {
            visitor: ["id", "typeParameters"],
            aliases: ["FlowType"],
            fields: {
                id: (0,
                r.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterInstantiation")
            }
        }),
        a("InferredPredicate", {
            aliases: ["FlowPredicate"]
        }),
        a("InterfaceExtends", {
            visitor: ["id", "typeParameters"],
            fields: {
                id: (0,
                r.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterInstantiation")
            }
        }),
        i("InterfaceDeclaration"),
        a("InterfaceTypeAnnotation", {
            visitor: ["extends", "body"],
            aliases: ["FlowType"],
            fields: {
                extends: (0,
                r.validateOptional)((0,
                r.arrayOfType)("InterfaceExtends")),
                body: (0,
                r.validateType)("ObjectTypeAnnotation")
            }
        }),
        a("IntersectionTypeAnnotation", {
            visitor: ["types"],
            aliases: ["FlowType"],
            fields: {
                types: (0,
                r.validate)((0,
                r.arrayOfType)("FlowType"))
            }
        }),
        a("MixedTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("EmptyTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("NullableTypeAnnotation", {
            visitor: ["typeAnnotation"],
            aliases: ["FlowType"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("FlowType")
            }
        }),
        a("NumberLiteralTypeAnnotation", {
            builder: ["value"],
            aliases: ["FlowType"],
            fields: {
                value: (0,
                r.validate)((0,
                r.assertValueType)("number"))
            }
        }),
        a("NumberTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("ObjectTypeAnnotation", {
            visitor: ["properties", "indexers", "callProperties", "internalSlots"],
            aliases: ["FlowType"],
            builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
            fields: {
                properties: (0,
                r.validate)((0,
                r.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
                indexers: (0,
                r.validateOptional)((0,
                r.arrayOfType)("ObjectTypeIndexer")),
                callProperties: (0,
                r.validateOptional)((0,
                r.arrayOfType)("ObjectTypeCallProperty")),
                internalSlots: (0,
                r.validateOptional)((0,
                r.arrayOfType)("ObjectTypeInternalSlot")),
                exact: {
                    validate: (0,
                    r.assertValueType)("boolean"),
                    default: !1
                },
                inexact: (0,
                r.validateOptional)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("ObjectTypeInternalSlot", {
            visitor: ["id", "value", "optional", "static", "method"],
            aliases: ["UserWhitespacable"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                value: (0,
                r.validateType)("FlowType"),
                optional: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                static: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                method: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("ObjectTypeCallProperty", {
            visitor: ["value"],
            aliases: ["UserWhitespacable"],
            fields: {
                value: (0,
                r.validateType)("FlowType"),
                static: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("ObjectTypeIndexer", {
            visitor: ["id", "key", "value", "variance"],
            aliases: ["UserWhitespacable"],
            fields: {
                id: (0,
                r.validateOptionalType)("Identifier"),
                key: (0,
                r.validateType)("FlowType"),
                value: (0,
                r.validateType)("FlowType"),
                static: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                variance: (0,
                r.validateOptionalType)("Variance")
            }
        }),
        a("ObjectTypeProperty", {
            visitor: ["key", "value", "variance"],
            aliases: ["UserWhitespacable"],
            fields: {
                key: (0,
                r.validateType)(["Identifier", "StringLiteral"]),
                value: (0,
                r.validateType)("FlowType"),
                kind: (0,
                r.validate)((0,
                r.assertOneOf)("init", "get", "set")),
                static: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                proto: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                optional: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                variance: (0,
                r.validateOptionalType)("Variance"),
                method: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("ObjectTypeSpreadProperty", {
            visitor: ["argument"],
            aliases: ["UserWhitespacable"],
            fields: {
                argument: (0,
                r.validateType)("FlowType")
            }
        }),
        a("OpaqueType", {
            visitor: ["id", "typeParameters", "supertype", "impltype"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterDeclaration"),
                supertype: (0,
                r.validateOptionalType)("FlowType"),
                impltype: (0,
                r.validateType)("FlowType")
            }
        }),
        a("QualifiedTypeIdentifier", {
            visitor: ["id", "qualification"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                qualification: (0,
                r.validateType)(["Identifier", "QualifiedTypeIdentifier"])
            }
        }),
        a("StringLiteralTypeAnnotation", {
            builder: ["value"],
            aliases: ["FlowType"],
            fields: {
                value: (0,
                r.validate)((0,
                r.assertValueType)("string"))
            }
        }),
        a("StringTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("SymbolTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("ThisTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("TupleTypeAnnotation", {
            visitor: ["types"],
            aliases: ["FlowType"],
            fields: {
                types: (0,
                r.validate)((0,
                r.arrayOfType)("FlowType"))
            }
        }),
        a("TypeofTypeAnnotation", {
            visitor: ["argument"],
            aliases: ["FlowType"],
            fields: {
                argument: (0,
                r.validateType)("FlowType")
            }
        }),
        a("TypeAlias", {
            visitor: ["id", "typeParameters", "right"],
            aliases: ["FlowDeclaration", "Statement", "Declaration"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TypeParameterDeclaration"),
                right: (0,
                r.validateType)("FlowType")
            }
        }),
        a("TypeAnnotation", {
            visitor: ["typeAnnotation"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("FlowType")
            }
        }),
        a("TypeCastExpression", {
            visitor: ["expression", "typeAnnotation"],
            aliases: ["ExpressionWrapper", "Expression"],
            fields: {
                expression: (0,
                r.validateType)("Expression"),
                typeAnnotation: (0,
                r.validateType)("TypeAnnotation")
            }
        }),
        a("TypeParameter", {
            visitor: ["bound", "default", "variance"],
            fields: {
                name: (0,
                r.validate)((0,
                r.assertValueType)("string")),
                bound: (0,
                r.validateOptionalType)("TypeAnnotation"),
                default: (0,
                r.validateOptionalType)("FlowType"),
                variance: (0,
                r.validateOptionalType)("Variance")
            }
        }),
        a("TypeParameterDeclaration", {
            visitor: ["params"],
            fields: {
                params: (0,
                r.validate)((0,
                r.arrayOfType)("TypeParameter"))
            }
        }),
        a("TypeParameterInstantiation", {
            visitor: ["params"],
            fields: {
                params: (0,
                r.validate)((0,
                r.arrayOfType)("FlowType"))
            }
        }),
        a("UnionTypeAnnotation", {
            visitor: ["types"],
            aliases: ["FlowType"],
            fields: {
                types: (0,
                r.validate)((0,
                r.arrayOfType)("FlowType"))
            }
        }),
        a("Variance", {
            builder: ["kind"],
            fields: {
                kind: (0,
                r.validate)((0,
                r.assertOneOf)("minus", "plus"))
            }
        }),
        a("VoidTypeAnnotation", {
            aliases: ["FlowType", "FlowBaseAnnotation"]
        }),
        a("EnumDeclaration", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "body"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                body: (0,
                r.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
            }
        }),
        a("EnumBooleanBody", {
            aliases: ["EnumBody"],
            visitor: ["members"],
            fields: {
                explicitType: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                members: (0,
                r.validateArrayOfType)("EnumBooleanMember"),
                hasUnknownMembers: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("EnumNumberBody", {
            aliases: ["EnumBody"],
            visitor: ["members"],
            fields: {
                explicitType: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                members: (0,
                r.validateArrayOfType)("EnumNumberMember"),
                hasUnknownMembers: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("EnumStringBody", {
            aliases: ["EnumBody"],
            visitor: ["members"],
            fields: {
                explicitType: (0,
                r.validate)((0,
                r.assertValueType)("boolean")),
                members: (0,
                r.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"]),
                hasUnknownMembers: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("EnumSymbolBody", {
            aliases: ["EnumBody"],
            visitor: ["members"],
            fields: {
                members: (0,
                r.validateArrayOfType)("EnumDefaultedMember"),
                hasUnknownMembers: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        }),
        a("EnumBooleanMember", {
            aliases: ["EnumMember"],
            visitor: ["id"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                init: (0,
                r.validateType)("BooleanLiteral")
            }
        }),
        a("EnumNumberMember", {
            aliases: ["EnumMember"],
            visitor: ["id", "init"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                init: (0,
                r.validateType)("NumericLiteral")
            }
        }),
        a("EnumStringMember", {
            aliases: ["EnumMember"],
            visitor: ["id", "init"],
            fields: {
                id: (0,
                r.validateType)("Identifier"),
                init: (0,
                r.validateType)("StringLiteral")
            }
        }),
        a("EnumDefaultedMember", {
            aliases: ["EnumMember"],
            visitor: ["id"],
            fields: {
                id: (0,
                r.validateType)("Identifier")
            }
        }),
        a("IndexedAccessType", {
            visitor: ["objectType", "indexType"],
            aliases: ["FlowType"],
            fields: {
                objectType: (0,
                r.validateType)("FlowType"),
                indexType: (0,
                r.validateType)("FlowType")
            }
        }),
        a("OptionalIndexedAccessType", {
            visitor: ["objectType", "indexType"],
            aliases: ["FlowType"],
            fields: {
                objectType: (0,
                r.validateType)("FlowType"),
                indexType: (0,
                r.validateType)("FlowType"),
                optional: (0,
                r.validate)((0,
                r.assertValueType)("boolean"))
            }
        })
    },
    3212: function(e, t, n) {
        "use strict";
        var r = n(2655)
          , a = (0,
        r.defineAliasedType)("JSX");
        a("JSXAttribute", {
            visitor: ["name", "value"],
            aliases: ["Immutable"],
            fields: {
                name: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
                },
                value: {
                    optional: !0,
                    validate: (0,
                    r.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
                }
            }
        }),
        a("JSXClosingElement", {
            visitor: ["name"],
            aliases: ["Immutable"],
            fields: {
                name: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
                }
            }
        }),
        a("JSXElement", {
            builder: ["openingElement", "closingElement", "children", "selfClosing"],
            visitor: ["openingElement", "children", "closingElement"],
            aliases: ["Immutable", "Expression"],
            fields: {
                openingElement: {
                    validate: (0,
                    r.assertNodeType)("JSXOpeningElement")
                },
                closingElement: {
                    optional: !0,
                    validate: (0,
                    r.assertNodeType)("JSXClosingElement")
                },
                children: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
                },
                selfClosing: {
                    validate: (0,
                    r.assertValueType)("boolean"),
                    optional: !0
                }
            }
        }),
        a("JSXEmptyExpression", {}),
        a("JSXExpressionContainer", {
            visitor: ["expression"],
            aliases: ["Immutable"],
            fields: {
                expression: {
                    validate: (0,
                    r.assertNodeType)("Expression", "JSXEmptyExpression")
                }
            }
        }),
        a("JSXSpreadChild", {
            visitor: ["expression"],
            aliases: ["Immutable"],
            fields: {
                expression: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            }
        }),
        a("JSXIdentifier", {
            builder: ["name"],
            fields: {
                name: {
                    validate: (0,
                    r.assertValueType)("string")
                }
            }
        }),
        a("JSXMemberExpression", {
            visitor: ["object", "property"],
            fields: {
                object: {
                    validate: (0,
                    r.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
                },
                property: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier")
                }
            }
        }),
        a("JSXNamespacedName", {
            visitor: ["namespace", "name"],
            fields: {
                namespace: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier")
                },
                name: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier")
                }
            }
        }),
        a("JSXOpeningElement", {
            builder: ["name", "attributes", "selfClosing"],
            visitor: ["name", "attributes"],
            aliases: ["Immutable"],
            fields: {
                name: {
                    validate: (0,
                    r.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
                },
                selfClosing: {
                    default: !1
                },
                attributes: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
                },
                typeParameters: {
                    validate: (0,
                    r.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
                    optional: !0
                }
            }
        }),
        a("JSXSpreadAttribute", {
            visitor: ["argument"],
            fields: {
                argument: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            }
        }),
        a("JSXText", {
            aliases: ["Immutable"],
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    r.assertValueType)("string")
                }
            }
        }),
        a("JSXFragment", {
            builder: ["openingFragment", "closingFragment", "children"],
            visitor: ["openingFragment", "children", "closingFragment"],
            aliases: ["Immutable", "Expression"],
            fields: {
                openingFragment: {
                    validate: (0,
                    r.assertNodeType)("JSXOpeningFragment")
                },
                closingFragment: {
                    validate: (0,
                    r.assertNodeType)("JSXClosingFragment")
                },
                children: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
                }
            }
        }),
        a("JSXOpeningFragment", {
            aliases: ["Immutable"]
        }),
        a("JSXClosingFragment", {
            aliases: ["Immutable"]
        })
    },
    3213: function(e, t, n) {
        "use strict";
        var r = n(806)
          , a = n(2655)
          , i = n(2842)
          , o = (0,
        a.defineAliasedType)("Miscellaneous");
        o("Noop", {
            visitor: []
        }),
        o("Placeholder", {
            visitor: [],
            builder: ["expectedNode", "name"],
            fields: {
                name: {
                    validate: (0,
                    a.assertNodeType)("Identifier")
                },
                expectedNode: {
                    validate: a.assertOneOf.apply(void 0, r(i.PLACEHOLDERS))
                }
            }
        }),
        o("V8IntrinsicIdentifier", {
            builder: ["name"],
            fields: {
                name: {
                    validate: (0,
                    a.assertValueType)("string")
                }
            }
        })
    },
    3214: function(e, t, n) {
        "use strict";
        var r = n(2655);
        (0,
        r.default)("ArgumentPlaceholder", {}),
        (0,
        r.default)("BindExpression", {
            visitor: ["object", "callee"],
            aliases: ["Expression"],
            fields: Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0
            }).BABEL_TYPES_8_BREAKING ? {
                object: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                },
                callee: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            } : {
                object: {
                    validate: Object.assign((function() {}
                    ), {
                        oneOfNodeTypes: ["Expression"]
                    })
                },
                callee: {
                    validate: Object.assign((function() {}
                    ), {
                        oneOfNodeTypes: ["Expression"]
                    })
                }
            }
        }),
        (0,
        r.default)("ImportAttribute", {
            visitor: ["key", "value"],
            fields: {
                key: {
                    validate: (0,
                    r.assertNodeType)("Identifier", "StringLiteral")
                },
                value: {
                    validate: (0,
                    r.assertNodeType)("StringLiteral")
                }
            }
        }),
        (0,
        r.default)("Decorator", {
            visitor: ["expression"],
            fields: {
                expression: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            }
        }),
        (0,
        r.default)("DoExpression", {
            visitor: ["body"],
            builder: ["body", "async"],
            aliases: ["Expression"],
            fields: {
                body: {
                    validate: (0,
                    r.assertNodeType)("BlockStatement")
                },
                async: {
                    validate: (0,
                    r.assertValueType)("boolean"),
                    default: !1
                }
            }
        }),
        (0,
        r.default)("ExportDefaultSpecifier", {
            visitor: ["exported"],
            aliases: ["ModuleSpecifier"],
            fields: {
                exported: {
                    validate: (0,
                    r.assertNodeType)("Identifier")
                }
            }
        }),
        (0,
        r.default)("RecordExpression", {
            visitor: ["properties"],
            aliases: ["Expression"],
            fields: {
                properties: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("ObjectProperty", "SpreadElement")))
                }
            }
        }),
        (0,
        r.default)("TupleExpression", {
            fields: {
                elements: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("Expression", "SpreadElement"))),
                    default: []
                }
            },
            visitor: ["elements"],
            aliases: ["Expression"]
        }),
        (0,
        r.default)("DecimalLiteral", {
            builder: ["value"],
            fields: {
                value: {
                    validate: (0,
                    r.assertValueType)("string")
                }
            },
            aliases: ["Expression", "Pureish", "Literal", "Immutable"]
        }),
        (0,
        r.default)("ModuleExpression", {
            visitor: ["body"],
            fields: {
                body: {
                    validate: (0,
                    r.assertNodeType)("Program")
                }
            },
            aliases: ["Expression"]
        }),
        (0,
        r.default)("TopicReference", {
            aliases: ["Expression"]
        }),
        (0,
        r.default)("PipelineTopicExpression", {
            builder: ["expression"],
            visitor: ["expression"],
            fields: {
                expression: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            },
            aliases: ["Expression"]
        }),
        (0,
        r.default)("PipelineBareFunction", {
            builder: ["callee"],
            visitor: ["callee"],
            fields: {
                callee: {
                    validate: (0,
                    r.assertNodeType)("Expression")
                }
            },
            aliases: ["Expression"]
        }),
        (0,
        r.default)("PipelinePrimaryTopicReference", {
            aliases: ["Expression"]
        })
    },
    3215: function(e, t, n) {
        "use strict";
        var r = n(2655)
          , a = n(2840)
          , i = n(2680)
          , o = (0,
        r.defineAliasedType)("TypeScript")
          , s = (0,
        r.assertValueType)("boolean")
          , u = {
            returnType: {
                validate: (0,
                r.assertNodeType)("TSTypeAnnotation", "Noop"),
                optional: !0
            },
            typeParameters: {
                validate: (0,
                r.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
                optional: !0
            }
        };
        o("TSParameterProperty", {
            aliases: ["LVal"],
            visitor: ["parameter"],
            fields: {
                accessibility: {
                    validate: (0,
                    r.assertOneOf)("public", "private", "protected"),
                    optional: !0
                },
                readonly: {
                    validate: (0,
                    r.assertValueType)("boolean"),
                    optional: !0
                },
                parameter: {
                    validate: (0,
                    r.assertNodeType)("Identifier", "AssignmentPattern")
                },
                override: {
                    validate: (0,
                    r.assertValueType)("boolean"),
                    optional: !0
                },
                decorators: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("Decorator"))),
                    optional: !0
                }
            }
        }),
        o("TSDeclareFunction", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "typeParameters", "params", "returnType"],
            fields: Object.assign({}, a.functionDeclarationCommon, u)
        }),
        o("TSDeclareMethod", {
            visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
            fields: Object.assign({}, a.classMethodOrDeclareMethodCommon, u)
        }),
        o("TSQualifiedName", {
            aliases: ["TSEntityName"],
            visitor: ["left", "right"],
            fields: {
                left: (0,
                r.validateType)("TSEntityName"),
                right: (0,
                r.validateType)("Identifier")
            }
        });
        var l = {
            typeParameters: (0,
            r.validateOptionalType)("TSTypeParameterDeclaration"),
            parameters: (0,
            r.validateArrayOfType)(["Identifier", "RestElement"]),
            typeAnnotation: (0,
            r.validateOptionalType)("TSTypeAnnotation")
        }
          , p = {
            aliases: ["TSTypeElement"],
            visitor: ["typeParameters", "parameters", "typeAnnotation"],
            fields: l
        };
        o("TSCallSignatureDeclaration", p),
        o("TSConstructSignatureDeclaration", p);
        var f = {
            key: (0,
            r.validateType)("Expression"),
            computed: (0,
            r.validate)(s),
            optional: (0,
            r.validateOptional)(s)
        };
        o("TSPropertySignature", {
            aliases: ["TSTypeElement"],
            visitor: ["key", "typeAnnotation", "initializer"],
            fields: Object.assign({}, f, {
                readonly: (0,
                r.validateOptional)(s),
                typeAnnotation: (0,
                r.validateOptionalType)("TSTypeAnnotation"),
                initializer: (0,
                r.validateOptionalType)("Expression"),
                kind: {
                    validate: (0,
                    r.assertOneOf)("get", "set")
                }
            })
        }),
        o("TSMethodSignature", {
            aliases: ["TSTypeElement"],
            visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
            fields: Object.assign({}, l, f, {
                kind: {
                    validate: (0,
                    r.assertOneOf)("method", "get", "set")
                }
            })
        }),
        o("TSIndexSignature", {
            aliases: ["TSTypeElement"],
            visitor: ["parameters", "typeAnnotation"],
            fields: {
                readonly: (0,
                r.validateOptional)(s),
                static: (0,
                r.validateOptional)(s),
                parameters: (0,
                r.validateArrayOfType)("Identifier"),
                typeAnnotation: (0,
                r.validateOptionalType)("TSTypeAnnotation")
            }
        });
        for (var d = 0, c = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"]; d < c.length; d++) {
            o(c[d], {
                aliases: ["TSType", "TSBaseType"],
                visitor: [],
                fields: {}
            })
        }
        o("TSThisType", {
            aliases: ["TSType", "TSBaseType"],
            visitor: [],
            fields: {}
        });
        var y = {
            aliases: ["TSType"],
            visitor: ["typeParameters", "parameters", "typeAnnotation"]
        };
        o("TSFunctionType", Object.assign({}, y, {
            fields: l
        })),
        o("TSConstructorType", Object.assign({}, y, {
            fields: Object.assign({}, l, {
                abstract: (0,
                r.validateOptional)(s)
            })
        })),
        o("TSTypeReference", {
            aliases: ["TSType"],
            visitor: ["typeName", "typeParameters"],
            fields: {
                typeName: (0,
                r.validateType)("TSEntityName"),
                typeParameters: (0,
                r.validateOptionalType)("TSTypeParameterInstantiation")
            }
        }),
        o("TSTypePredicate", {
            aliases: ["TSType"],
            visitor: ["parameterName", "typeAnnotation"],
            builder: ["parameterName", "typeAnnotation", "asserts"],
            fields: {
                parameterName: (0,
                r.validateType)(["Identifier", "TSThisType"]),
                typeAnnotation: (0,
                r.validateOptionalType)("TSTypeAnnotation"),
                asserts: (0,
                r.validateOptional)(s)
            }
        }),
        o("TSTypeQuery", {
            aliases: ["TSType"],
            visitor: ["exprName"],
            fields: {
                exprName: (0,
                r.validateType)(["TSEntityName", "TSImportType"])
            }
        }),
        o("TSTypeLiteral", {
            aliases: ["TSType"],
            visitor: ["members"],
            fields: {
                members: (0,
                r.validateArrayOfType)("TSTypeElement")
            }
        }),
        o("TSArrayType", {
            aliases: ["TSType"],
            visitor: ["elementType"],
            fields: {
                elementType: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSTupleType", {
            aliases: ["TSType"],
            visitor: ["elementTypes"],
            fields: {
                elementTypes: (0,
                r.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
            }
        }),
        o("TSOptionalType", {
            aliases: ["TSType"],
            visitor: ["typeAnnotation"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSRestType", {
            aliases: ["TSType"],
            visitor: ["typeAnnotation"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSNamedTupleMember", {
            visitor: ["label", "elementType"],
            builder: ["label", "elementType", "optional"],
            fields: {
                label: (0,
                r.validateType)("Identifier"),
                optional: {
                    validate: s,
                    default: !1
                },
                elementType: (0,
                r.validateType)("TSType")
            }
        });
        var T = {
            aliases: ["TSType"],
            visitor: ["types"],
            fields: {
                types: (0,
                r.validateArrayOfType)("TSType")
            }
        };
        o("TSUnionType", T),
        o("TSIntersectionType", T),
        o("TSConditionalType", {
            aliases: ["TSType"],
            visitor: ["checkType", "extendsType", "trueType", "falseType"],
            fields: {
                checkType: (0,
                r.validateType)("TSType"),
                extendsType: (0,
                r.validateType)("TSType"),
                trueType: (0,
                r.validateType)("TSType"),
                falseType: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSInferType", {
            aliases: ["TSType"],
            visitor: ["typeParameter"],
            fields: {
                typeParameter: (0,
                r.validateType)("TSTypeParameter")
            }
        }),
        o("TSParenthesizedType", {
            aliases: ["TSType"],
            visitor: ["typeAnnotation"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSTypeOperator", {
            aliases: ["TSType"],
            visitor: ["typeAnnotation"],
            fields: {
                operator: (0,
                r.validate)((0,
                r.assertValueType)("string")),
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSIndexedAccessType", {
            aliases: ["TSType"],
            visitor: ["objectType", "indexType"],
            fields: {
                objectType: (0,
                r.validateType)("TSType"),
                indexType: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSMappedType", {
            aliases: ["TSType"],
            visitor: ["typeParameter", "typeAnnotation", "nameType"],
            fields: {
                readonly: (0,
                r.validateOptional)(s),
                typeParameter: (0,
                r.validateType)("TSTypeParameter"),
                optional: (0,
                r.validateOptional)(s),
                typeAnnotation: (0,
                r.validateOptionalType)("TSType"),
                nameType: (0,
                r.validateOptionalType)("TSType")
            }
        }),
        o("TSLiteralType", {
            aliases: ["TSType", "TSBaseType"],
            visitor: ["literal"],
            fields: {
                literal: {
                    validate: function() {
                        var e = (0,
                        r.assertNodeType)("NumericLiteral", "BigIntLiteral")
                          , t = (0,
                        r.assertOneOf)("-")
                          , n = (0,
                        r.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral");
                        function a(r, a, o) {
                            (0,
                            i.default)("UnaryExpression", o) ? (t(o, "operator", o.operator),
                            e(o, "argument", o.argument)) : n(r, a, o)
                        }
                        return a.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "UnaryExpression"],
                        a
                    }()
                }
            }
        }),
        o("TSExpressionWithTypeArguments", {
            aliases: ["TSType"],
            visitor: ["expression", "typeParameters"],
            fields: {
                expression: (0,
                r.validateType)("TSEntityName"),
                typeParameters: (0,
                r.validateOptionalType)("TSTypeParameterInstantiation")
            }
        }),
        o("TSInterfaceDeclaration", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "typeParameters", "extends", "body"],
            fields: {
                declare: (0,
                r.validateOptional)(s),
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TSTypeParameterDeclaration"),
                extends: (0,
                r.validateOptional)((0,
                r.arrayOfType)("TSExpressionWithTypeArguments")),
                body: (0,
                r.validateType)("TSInterfaceBody")
            }
        }),
        o("TSInterfaceBody", {
            visitor: ["body"],
            fields: {
                body: (0,
                r.validateArrayOfType)("TSTypeElement")
            }
        }),
        o("TSTypeAliasDeclaration", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "typeParameters", "typeAnnotation"],
            fields: {
                declare: (0,
                r.validateOptional)(s),
                id: (0,
                r.validateType)("Identifier"),
                typeParameters: (0,
                r.validateOptionalType)("TSTypeParameterDeclaration"),
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSAsExpression", {
            aliases: ["Expression"],
            visitor: ["expression", "typeAnnotation"],
            fields: {
                expression: (0,
                r.validateType)("Expression"),
                typeAnnotation: (0,
                r.validateType)("TSType")
            }
        }),
        o("TSTypeAssertion", {
            aliases: ["Expression"],
            visitor: ["typeAnnotation", "expression"],
            fields: {
                typeAnnotation: (0,
                r.validateType)("TSType"),
                expression: (0,
                r.validateType)("Expression")
            }
        }),
        o("TSEnumDeclaration", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "members"],
            fields: {
                declare: (0,
                r.validateOptional)(s),
                const: (0,
                r.validateOptional)(s),
                id: (0,
                r.validateType)("Identifier"),
                members: (0,
                r.validateArrayOfType)("TSEnumMember"),
                initializer: (0,
                r.validateOptionalType)("Expression")
            }
        }),
        o("TSEnumMember", {
            visitor: ["id", "initializer"],
            fields: {
                id: (0,
                r.validateType)(["Identifier", "StringLiteral"]),
                initializer: (0,
                r.validateOptionalType)("Expression")
            }
        }),
        o("TSModuleDeclaration", {
            aliases: ["Statement", "Declaration"],
            visitor: ["id", "body"],
            fields: {
                declare: (0,
                r.validateOptional)(s),
                global: (0,
                r.validateOptional)(s),
                id: (0,
                r.validateType)(["Identifier", "StringLiteral"]),
                body: (0,
                r.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
            }
        }),
        o("TSModuleBlock", {
            aliases: ["Scopable", "Block", "BlockParent"],
            visitor: ["body"],
            fields: {
                body: (0,
                r.validateArrayOfType)("Statement")
            }
        }),
        o("TSImportType", {
            aliases: ["TSType"],
            visitor: ["argument", "qualifier", "typeParameters"],
            fields: {
                argument: (0,
                r.validateType)("StringLiteral"),
                qualifier: (0,
                r.validateOptionalType)("TSEntityName"),
                typeParameters: (0,
                r.validateOptionalType)("TSTypeParameterInstantiation")
            }
        }),
        o("TSImportEqualsDeclaration", {
            aliases: ["Statement"],
            visitor: ["id", "moduleReference"],
            fields: {
                isExport: (0,
                r.validate)(s),
                id: (0,
                r.validateType)("Identifier"),
                moduleReference: (0,
                r.validateType)(["TSEntityName", "TSExternalModuleReference"]),
                importKind: {
                    validate: (0,
                    r.assertOneOf)("type", "value"),
                    optional: !0
                }
            }
        }),
        o("TSExternalModuleReference", {
            visitor: ["expression"],
            fields: {
                expression: (0,
                r.validateType)("StringLiteral")
            }
        }),
        o("TSNonNullExpression", {
            aliases: ["Expression"],
            visitor: ["expression"],
            fields: {
                expression: (0,
                r.validateType)("Expression")
            }
        }),
        o("TSExportAssignment", {
            aliases: ["Statement"],
            visitor: ["expression"],
            fields: {
                expression: (0,
                r.validateType)("Expression")
            }
        }),
        o("TSNamespaceExportDeclaration", {
            aliases: ["Statement"],
            visitor: ["id"],
            fields: {
                id: (0,
                r.validateType)("Identifier")
            }
        }),
        o("TSTypeAnnotation", {
            visitor: ["typeAnnotation"],
            fields: {
                typeAnnotation: {
                    validate: (0,
                    r.assertNodeType)("TSType")
                }
            }
        }),
        o("TSTypeParameterInstantiation", {
            visitor: ["params"],
            fields: {
                params: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("TSType")))
                }
            }
        }),
        o("TSTypeParameterDeclaration", {
            visitor: ["params"],
            fields: {
                params: {
                    validate: (0,
                    r.chain)((0,
                    r.assertValueType)("array"), (0,
                    r.assertEach)((0,
                    r.assertNodeType)("TSTypeParameter")))
                }
            }
        }),
        o("TSTypeParameter", {
            builder: ["constraint", "default", "name"],
            visitor: ["constraint", "default"],
            fields: {
                name: {
                    validate: (0,
                    r.assertValueType)("string")
                },
                constraint: {
                    validate: (0,
                    r.assertNodeType)("TSType"),
                    optional: !0
                },
                default: {
                    validate: (0,
                    r.assertNodeType)("TSType"),
                    optional: !0
                }
            }
        })
    },
    3216: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            if (!(0,
            r.default)(e)) {
                var t, n = null != (t = null == e ? void 0 : e.type) ? t : JSON.stringify(e);
                throw new TypeError('Not a valid node of type "'.concat(n, '"'))
            }
        }
        ;
        var r = n(2843)
    },
    3217: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.assertAnyTypeAnnotation = function(e, t) {
            a("AnyTypeAnnotation", e, t)
        }
        ,
        t.assertArgumentPlaceholder = function(e, t) {
            a("ArgumentPlaceholder", e, t)
        }
        ,
        t.assertArrayExpression = function(e, t) {
            a("ArrayExpression", e, t)
        }
        ,
        t.assertArrayPattern = function(e, t) {
            a("ArrayPattern", e, t)
        }
        ,
        t.assertArrayTypeAnnotation = function(e, t) {
            a("ArrayTypeAnnotation", e, t)
        }
        ,
        t.assertArrowFunctionExpression = function(e, t) {
            a("ArrowFunctionExpression", e, t)
        }
        ,
        t.assertAssignmentExpression = function(e, t) {
            a("AssignmentExpression", e, t)
        }
        ,
        t.assertAssignmentPattern = function(e, t) {
            a("AssignmentPattern", e, t)
        }
        ,
        t.assertAwaitExpression = function(e, t) {
            a("AwaitExpression", e, t)
        }
        ,
        t.assertBigIntLiteral = function(e, t) {
            a("BigIntLiteral", e, t)
        }
        ,
        t.assertBinary = function(e, t) {
            a("Binary", e, t)
        }
        ,
        t.assertBinaryExpression = function(e, t) {
            a("BinaryExpression", e, t)
        }
        ,
        t.assertBindExpression = function(e, t) {
            a("BindExpression", e, t)
        }
        ,
        t.assertBlock = function(e, t) {
            a("Block", e, t)
        }
        ,
        t.assertBlockParent = function(e, t) {
            a("BlockParent", e, t)
        }
        ,
        t.assertBlockStatement = function(e, t) {
            a("BlockStatement", e, t)
        }
        ,
        t.assertBooleanLiteral = function(e, t) {
            a("BooleanLiteral", e, t)
        }
        ,
        t.assertBooleanLiteralTypeAnnotation = function(e, t) {
            a("BooleanLiteralTypeAnnotation", e, t)
        }
        ,
        t.assertBooleanTypeAnnotation = function(e, t) {
            a("BooleanTypeAnnotation", e, t)
        }
        ,
        t.assertBreakStatement = function(e, t) {
            a("BreakStatement", e, t)
        }
        ,
        t.assertCallExpression = function(e, t) {
            a("CallExpression", e, t)
        }
        ,
        t.assertCatchClause = function(e, t) {
            a("CatchClause", e, t)
        }
        ,
        t.assertClass = function(e, t) {
            a("Class", e, t)
        }
        ,
        t.assertClassBody = function(e, t) {
            a("ClassBody", e, t)
        }
        ,
        t.assertClassDeclaration = function(e, t) {
            a("ClassDeclaration", e, t)
        }
        ,
        t.assertClassExpression = function(e, t) {
            a("ClassExpression", e, t)
        }
        ,
        t.assertClassImplements = function(e, t) {
            a("ClassImplements", e, t)
        }
        ,
        t.assertClassMethod = function(e, t) {
            a("ClassMethod", e, t)
        }
        ,
        t.assertClassPrivateMethod = function(e, t) {
            a("ClassPrivateMethod", e, t)
        }
        ,
        t.assertClassPrivateProperty = function(e, t) {
            a("ClassPrivateProperty", e, t)
        }
        ,
        t.assertClassProperty = function(e, t) {
            a("ClassProperty", e, t)
        }
        ,
        t.assertCompletionStatement = function(e, t) {
            a("CompletionStatement", e, t)
        }
        ,
        t.assertConditional = function(e, t) {
            a("Conditional", e, t)
        }
        ,
        t.assertConditionalExpression = function(e, t) {
            a("ConditionalExpression", e, t)
        }
        ,
        t.assertContinueStatement = function(e, t) {
            a("ContinueStatement", e, t)
        }
        ,
        t.assertDebuggerStatement = function(e, t) {
            a("DebuggerStatement", e, t)
        }
        ,
        t.assertDecimalLiteral = function(e, t) {
            a("DecimalLiteral", e, t)
        }
        ,
        t.assertDeclaration = function(e, t) {
            a("Declaration", e, t)
        }
        ,
        t.assertDeclareClass = function(e, t) {
            a("DeclareClass", e, t)
        }
        ,
        t.assertDeclareExportAllDeclaration = function(e, t) {
            a("DeclareExportAllDeclaration", e, t)
        }
        ,
        t.assertDeclareExportDeclaration = function(e, t) {
            a("DeclareExportDeclaration", e, t)
        }
        ,
        t.assertDeclareFunction = function(e, t) {
            a("DeclareFunction", e, t)
        }
        ,
        t.assertDeclareInterface = function(e, t) {
            a("DeclareInterface", e, t)
        }
        ,
        t.assertDeclareModule = function(e, t) {
            a("DeclareModule", e, t)
        }
        ,
        t.assertDeclareModuleExports = function(e, t) {
            a("DeclareModuleExports", e, t)
        }
        ,
        t.assertDeclareOpaqueType = function(e, t) {
            a("DeclareOpaqueType", e, t)
        }
        ,
        t.assertDeclareTypeAlias = function(e, t) {
            a("DeclareTypeAlias", e, t)
        }
        ,
        t.assertDeclareVariable = function(e, t) {
            a("DeclareVariable", e, t)
        }
        ,
        t.assertDeclaredPredicate = function(e, t) {
            a("DeclaredPredicate", e, t)
        }
        ,
        t.assertDecorator = function(e, t) {
            a("Decorator", e, t)
        }
        ,
        t.assertDirective = function(e, t) {
            a("Directive", e, t)
        }
        ,
        t.assertDirectiveLiteral = function(e, t) {
            a("DirectiveLiteral", e, t)
        }
        ,
        t.assertDoExpression = function(e, t) {
            a("DoExpression", e, t)
        }
        ,
        t.assertDoWhileStatement = function(e, t) {
            a("DoWhileStatement", e, t)
        }
        ,
        t.assertEmptyStatement = function(e, t) {
            a("EmptyStatement", e, t)
        }
        ,
        t.assertEmptyTypeAnnotation = function(e, t) {
            a("EmptyTypeAnnotation", e, t)
        }
        ,
        t.assertEnumBody = function(e, t) {
            a("EnumBody", e, t)
        }
        ,
        t.assertEnumBooleanBody = function(e, t) {
            a("EnumBooleanBody", e, t)
        }
        ,
        t.assertEnumBooleanMember = function(e, t) {
            a("EnumBooleanMember", e, t)
        }
        ,
        t.assertEnumDeclaration = function(e, t) {
            a("EnumDeclaration", e, t)
        }
        ,
        t.assertEnumDefaultedMember = function(e, t) {
            a("EnumDefaultedMember", e, t)
        }
        ,
        t.assertEnumMember = function(e, t) {
            a("EnumMember", e, t)
        }
        ,
        t.assertEnumNumberBody = function(e, t) {
            a("EnumNumberBody", e, t)
        }
        ,
        t.assertEnumNumberMember = function(e, t) {
            a("EnumNumberMember", e, t)
        }
        ,
        t.assertEnumStringBody = function(e, t) {
            a("EnumStringBody", e, t)
        }
        ,
        t.assertEnumStringMember = function(e, t) {
            a("EnumStringMember", e, t)
        }
        ,
        t.assertEnumSymbolBody = function(e, t) {
            a("EnumSymbolBody", e, t)
        }
        ,
        t.assertExistsTypeAnnotation = function(e, t) {
            a("ExistsTypeAnnotation", e, t)
        }
        ,
        t.assertExportAllDeclaration = function(e, t) {
            a("ExportAllDeclaration", e, t)
        }
        ,
        t.assertExportDeclaration = function(e, t) {
            a("ExportDeclaration", e, t)
        }
        ,
        t.assertExportDefaultDeclaration = function(e, t) {
            a("ExportDefaultDeclaration", e, t)
        }
        ,
        t.assertExportDefaultSpecifier = function(e, t) {
            a("ExportDefaultSpecifier", e, t)
        }
        ,
        t.assertExportNamedDeclaration = function(e, t) {
            a("ExportNamedDeclaration", e, t)
        }
        ,
        t.assertExportNamespaceSpecifier = function(e, t) {
            a("ExportNamespaceSpecifier", e, t)
        }
        ,
        t.assertExportSpecifier = function(e, t) {
            a("ExportSpecifier", e, t)
        }
        ,
        t.assertExpression = function(e, t) {
            a("Expression", e, t)
        }
        ,
        t.assertExpressionStatement = function(e, t) {
            a("ExpressionStatement", e, t)
        }
        ,
        t.assertExpressionWrapper = function(e, t) {
            a("ExpressionWrapper", e, t)
        }
        ,
        t.assertFile = function(e, t) {
            a("File", e, t)
        }
        ,
        t.assertFlow = function(e, t) {
            a("Flow", e, t)
        }
        ,
        t.assertFlowBaseAnnotation = function(e, t) {
            a("FlowBaseAnnotation", e, t)
        }
        ,
        t.assertFlowDeclaration = function(e, t) {
            a("FlowDeclaration", e, t)
        }
        ,
        t.assertFlowPredicate = function(e, t) {
            a("FlowPredicate", e, t)
        }
        ,
        t.assertFlowType = function(e, t) {
            a("FlowType", e, t)
        }
        ,
        t.assertFor = function(e, t) {
            a("For", e, t)
        }
        ,
        t.assertForInStatement = function(e, t) {
            a("ForInStatement", e, t)
        }
        ,
        t.assertForOfStatement = function(e, t) {
            a("ForOfStatement", e, t)
        }
        ,
        t.assertForStatement = function(e, t) {
            a("ForStatement", e, t)
        }
        ,
        t.assertForXStatement = function(e, t) {
            a("ForXStatement", e, t)
        }
        ,
        t.assertFunction = function(e, t) {
            a("Function", e, t)
        }
        ,
        t.assertFunctionDeclaration = function(e, t) {
            a("FunctionDeclaration", e, t)
        }
        ,
        t.assertFunctionExpression = function(e, t) {
            a("FunctionExpression", e, t)
        }
        ,
        t.assertFunctionParent = function(e, t) {
            a("FunctionParent", e, t)
        }
        ,
        t.assertFunctionTypeAnnotation = function(e, t) {
            a("FunctionTypeAnnotation", e, t)
        }
        ,
        t.assertFunctionTypeParam = function(e, t) {
            a("FunctionTypeParam", e, t)
        }
        ,
        t.assertGenericTypeAnnotation = function(e, t) {
            a("GenericTypeAnnotation", e, t)
        }
        ,
        t.assertIdentifier = function(e, t) {
            a("Identifier", e, t)
        }
        ,
        t.assertIfStatement = function(e, t) {
            a("IfStatement", e, t)
        }
        ,
        t.assertImmutable = function(e, t) {
            a("Immutable", e, t)
        }
        ,
        t.assertImport = function(e, t) {
            a("Import", e, t)
        }
        ,
        t.assertImportAttribute = function(e, t) {
            a("ImportAttribute", e, t)
        }
        ,
        t.assertImportDeclaration = function(e, t) {
            a("ImportDeclaration", e, t)
        }
        ,
        t.assertImportDefaultSpecifier = function(e, t) {
            a("ImportDefaultSpecifier", e, t)
        }
        ,
        t.assertImportNamespaceSpecifier = function(e, t) {
            a("ImportNamespaceSpecifier", e, t)
        }
        ,
        t.assertImportSpecifier = function(e, t) {
            a("ImportSpecifier", e, t)
        }
        ,
        t.assertIndexedAccessType = function(e, t) {
            a("IndexedAccessType", e, t)
        }
        ,
        t.assertInferredPredicate = function(e, t) {
            a("InferredPredicate", e, t)
        }
        ,
        t.assertInterfaceDeclaration = function(e, t) {
            a("InterfaceDeclaration", e, t)
        }
        ,
        t.assertInterfaceExtends = function(e, t) {
            a("InterfaceExtends", e, t)
        }
        ,
        t.assertInterfaceTypeAnnotation = function(e, t) {
            a("InterfaceTypeAnnotation", e, t)
        }
        ,
        t.assertInterpreterDirective = function(e, t) {
            a("InterpreterDirective", e, t)
        }
        ,
        t.assertIntersectionTypeAnnotation = function(e, t) {
            a("IntersectionTypeAnnotation", e, t)
        }
        ,
        t.assertJSX = function(e, t) {
            a("JSX", e, t)
        }
        ,
        t.assertJSXAttribute = function(e, t) {
            a("JSXAttribute", e, t)
        }
        ,
        t.assertJSXClosingElement = function(e, t) {
            a("JSXClosingElement", e, t)
        }
        ,
        t.assertJSXClosingFragment = function(e, t) {
            a("JSXClosingFragment", e, t)
        }
        ,
        t.assertJSXElement = function(e, t) {
            a("JSXElement", e, t)
        }
        ,
        t.assertJSXEmptyExpression = function(e, t) {
            a("JSXEmptyExpression", e, t)
        }
        ,
        t.assertJSXExpressionContainer = function(e, t) {
            a("JSXExpressionContainer", e, t)
        }
        ,
        t.assertJSXFragment = function(e, t) {
            a("JSXFragment", e, t)
        }
        ,
        t.assertJSXIdentifier = function(e, t) {
            a("JSXIdentifier", e, t)
        }
        ,
        t.assertJSXMemberExpression = function(e, t) {
            a("JSXMemberExpression", e, t)
        }
        ,
        t.assertJSXNamespacedName = function(e, t) {
            a("JSXNamespacedName", e, t)
        }
        ,
        t.assertJSXOpeningElement = function(e, t) {
            a("JSXOpeningElement", e, t)
        }
        ,
        t.assertJSXOpeningFragment = function(e, t) {
            a("JSXOpeningFragment", e, t)
        }
        ,
        t.assertJSXSpreadAttribute = function(e, t) {
            a("JSXSpreadAttribute", e, t)
        }
        ,
        t.assertJSXSpreadChild = function(e, t) {
            a("JSXSpreadChild", e, t)
        }
        ,
        t.assertJSXText = function(e, t) {
            a("JSXText", e, t)
        }
        ,
        t.assertLVal = function(e, t) {
            a("LVal", e, t)
        }
        ,
        t.assertLabeledStatement = function(e, t) {
            a("LabeledStatement", e, t)
        }
        ,
        t.assertLiteral = function(e, t) {
            a("Literal", e, t)
        }
        ,
        t.assertLogicalExpression = function(e, t) {
            a("LogicalExpression", e, t)
        }
        ,
        t.assertLoop = function(e, t) {
            a("Loop", e, t)
        }
        ,
        t.assertMemberExpression = function(e, t) {
            a("MemberExpression", e, t)
        }
        ,
        t.assertMetaProperty = function(e, t) {
            a("MetaProperty", e, t)
        }
        ,
        t.assertMethod = function(e, t) {
            a("Method", e, t)
        }
        ,
        t.assertMiscellaneous = function(e, t) {
            a("Miscellaneous", e, t)
        }
        ,
        t.assertMixedTypeAnnotation = function(e, t) {
            a("MixedTypeAnnotation", e, t)
        }
        ,
        t.assertModuleDeclaration = function(e, t) {
            a("ModuleDeclaration", e, t)
        }
        ,
        t.assertModuleExpression = function(e, t) {
            a("ModuleExpression", e, t)
        }
        ,
        t.assertModuleSpecifier = function(e, t) {
            a("ModuleSpecifier", e, t)
        }
        ,
        t.assertNewExpression = function(e, t) {
            a("NewExpression", e, t)
        }
        ,
        t.assertNoop = function(e, t) {
            a("Noop", e, t)
        }
        ,
        t.assertNullLiteral = function(e, t) {
            a("NullLiteral", e, t)
        }
        ,
        t.assertNullLiteralTypeAnnotation = function(e, t) {
            a("NullLiteralTypeAnnotation", e, t)
        }
        ,
        t.assertNullableTypeAnnotation = function(e, t) {
            a("NullableTypeAnnotation", e, t)
        }
        ,
        t.assertNumberLiteral = function(e, t) {
            console.trace("The node type NumberLiteral has been renamed to NumericLiteral"),
            a("NumberLiteral", e, t)
        }
        ,
        t.assertNumberLiteralTypeAnnotation = function(e, t) {
            a("NumberLiteralTypeAnnotation", e, t)
        }
        ,
        t.assertNumberTypeAnnotation = function(e, t) {
            a("NumberTypeAnnotation", e, t)
        }
        ,
        t.assertNumericLiteral = function(e, t) {
            a("NumericLiteral", e, t)
        }
        ,
        t.assertObjectExpression = function(e, t) {
            a("ObjectExpression", e, t)
        }
        ,
        t.assertObjectMember = function(e, t) {
            a("ObjectMember", e, t)
        }
        ,
        t.assertObjectMethod = function(e, t) {
            a("ObjectMethod", e, t)
        }
        ,
        t.assertObjectPattern = function(e, t) {
            a("ObjectPattern", e, t)
        }
        ,
        t.assertObjectProperty = function(e, t) {
            a("ObjectProperty", e, t)
        }
        ,
        t.assertObjectTypeAnnotation = function(e, t) {
            a("ObjectTypeAnnotation", e, t)
        }
        ,
        t.assertObjectTypeCallProperty = function(e, t) {
            a("ObjectTypeCallProperty", e, t)
        }
        ,
        t.assertObjectTypeIndexer = function(e, t) {
            a("ObjectTypeIndexer", e, t)
        }
        ,
        t.assertObjectTypeInternalSlot = function(e, t) {
            a("ObjectTypeInternalSlot", e, t)
        }
        ,
        t.assertObjectTypeProperty = function(e, t) {
            a("ObjectTypeProperty", e, t)
        }
        ,
        t.assertObjectTypeSpreadProperty = function(e, t) {
            a("ObjectTypeSpreadProperty", e, t)
        }
        ,
        t.assertOpaqueType = function(e, t) {
            a("OpaqueType", e, t)
        }
        ,
        t.assertOptionalCallExpression = function(e, t) {
            a("OptionalCallExpression", e, t)
        }
        ,
        t.assertOptionalIndexedAccessType = function(e, t) {
            a("OptionalIndexedAccessType", e, t)
        }
        ,
        t.assertOptionalMemberExpression = function(e, t) {
            a("OptionalMemberExpression", e, t)
        }
        ,
        t.assertParenthesizedExpression = function(e, t) {
            a("ParenthesizedExpression", e, t)
        }
        ,
        t.assertPattern = function(e, t) {
            a("Pattern", e, t)
        }
        ,
        t.assertPatternLike = function(e, t) {
            a("PatternLike", e, t)
        }
        ,
        t.assertPipelineBareFunction = function(e, t) {
            a("PipelineBareFunction", e, t)
        }
        ,
        t.assertPipelinePrimaryTopicReference = function(e, t) {
            a("PipelinePrimaryTopicReference", e, t)
        }
        ,
        t.assertPipelineTopicExpression = function(e, t) {
            a("PipelineTopicExpression", e, t)
        }
        ,
        t.assertPlaceholder = function(e, t) {
            a("Placeholder", e, t)
        }
        ,
        t.assertPrivate = function(e, t) {
            a("Private", e, t)
        }
        ,
        t.assertPrivateName = function(e, t) {
            a("PrivateName", e, t)
        }
        ,
        t.assertProgram = function(e, t) {
            a("Program", e, t)
        }
        ,
        t.assertProperty = function(e, t) {
            a("Property", e, t)
        }
        ,
        t.assertPureish = function(e, t) {
            a("Pureish", e, t)
        }
        ,
        t.assertQualifiedTypeIdentifier = function(e, t) {
            a("QualifiedTypeIdentifier", e, t)
        }
        ,
        t.assertRecordExpression = function(e, t) {
            a("RecordExpression", e, t)
        }
        ,
        t.assertRegExpLiteral = function(e, t) {
            a("RegExpLiteral", e, t)
        }
        ,
        t.assertRegexLiteral = function(e, t) {
            console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"),
            a("RegexLiteral", e, t)
        }
        ,
        t.assertRestElement = function(e, t) {
            a("RestElement", e, t)
        }
        ,
        t.assertRestProperty = function(e, t) {
            console.trace("The node type RestProperty has been renamed to RestElement"),
            a("RestProperty", e, t)
        }
        ,
        t.assertReturnStatement = function(e, t) {
            a("ReturnStatement", e, t)
        }
        ,
        t.assertScopable = function(e, t) {
            a("Scopable", e, t)
        }
        ,
        t.assertSequenceExpression = function(e, t) {
            a("SequenceExpression", e, t)
        }
        ,
        t.assertSpreadElement = function(e, t) {
            a("SpreadElement", e, t)
        }
        ,
        t.assertSpreadProperty = function(e, t) {
            console.trace("The node type SpreadProperty has been renamed to SpreadElement"),
            a("SpreadProperty", e, t)
        }
        ,
        t.assertStandardized = function(e, t) {
            a("Standardized", e, t)
        }
        ,
        t.assertStatement = function(e, t) {
            a("Statement", e, t)
        }
        ,
        t.assertStaticBlock = function(e, t) {
            a("StaticBlock", e, t)
        }
        ,
        t.assertStringLiteral = function(e, t) {
            a("StringLiteral", e, t)
        }
        ,
        t.assertStringLiteralTypeAnnotation = function(e, t) {
            a("StringLiteralTypeAnnotation", e, t)
        }
        ,
        t.assertStringTypeAnnotation = function(e, t) {
            a("StringTypeAnnotation", e, t)
        }
        ,
        t.assertSuper = function(e, t) {
            a("Super", e, t)
        }
        ,
        t.assertSwitchCase = function(e, t) {
            a("SwitchCase", e, t)
        }
        ,
        t.assertSwitchStatement = function(e, t) {
            a("SwitchStatement", e, t)
        }
        ,
        t.assertSymbolTypeAnnotation = function(e, t) {
            a("SymbolTypeAnnotation", e, t)
        }
        ,
        t.assertTSAnyKeyword = function(e, t) {
            a("TSAnyKeyword", e, t)
        }
        ,
        t.assertTSArrayType = function(e, t) {
            a("TSArrayType", e, t)
        }
        ,
        t.assertTSAsExpression = function(e, t) {
            a("TSAsExpression", e, t)
        }
        ,
        t.assertTSBaseType = function(e, t) {
            a("TSBaseType", e, t)
        }
        ,
        t.assertTSBigIntKeyword = function(e, t) {
            a("TSBigIntKeyword", e, t)
        }
        ,
        t.assertTSBooleanKeyword = function(e, t) {
            a("TSBooleanKeyword", e, t)
        }
        ,
        t.assertTSCallSignatureDeclaration = function(e, t) {
            a("TSCallSignatureDeclaration", e, t)
        }
        ,
        t.assertTSConditionalType = function(e, t) {
            a("TSConditionalType", e, t)
        }
        ,
        t.assertTSConstructSignatureDeclaration = function(e, t) {
            a("TSConstructSignatureDeclaration", e, t)
        }
        ,
        t.assertTSConstructorType = function(e, t) {
            a("TSConstructorType", e, t)
        }
        ,
        t.assertTSDeclareFunction = function(e, t) {
            a("TSDeclareFunction", e, t)
        }
        ,
        t.assertTSDeclareMethod = function(e, t) {
            a("TSDeclareMethod", e, t)
        }
        ,
        t.assertTSEntityName = function(e, t) {
            a("TSEntityName", e, t)
        }
        ,
        t.assertTSEnumDeclaration = function(e, t) {
            a("TSEnumDeclaration", e, t)
        }
        ,
        t.assertTSEnumMember = function(e, t) {
            a("TSEnumMember", e, t)
        }
        ,
        t.assertTSExportAssignment = function(e, t) {
            a("TSExportAssignment", e, t)
        }
        ,
        t.assertTSExpressionWithTypeArguments = function(e, t) {
            a("TSExpressionWithTypeArguments", e, t)
        }
        ,
        t.assertTSExternalModuleReference = function(e, t) {
            a("TSExternalModuleReference", e, t)
        }
        ,
        t.assertTSFunctionType = function(e, t) {
            a("TSFunctionType", e, t)
        }
        ,
        t.assertTSImportEqualsDeclaration = function(e, t) {
            a("TSImportEqualsDeclaration", e, t)
        }
        ,
        t.assertTSImportType = function(e, t) {
            a("TSImportType", e, t)
        }
        ,
        t.assertTSIndexSignature = function(e, t) {
            a("TSIndexSignature", e, t)
        }
        ,
        t.assertTSIndexedAccessType = function(e, t) {
            a("TSIndexedAccessType", e, t)
        }
        ,
        t.assertTSInferType = function(e, t) {
            a("TSInferType", e, t)
        }
        ,
        t.assertTSInterfaceBody = function(e, t) {
            a("TSInterfaceBody", e, t)
        }
        ,
        t.assertTSInterfaceDeclaration = function(e, t) {
            a("TSInterfaceDeclaration", e, t)
        }
        ,
        t.assertTSIntersectionType = function(e, t) {
            a("TSIntersectionType", e, t)
        }
        ,
        t.assertTSIntrinsicKeyword = function(e, t) {
            a("TSIntrinsicKeyword", e, t)
        }
        ,
        t.assertTSLiteralType = function(e, t) {
            a("TSLiteralType", e, t)
        }
        ,
        t.assertTSMappedType = function(e, t) {
            a("TSMappedType", e, t)
        }
        ,
        t.assertTSMethodSignature = function(e, t) {
            a("TSMethodSignature", e, t)
        }
        ,
        t.assertTSModuleBlock = function(e, t) {
            a("TSModuleBlock", e, t)
        }
        ,
        t.assertTSModuleDeclaration = function(e, t) {
            a("TSModuleDeclaration", e, t)
        }
        ,
        t.assertTSNamedTupleMember = function(e, t) {
            a("TSNamedTupleMember", e, t)
        }
        ,
        t.assertTSNamespaceExportDeclaration = function(e, t) {
            a("TSNamespaceExportDeclaration", e, t)
        }
        ,
        t.assertTSNeverKeyword = function(e, t) {
            a("TSNeverKeyword", e, t)
        }
        ,
        t.assertTSNonNullExpression = function(e, t) {
            a("TSNonNullExpression", e, t)
        }
        ,
        t.assertTSNullKeyword = function(e, t) {
            a("TSNullKeyword", e, t)
        }
        ,
        t.assertTSNumberKeyword = function(e, t) {
            a("TSNumberKeyword", e, t)
        }
        ,
        t.assertTSObjectKeyword = function(e, t) {
            a("TSObjectKeyword", e, t)
        }
        ,
        t.assertTSOptionalType = function(e, t) {
            a("TSOptionalType", e, t)
        }
        ,
        t.assertTSParameterProperty = function(e, t) {
            a("TSParameterProperty", e, t)
        }
        ,
        t.assertTSParenthesizedType = function(e, t) {
            a("TSParenthesizedType", e, t)
        }
        ,
        t.assertTSPropertySignature = function(e, t) {
            a("TSPropertySignature", e, t)
        }
        ,
        t.assertTSQualifiedName = function(e, t) {
            a("TSQualifiedName", e, t)
        }
        ,
        t.assertTSRestType = function(e, t) {
            a("TSRestType", e, t)
        }
        ,
        t.assertTSStringKeyword = function(e, t) {
            a("TSStringKeyword", e, t)
        }
        ,
        t.assertTSSymbolKeyword = function(e, t) {
            a("TSSymbolKeyword", e, t)
        }
        ,
        t.assertTSThisType = function(e, t) {
            a("TSThisType", e, t)
        }
        ,
        t.assertTSTupleType = function(e, t) {
            a("TSTupleType", e, t)
        }
        ,
        t.assertTSType = function(e, t) {
            a("TSType", e, t)
        }
        ,
        t.assertTSTypeAliasDeclaration = function(e, t) {
            a("TSTypeAliasDeclaration", e, t)
        }
        ,
        t.assertTSTypeAnnotation = function(e, t) {
            a("TSTypeAnnotation", e, t)
        }
        ,
        t.assertTSTypeAssertion = function(e, t) {
            a("TSTypeAssertion", e, t)
        }
        ,
        t.assertTSTypeElement = function(e, t) {
            a("TSTypeElement", e, t)
        }
        ,
        t.assertTSTypeLiteral = function(e, t) {
            a("TSTypeLiteral", e, t)
        }
        ,
        t.assertTSTypeOperator = function(e, t) {
            a("TSTypeOperator", e, t)
        }
        ,
        t.assertTSTypeParameter = function(e, t) {
            a("TSTypeParameter", e, t)
        }
        ,
        t.assertTSTypeParameterDeclaration = function(e, t) {
            a("TSTypeParameterDeclaration", e, t)
        }
        ,
        t.assertTSTypeParameterInstantiation = function(e, t) {
            a("TSTypeParameterInstantiation", e, t)
        }
        ,
        t.assertTSTypePredicate = function(e, t) {
            a("TSTypePredicate", e, t)
        }
        ,
        t.assertTSTypeQuery = function(e, t) {
            a("TSTypeQuery", e, t)
        }
        ,
        t.assertTSTypeReference = function(e, t) {
            a("TSTypeReference", e, t)
        }
        ,
        t.assertTSUndefinedKeyword = function(e, t) {
            a("TSUndefinedKeyword", e, t)
        }
        ,
        t.assertTSUnionType = function(e, t) {
            a("TSUnionType", e, t)
        }
        ,
        t.assertTSUnknownKeyword = function(e, t) {
            a("TSUnknownKeyword", e, t)
        }
        ,
        t.assertTSVoidKeyword = function(e, t) {
            a("TSVoidKeyword", e, t)
        }
        ,
        t.assertTaggedTemplateExpression = function(e, t) {
            a("TaggedTemplateExpression", e, t)
        }
        ,
        t.assertTemplateElement = function(e, t) {
            a("TemplateElement", e, t)
        }
        ,
        t.assertTemplateLiteral = function(e, t) {
            a("TemplateLiteral", e, t)
        }
        ,
        t.assertTerminatorless = function(e, t) {
            a("Terminatorless", e, t)
        }
        ,
        t.assertThisExpression = function(e, t) {
            a("ThisExpression", e, t)
        }
        ,
        t.assertThisTypeAnnotation = function(e, t) {
            a("ThisTypeAnnotation", e, t)
        }
        ,
        t.assertThrowStatement = function(e, t) {
            a("ThrowStatement", e, t)
        }
        ,
        t.assertTopicReference = function(e, t) {
            a("TopicReference", e, t)
        }
        ,
        t.assertTryStatement = function(e, t) {
            a("TryStatement", e, t)
        }
        ,
        t.assertTupleExpression = function(e, t) {
            a("TupleExpression", e, t)
        }
        ,
        t.assertTupleTypeAnnotation = function(e, t) {
            a("TupleTypeAnnotation", e, t)
        }
        ,
        t.assertTypeAlias = function(e, t) {
            a("TypeAlias", e, t)
        }
        ,
        t.assertTypeAnnotation = function(e, t) {
            a("TypeAnnotation", e, t)
        }
        ,
        t.assertTypeCastExpression = function(e, t) {
            a("TypeCastExpression", e, t)
        }
        ,
        t.assertTypeParameter = function(e, t) {
            a("TypeParameter", e, t)
        }
        ,
        t.assertTypeParameterDeclaration = function(e, t) {
            a("TypeParameterDeclaration", e, t)
        }
        ,
        t.assertTypeParameterInstantiation = function(e, t) {
            a("TypeParameterInstantiation", e, t)
        }
        ,
        t.assertTypeScript = function(e, t) {
            a("TypeScript", e, t)
        }
        ,
        t.assertTypeofTypeAnnotation = function(e, t) {
            a("TypeofTypeAnnotation", e, t)
        }
        ,
        t.assertUnaryExpression = function(e, t) {
            a("UnaryExpression", e, t)
        }
        ,
        t.assertUnaryLike = function(e, t) {
            a("UnaryLike", e, t)
        }
        ,
        t.assertUnionTypeAnnotation = function(e, t) {
            a("UnionTypeAnnotation", e, t)
        }
        ,
        t.assertUpdateExpression = function(e, t) {
            a("UpdateExpression", e, t)
        }
        ,
        t.assertUserWhitespacable = function(e, t) {
            a("UserWhitespacable", e, t)
        }
        ,
        t.assertV8IntrinsicIdentifier = function(e, t) {
            a("V8IntrinsicIdentifier", e, t)
        }
        ,
        t.assertVariableDeclaration = function(e, t) {
            a("VariableDeclaration", e, t)
        }
        ,
        t.assertVariableDeclarator = function(e, t) {
            a("VariableDeclarator", e, t)
        }
        ,
        t.assertVariance = function(e, t) {
            a("Variance", e, t)
        }
        ,
        t.assertVoidTypeAnnotation = function(e, t) {
            a("VoidTypeAnnotation", e, t)
        }
        ,
        t.assertWhile = function(e, t) {
            a("While", e, t)
        }
        ,
        t.assertWhileStatement = function(e, t) {
            a("WhileStatement", e, t)
        }
        ,
        t.assertWithStatement = function(e, t) {
            a("WithStatement", e, t)
        }
        ,
        t.assertYieldExpression = function(e, t) {
            a("YieldExpression", e, t)
        }
        ;
        var r = n(2680);
        function a(e, t, n) {
            if (!(0,
            r.default)(e, t, n))
                throw new Error('Expected type "'.concat(e, '" with option ').concat(JSON.stringify(n), ", ") + 'but instead got "'.concat(t.type, '".'))
        }
    },
    3218: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2642)
          , a = function(e) {
            switch (e) {
            case "string":
                return (0,
                r.stringTypeAnnotation)();
            case "number":
                return (0,
                r.numberTypeAnnotation)();
            case "undefined":
                return (0,
                r.voidTypeAnnotation)();
            case "boolean":
                return (0,
                r.booleanTypeAnnotation)();
            case "function":
                return (0,
                r.genericTypeAnnotation)((0,
                r.identifier)("Function"));
            case "object":
                return (0,
                r.genericTypeAnnotation)((0,
                r.identifier)("Object"));
            case "symbol":
                return (0,
                r.genericTypeAnnotation)((0,
                r.identifier)("Symbol"));
            case "bigint":
                return (0,
                r.anyTypeAnnotation)()
            }
            throw new Error("Invalid typeof value: " + e)
        };
        t.default = a
    },
    3219: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = (0,
            a.default)(e);
            return 1 === t.length ? t[0] : (0,
            r.unionTypeAnnotation)(t)
        }
        ;
        var r = n(2642)
          , a = n(2844)
    },
    3220: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = e.map((function(e) {
                return e.typeAnnotation
            }
            ))
              , n = (0,
            a.default)(t);
            return 1 === n.length ? n[0] : (0,
            r.tsUnionType)(n)
        }
        ;
        var r = n(2642)
          , a = n(3221)
    },
    3221: function(e, t, n) {
        "use strict";
        var r = n(806);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            for (var t = {}, n = {}, i = new Set, o = [], s = 0; s < e.length; s++) {
                var u = e[s];
                if (u && !(o.indexOf(u) >= 0)) {
                    if ((0,
                    a.isTSAnyKeyword)(u))
                        return [u];
                    (0,
                    a.isTSBaseType)(u) ? n[u.type] = u : (0,
                    a.isTSUnionType)(u) ? i.has(u.types) || (e.push.apply(e, r(u.types)),
                    i.add(u.types)) : o.push(u)
                }
            }
            for (var l = 0, p = Object.keys(n); l < p.length; l++) {
                var f = p[l];
                o.push(n[f])
            }
            for (var d = 0, c = Object.keys(t); d < c.length; d++) {
                var y = c[d];
                o.push(t[y])
            }
            return o
        }
        ;
        var a = n(2638)
    },
    3222: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AnyTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.anyTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ArgumentPlaceholder", {
            enumerable: !0,
            get: function() {
                return r.argumentPlaceholder
            }
        }),
        Object.defineProperty(t, "ArrayExpression", {
            enumerable: !0,
            get: function() {
                return r.arrayExpression
            }
        }),
        Object.defineProperty(t, "ArrayPattern", {
            enumerable: !0,
            get: function() {
                return r.arrayPattern
            }
        }),
        Object.defineProperty(t, "ArrayTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.arrayTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ArrowFunctionExpression", {
            enumerable: !0,
            get: function() {
                return r.arrowFunctionExpression
            }
        }),
        Object.defineProperty(t, "AssignmentExpression", {
            enumerable: !0,
            get: function() {
                return r.assignmentExpression
            }
        }),
        Object.defineProperty(t, "AssignmentPattern", {
            enumerable: !0,
            get: function() {
                return r.assignmentPattern
            }
        }),
        Object.defineProperty(t, "AwaitExpression", {
            enumerable: !0,
            get: function() {
                return r.awaitExpression
            }
        }),
        Object.defineProperty(t, "BigIntLiteral", {
            enumerable: !0,
            get: function() {
                return r.bigIntLiteral
            }
        }),
        Object.defineProperty(t, "BinaryExpression", {
            enumerable: !0,
            get: function() {
                return r.binaryExpression
            }
        }),
        Object.defineProperty(t, "BindExpression", {
            enumerable: !0,
            get: function() {
                return r.bindExpression
            }
        }),
        Object.defineProperty(t, "BlockStatement", {
            enumerable: !0,
            get: function() {
                return r.blockStatement
            }
        }),
        Object.defineProperty(t, "BooleanLiteral", {
            enumerable: !0,
            get: function() {
                return r.booleanLiteral
            }
        }),
        Object.defineProperty(t, "BooleanLiteralTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.booleanLiteralTypeAnnotation
            }
        }),
        Object.defineProperty(t, "BooleanTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.booleanTypeAnnotation
            }
        }),
        Object.defineProperty(t, "BreakStatement", {
            enumerable: !0,
            get: function() {
                return r.breakStatement
            }
        }),
        Object.defineProperty(t, "CallExpression", {
            enumerable: !0,
            get: function() {
                return r.callExpression
            }
        }),
        Object.defineProperty(t, "CatchClause", {
            enumerable: !0,
            get: function() {
                return r.catchClause
            }
        }),
        Object.defineProperty(t, "ClassBody", {
            enumerable: !0,
            get: function() {
                return r.classBody
            }
        }),
        Object.defineProperty(t, "ClassDeclaration", {
            enumerable: !0,
            get: function() {
                return r.classDeclaration
            }
        }),
        Object.defineProperty(t, "ClassExpression", {
            enumerable: !0,
            get: function() {
                return r.classExpression
            }
        }),
        Object.defineProperty(t, "ClassImplements", {
            enumerable: !0,
            get: function() {
                return r.classImplements
            }
        }),
        Object.defineProperty(t, "ClassMethod", {
            enumerable: !0,
            get: function() {
                return r.classMethod
            }
        }),
        Object.defineProperty(t, "ClassPrivateMethod", {
            enumerable: !0,
            get: function() {
                return r.classPrivateMethod
            }
        }),
        Object.defineProperty(t, "ClassPrivateProperty", {
            enumerable: !0,
            get: function() {
                return r.classPrivateProperty
            }
        }),
        Object.defineProperty(t, "ClassProperty", {
            enumerable: !0,
            get: function() {
                return r.classProperty
            }
        }),
        Object.defineProperty(t, "ConditionalExpression", {
            enumerable: !0,
            get: function() {
                return r.conditionalExpression
            }
        }),
        Object.defineProperty(t, "ContinueStatement", {
            enumerable: !0,
            get: function() {
                return r.continueStatement
            }
        }),
        Object.defineProperty(t, "DebuggerStatement", {
            enumerable: !0,
            get: function() {
                return r.debuggerStatement
            }
        }),
        Object.defineProperty(t, "DecimalLiteral", {
            enumerable: !0,
            get: function() {
                return r.decimalLiteral
            }
        }),
        Object.defineProperty(t, "DeclareClass", {
            enumerable: !0,
            get: function() {
                return r.declareClass
            }
        }),
        Object.defineProperty(t, "DeclareExportAllDeclaration", {
            enumerable: !0,
            get: function() {
                return r.declareExportAllDeclaration
            }
        }),
        Object.defineProperty(t, "DeclareExportDeclaration", {
            enumerable: !0,
            get: function() {
                return r.declareExportDeclaration
            }
        }),
        Object.defineProperty(t, "DeclareFunction", {
            enumerable: !0,
            get: function() {
                return r.declareFunction
            }
        }),
        Object.defineProperty(t, "DeclareInterface", {
            enumerable: !0,
            get: function() {
                return r.declareInterface
            }
        }),
        Object.defineProperty(t, "DeclareModule", {
            enumerable: !0,
            get: function() {
                return r.declareModule
            }
        }),
        Object.defineProperty(t, "DeclareModuleExports", {
            enumerable: !0,
            get: function() {
                return r.declareModuleExports
            }
        }),
        Object.defineProperty(t, "DeclareOpaqueType", {
            enumerable: !0,
            get: function() {
                return r.declareOpaqueType
            }
        }),
        Object.defineProperty(t, "DeclareTypeAlias", {
            enumerable: !0,
            get: function() {
                return r.declareTypeAlias
            }
        }),
        Object.defineProperty(t, "DeclareVariable", {
            enumerable: !0,
            get: function() {
                return r.declareVariable
            }
        }),
        Object.defineProperty(t, "DeclaredPredicate", {
            enumerable: !0,
            get: function() {
                return r.declaredPredicate
            }
        }),
        Object.defineProperty(t, "Decorator", {
            enumerable: !0,
            get: function() {
                return r.decorator
            }
        }),
        Object.defineProperty(t, "Directive", {
            enumerable: !0,
            get: function() {
                return r.directive
            }
        }),
        Object.defineProperty(t, "DirectiveLiteral", {
            enumerable: !0,
            get: function() {
                return r.directiveLiteral
            }
        }),
        Object.defineProperty(t, "DoExpression", {
            enumerable: !0,
            get: function() {
                return r.doExpression
            }
        }),
        Object.defineProperty(t, "DoWhileStatement", {
            enumerable: !0,
            get: function() {
                return r.doWhileStatement
            }
        }),
        Object.defineProperty(t, "EmptyStatement", {
            enumerable: !0,
            get: function() {
                return r.emptyStatement
            }
        }),
        Object.defineProperty(t, "EmptyTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.emptyTypeAnnotation
            }
        }),
        Object.defineProperty(t, "EnumBooleanBody", {
            enumerable: !0,
            get: function() {
                return r.enumBooleanBody
            }
        }),
        Object.defineProperty(t, "EnumBooleanMember", {
            enumerable: !0,
            get: function() {
                return r.enumBooleanMember
            }
        }),
        Object.defineProperty(t, "EnumDeclaration", {
            enumerable: !0,
            get: function() {
                return r.enumDeclaration
            }
        }),
        Object.defineProperty(t, "EnumDefaultedMember", {
            enumerable: !0,
            get: function() {
                return r.enumDefaultedMember
            }
        }),
        Object.defineProperty(t, "EnumNumberBody", {
            enumerable: !0,
            get: function() {
                return r.enumNumberBody
            }
        }),
        Object.defineProperty(t, "EnumNumberMember", {
            enumerable: !0,
            get: function() {
                return r.enumNumberMember
            }
        }),
        Object.defineProperty(t, "EnumStringBody", {
            enumerable: !0,
            get: function() {
                return r.enumStringBody
            }
        }),
        Object.defineProperty(t, "EnumStringMember", {
            enumerable: !0,
            get: function() {
                return r.enumStringMember
            }
        }),
        Object.defineProperty(t, "EnumSymbolBody", {
            enumerable: !0,
            get: function() {
                return r.enumSymbolBody
            }
        }),
        Object.defineProperty(t, "ExistsTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.existsTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ExportAllDeclaration", {
            enumerable: !0,
            get: function() {
                return r.exportAllDeclaration
            }
        }),
        Object.defineProperty(t, "ExportDefaultDeclaration", {
            enumerable: !0,
            get: function() {
                return r.exportDefaultDeclaration
            }
        }),
        Object.defineProperty(t, "ExportDefaultSpecifier", {
            enumerable: !0,
            get: function() {
                return r.exportDefaultSpecifier
            }
        }),
        Object.defineProperty(t, "ExportNamedDeclaration", {
            enumerable: !0,
            get: function() {
                return r.exportNamedDeclaration
            }
        }),
        Object.defineProperty(t, "ExportNamespaceSpecifier", {
            enumerable: !0,
            get: function() {
                return r.exportNamespaceSpecifier
            }
        }),
        Object.defineProperty(t, "ExportSpecifier", {
            enumerable: !0,
            get: function() {
                return r.exportSpecifier
            }
        }),
        Object.defineProperty(t, "ExpressionStatement", {
            enumerable: !0,
            get: function() {
                return r.expressionStatement
            }
        }),
        Object.defineProperty(t, "File", {
            enumerable: !0,
            get: function() {
                return r.file
            }
        }),
        Object.defineProperty(t, "ForInStatement", {
            enumerable: !0,
            get: function() {
                return r.forInStatement
            }
        }),
        Object.defineProperty(t, "ForOfStatement", {
            enumerable: !0,
            get: function() {
                return r.forOfStatement
            }
        }),
        Object.defineProperty(t, "ForStatement", {
            enumerable: !0,
            get: function() {
                return r.forStatement
            }
        }),
        Object.defineProperty(t, "FunctionDeclaration", {
            enumerable: !0,
            get: function() {
                return r.functionDeclaration
            }
        }),
        Object.defineProperty(t, "FunctionExpression", {
            enumerable: !0,
            get: function() {
                return r.functionExpression
            }
        }),
        Object.defineProperty(t, "FunctionTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.functionTypeAnnotation
            }
        }),
        Object.defineProperty(t, "FunctionTypeParam", {
            enumerable: !0,
            get: function() {
                return r.functionTypeParam
            }
        }),
        Object.defineProperty(t, "GenericTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.genericTypeAnnotation
            }
        }),
        Object.defineProperty(t, "Identifier", {
            enumerable: !0,
            get: function() {
                return r.identifier
            }
        }),
        Object.defineProperty(t, "IfStatement", {
            enumerable: !0,
            get: function() {
                return r.ifStatement
            }
        }),
        Object.defineProperty(t, "Import", {
            enumerable: !0,
            get: function() {
                return r.import
            }
        }),
        Object.defineProperty(t, "ImportAttribute", {
            enumerable: !0,
            get: function() {
                return r.importAttribute
            }
        }),
        Object.defineProperty(t, "ImportDeclaration", {
            enumerable: !0,
            get: function() {
                return r.importDeclaration
            }
        }),
        Object.defineProperty(t, "ImportDefaultSpecifier", {
            enumerable: !0,
            get: function() {
                return r.importDefaultSpecifier
            }
        }),
        Object.defineProperty(t, "ImportNamespaceSpecifier", {
            enumerable: !0,
            get: function() {
                return r.importNamespaceSpecifier
            }
        }),
        Object.defineProperty(t, "ImportSpecifier", {
            enumerable: !0,
            get: function() {
                return r.importSpecifier
            }
        }),
        Object.defineProperty(t, "IndexedAccessType", {
            enumerable: !0,
            get: function() {
                return r.indexedAccessType
            }
        }),
        Object.defineProperty(t, "InferredPredicate", {
            enumerable: !0,
            get: function() {
                return r.inferredPredicate
            }
        }),
        Object.defineProperty(t, "InterfaceDeclaration", {
            enumerable: !0,
            get: function() {
                return r.interfaceDeclaration
            }
        }),
        Object.defineProperty(t, "InterfaceExtends", {
            enumerable: !0,
            get: function() {
                return r.interfaceExtends
            }
        }),
        Object.defineProperty(t, "InterfaceTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.interfaceTypeAnnotation
            }
        }),
        Object.defineProperty(t, "InterpreterDirective", {
            enumerable: !0,
            get: function() {
                return r.interpreterDirective
            }
        }),
        Object.defineProperty(t, "IntersectionTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.intersectionTypeAnnotation
            }
        }),
        Object.defineProperty(t, "JSXAttribute", {
            enumerable: !0,
            get: function() {
                return r.jsxAttribute
            }
        }),
        Object.defineProperty(t, "JSXClosingElement", {
            enumerable: !0,
            get: function() {
                return r.jsxClosingElement
            }
        }),
        Object.defineProperty(t, "JSXClosingFragment", {
            enumerable: !0,
            get: function() {
                return r.jsxClosingFragment
            }
        }),
        Object.defineProperty(t, "JSXElement", {
            enumerable: !0,
            get: function() {
                return r.jsxElement
            }
        }),
        Object.defineProperty(t, "JSXEmptyExpression", {
            enumerable: !0,
            get: function() {
                return r.jsxEmptyExpression
            }
        }),
        Object.defineProperty(t, "JSXExpressionContainer", {
            enumerable: !0,
            get: function() {
                return r.jsxExpressionContainer
            }
        }),
        Object.defineProperty(t, "JSXFragment", {
            enumerable: !0,
            get: function() {
                return r.jsxFragment
            }
        }),
        Object.defineProperty(t, "JSXIdentifier", {
            enumerable: !0,
            get: function() {
                return r.jsxIdentifier
            }
        }),
        Object.defineProperty(t, "JSXMemberExpression", {
            enumerable: !0,
            get: function() {
                return r.jsxMemberExpression
            }
        }),
        Object.defineProperty(t, "JSXNamespacedName", {
            enumerable: !0,
            get: function() {
                return r.jsxNamespacedName
            }
        }),
        Object.defineProperty(t, "JSXOpeningElement", {
            enumerable: !0,
            get: function() {
                return r.jsxOpeningElement
            }
        }),
        Object.defineProperty(t, "JSXOpeningFragment", {
            enumerable: !0,
            get: function() {
                return r.jsxOpeningFragment
            }
        }),
        Object.defineProperty(t, "JSXSpreadAttribute", {
            enumerable: !0,
            get: function() {
                return r.jsxSpreadAttribute
            }
        }),
        Object.defineProperty(t, "JSXSpreadChild", {
            enumerable: !0,
            get: function() {
                return r.jsxSpreadChild
            }
        }),
        Object.defineProperty(t, "JSXText", {
            enumerable: !0,
            get: function() {
                return r.jsxText
            }
        }),
        Object.defineProperty(t, "LabeledStatement", {
            enumerable: !0,
            get: function() {
                return r.labeledStatement
            }
        }),
        Object.defineProperty(t, "LogicalExpression", {
            enumerable: !0,
            get: function() {
                return r.logicalExpression
            }
        }),
        Object.defineProperty(t, "MemberExpression", {
            enumerable: !0,
            get: function() {
                return r.memberExpression
            }
        }),
        Object.defineProperty(t, "MetaProperty", {
            enumerable: !0,
            get: function() {
                return r.metaProperty
            }
        }),
        Object.defineProperty(t, "MixedTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.mixedTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ModuleExpression", {
            enumerable: !0,
            get: function() {
                return r.moduleExpression
            }
        }),
        Object.defineProperty(t, "NewExpression", {
            enumerable: !0,
            get: function() {
                return r.newExpression
            }
        }),
        Object.defineProperty(t, "Noop", {
            enumerable: !0,
            get: function() {
                return r.noop
            }
        }),
        Object.defineProperty(t, "NullLiteral", {
            enumerable: !0,
            get: function() {
                return r.nullLiteral
            }
        }),
        Object.defineProperty(t, "NullLiteralTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.nullLiteralTypeAnnotation
            }
        }),
        Object.defineProperty(t, "NullableTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.nullableTypeAnnotation
            }
        }),
        Object.defineProperty(t, "NumberLiteral", {
            enumerable: !0,
            get: function() {
                return r.numberLiteral
            }
        }),
        Object.defineProperty(t, "NumberLiteralTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.numberLiteralTypeAnnotation
            }
        }),
        Object.defineProperty(t, "NumberTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.numberTypeAnnotation
            }
        }),
        Object.defineProperty(t, "NumericLiteral", {
            enumerable: !0,
            get: function() {
                return r.numericLiteral
            }
        }),
        Object.defineProperty(t, "ObjectExpression", {
            enumerable: !0,
            get: function() {
                return r.objectExpression
            }
        }),
        Object.defineProperty(t, "ObjectMethod", {
            enumerable: !0,
            get: function() {
                return r.objectMethod
            }
        }),
        Object.defineProperty(t, "ObjectPattern", {
            enumerable: !0,
            get: function() {
                return r.objectPattern
            }
        }),
        Object.defineProperty(t, "ObjectProperty", {
            enumerable: !0,
            get: function() {
                return r.objectProperty
            }
        }),
        Object.defineProperty(t, "ObjectTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.objectTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ObjectTypeCallProperty", {
            enumerable: !0,
            get: function() {
                return r.objectTypeCallProperty
            }
        }),
        Object.defineProperty(t, "ObjectTypeIndexer", {
            enumerable: !0,
            get: function() {
                return r.objectTypeIndexer
            }
        }),
        Object.defineProperty(t, "ObjectTypeInternalSlot", {
            enumerable: !0,
            get: function() {
                return r.objectTypeInternalSlot
            }
        }),
        Object.defineProperty(t, "ObjectTypeProperty", {
            enumerable: !0,
            get: function() {
                return r.objectTypeProperty
            }
        }),
        Object.defineProperty(t, "ObjectTypeSpreadProperty", {
            enumerable: !0,
            get: function() {
                return r.objectTypeSpreadProperty
            }
        }),
        Object.defineProperty(t, "OpaqueType", {
            enumerable: !0,
            get: function() {
                return r.opaqueType
            }
        }),
        Object.defineProperty(t, "OptionalCallExpression", {
            enumerable: !0,
            get: function() {
                return r.optionalCallExpression
            }
        }),
        Object.defineProperty(t, "OptionalIndexedAccessType", {
            enumerable: !0,
            get: function() {
                return r.optionalIndexedAccessType
            }
        }),
        Object.defineProperty(t, "OptionalMemberExpression", {
            enumerable: !0,
            get: function() {
                return r.optionalMemberExpression
            }
        }),
        Object.defineProperty(t, "ParenthesizedExpression", {
            enumerable: !0,
            get: function() {
                return r.parenthesizedExpression
            }
        }),
        Object.defineProperty(t, "PipelineBareFunction", {
            enumerable: !0,
            get: function() {
                return r.pipelineBareFunction
            }
        }),
        Object.defineProperty(t, "PipelinePrimaryTopicReference", {
            enumerable: !0,
            get: function() {
                return r.pipelinePrimaryTopicReference
            }
        }),
        Object.defineProperty(t, "PipelineTopicExpression", {
            enumerable: !0,
            get: function() {
                return r.pipelineTopicExpression
            }
        }),
        Object.defineProperty(t, "Placeholder", {
            enumerable: !0,
            get: function() {
                return r.placeholder
            }
        }),
        Object.defineProperty(t, "PrivateName", {
            enumerable: !0,
            get: function() {
                return r.privateName
            }
        }),
        Object.defineProperty(t, "Program", {
            enumerable: !0,
            get: function() {
                return r.program
            }
        }),
        Object.defineProperty(t, "QualifiedTypeIdentifier", {
            enumerable: !0,
            get: function() {
                return r.qualifiedTypeIdentifier
            }
        }),
        Object.defineProperty(t, "RecordExpression", {
            enumerable: !0,
            get: function() {
                return r.recordExpression
            }
        }),
        Object.defineProperty(t, "RegExpLiteral", {
            enumerable: !0,
            get: function() {
                return r.regExpLiteral
            }
        }),
        Object.defineProperty(t, "RegexLiteral", {
            enumerable: !0,
            get: function() {
                return r.regexLiteral
            }
        }),
        Object.defineProperty(t, "RestElement", {
            enumerable: !0,
            get: function() {
                return r.restElement
            }
        }),
        Object.defineProperty(t, "RestProperty", {
            enumerable: !0,
            get: function() {
                return r.restProperty
            }
        }),
        Object.defineProperty(t, "ReturnStatement", {
            enumerable: !0,
            get: function() {
                return r.returnStatement
            }
        }),
        Object.defineProperty(t, "SequenceExpression", {
            enumerable: !0,
            get: function() {
                return r.sequenceExpression
            }
        }),
        Object.defineProperty(t, "SpreadElement", {
            enumerable: !0,
            get: function() {
                return r.spreadElement
            }
        }),
        Object.defineProperty(t, "SpreadProperty", {
            enumerable: !0,
            get: function() {
                return r.spreadProperty
            }
        }),
        Object.defineProperty(t, "StaticBlock", {
            enumerable: !0,
            get: function() {
                return r.staticBlock
            }
        }),
        Object.defineProperty(t, "StringLiteral", {
            enumerable: !0,
            get: function() {
                return r.stringLiteral
            }
        }),
        Object.defineProperty(t, "StringLiteralTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.stringLiteralTypeAnnotation
            }
        }),
        Object.defineProperty(t, "StringTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.stringTypeAnnotation
            }
        }),
        Object.defineProperty(t, "Super", {
            enumerable: !0,
            get: function() {
                return r.super
            }
        }),
        Object.defineProperty(t, "SwitchCase", {
            enumerable: !0,
            get: function() {
                return r.switchCase
            }
        }),
        Object.defineProperty(t, "SwitchStatement", {
            enumerable: !0,
            get: function() {
                return r.switchStatement
            }
        }),
        Object.defineProperty(t, "SymbolTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.symbolTypeAnnotation
            }
        }),
        Object.defineProperty(t, "TSAnyKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsAnyKeyword
            }
        }),
        Object.defineProperty(t, "TSArrayType", {
            enumerable: !0,
            get: function() {
                return r.tsArrayType
            }
        }),
        Object.defineProperty(t, "TSAsExpression", {
            enumerable: !0,
            get: function() {
                return r.tsAsExpression
            }
        }),
        Object.defineProperty(t, "TSBigIntKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsBigIntKeyword
            }
        }),
        Object.defineProperty(t, "TSBooleanKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsBooleanKeyword
            }
        }),
        Object.defineProperty(t, "TSCallSignatureDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsCallSignatureDeclaration
            }
        }),
        Object.defineProperty(t, "TSConditionalType", {
            enumerable: !0,
            get: function() {
                return r.tsConditionalType
            }
        }),
        Object.defineProperty(t, "TSConstructSignatureDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsConstructSignatureDeclaration
            }
        }),
        Object.defineProperty(t, "TSConstructorType", {
            enumerable: !0,
            get: function() {
                return r.tsConstructorType
            }
        }),
        Object.defineProperty(t, "TSDeclareFunction", {
            enumerable: !0,
            get: function() {
                return r.tsDeclareFunction
            }
        }),
        Object.defineProperty(t, "TSDeclareMethod", {
            enumerable: !0,
            get: function() {
                return r.tsDeclareMethod
            }
        }),
        Object.defineProperty(t, "TSEnumDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsEnumDeclaration
            }
        }),
        Object.defineProperty(t, "TSEnumMember", {
            enumerable: !0,
            get: function() {
                return r.tsEnumMember
            }
        }),
        Object.defineProperty(t, "TSExportAssignment", {
            enumerable: !0,
            get: function() {
                return r.tsExportAssignment
            }
        }),
        Object.defineProperty(t, "TSExpressionWithTypeArguments", {
            enumerable: !0,
            get: function() {
                return r.tsExpressionWithTypeArguments
            }
        }),
        Object.defineProperty(t, "TSExternalModuleReference", {
            enumerable: !0,
            get: function() {
                return r.tsExternalModuleReference
            }
        }),
        Object.defineProperty(t, "TSFunctionType", {
            enumerable: !0,
            get: function() {
                return r.tsFunctionType
            }
        }),
        Object.defineProperty(t, "TSImportEqualsDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsImportEqualsDeclaration
            }
        }),
        Object.defineProperty(t, "TSImportType", {
            enumerable: !0,
            get: function() {
                return r.tsImportType
            }
        }),
        Object.defineProperty(t, "TSIndexSignature", {
            enumerable: !0,
            get: function() {
                return r.tsIndexSignature
            }
        }),
        Object.defineProperty(t, "TSIndexedAccessType", {
            enumerable: !0,
            get: function() {
                return r.tsIndexedAccessType
            }
        }),
        Object.defineProperty(t, "TSInferType", {
            enumerable: !0,
            get: function() {
                return r.tsInferType
            }
        }),
        Object.defineProperty(t, "TSInterfaceBody", {
            enumerable: !0,
            get: function() {
                return r.tsInterfaceBody
            }
        }),
        Object.defineProperty(t, "TSInterfaceDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsInterfaceDeclaration
            }
        }),
        Object.defineProperty(t, "TSIntersectionType", {
            enumerable: !0,
            get: function() {
                return r.tsIntersectionType
            }
        }),
        Object.defineProperty(t, "TSIntrinsicKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsIntrinsicKeyword
            }
        }),
        Object.defineProperty(t, "TSLiteralType", {
            enumerable: !0,
            get: function() {
                return r.tsLiteralType
            }
        }),
        Object.defineProperty(t, "TSMappedType", {
            enumerable: !0,
            get: function() {
                return r.tsMappedType
            }
        }),
        Object.defineProperty(t, "TSMethodSignature", {
            enumerable: !0,
            get: function() {
                return r.tsMethodSignature
            }
        }),
        Object.defineProperty(t, "TSModuleBlock", {
            enumerable: !0,
            get: function() {
                return r.tsModuleBlock
            }
        }),
        Object.defineProperty(t, "TSModuleDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsModuleDeclaration
            }
        }),
        Object.defineProperty(t, "TSNamedTupleMember", {
            enumerable: !0,
            get: function() {
                return r.tsNamedTupleMember
            }
        }),
        Object.defineProperty(t, "TSNamespaceExportDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsNamespaceExportDeclaration
            }
        }),
        Object.defineProperty(t, "TSNeverKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsNeverKeyword
            }
        }),
        Object.defineProperty(t, "TSNonNullExpression", {
            enumerable: !0,
            get: function() {
                return r.tsNonNullExpression
            }
        }),
        Object.defineProperty(t, "TSNullKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsNullKeyword
            }
        }),
        Object.defineProperty(t, "TSNumberKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsNumberKeyword
            }
        }),
        Object.defineProperty(t, "TSObjectKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsObjectKeyword
            }
        }),
        Object.defineProperty(t, "TSOptionalType", {
            enumerable: !0,
            get: function() {
                return r.tsOptionalType
            }
        }),
        Object.defineProperty(t, "TSParameterProperty", {
            enumerable: !0,
            get: function() {
                return r.tsParameterProperty
            }
        }),
        Object.defineProperty(t, "TSParenthesizedType", {
            enumerable: !0,
            get: function() {
                return r.tsParenthesizedType
            }
        }),
        Object.defineProperty(t, "TSPropertySignature", {
            enumerable: !0,
            get: function() {
                return r.tsPropertySignature
            }
        }),
        Object.defineProperty(t, "TSQualifiedName", {
            enumerable: !0,
            get: function() {
                return r.tsQualifiedName
            }
        }),
        Object.defineProperty(t, "TSRestType", {
            enumerable: !0,
            get: function() {
                return r.tsRestType
            }
        }),
        Object.defineProperty(t, "TSStringKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsStringKeyword
            }
        }),
        Object.defineProperty(t, "TSSymbolKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsSymbolKeyword
            }
        }),
        Object.defineProperty(t, "TSThisType", {
            enumerable: !0,
            get: function() {
                return r.tsThisType
            }
        }),
        Object.defineProperty(t, "TSTupleType", {
            enumerable: !0,
            get: function() {
                return r.tsTupleType
            }
        }),
        Object.defineProperty(t, "TSTypeAliasDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsTypeAliasDeclaration
            }
        }),
        Object.defineProperty(t, "TSTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.tsTypeAnnotation
            }
        }),
        Object.defineProperty(t, "TSTypeAssertion", {
            enumerable: !0,
            get: function() {
                return r.tsTypeAssertion
            }
        }),
        Object.defineProperty(t, "TSTypeLiteral", {
            enumerable: !0,
            get: function() {
                return r.tsTypeLiteral
            }
        }),
        Object.defineProperty(t, "TSTypeOperator", {
            enumerable: !0,
            get: function() {
                return r.tsTypeOperator
            }
        }),
        Object.defineProperty(t, "TSTypeParameter", {
            enumerable: !0,
            get: function() {
                return r.tsTypeParameter
            }
        }),
        Object.defineProperty(t, "TSTypeParameterDeclaration", {
            enumerable: !0,
            get: function() {
                return r.tsTypeParameterDeclaration
            }
        }),
        Object.defineProperty(t, "TSTypeParameterInstantiation", {
            enumerable: !0,
            get: function() {
                return r.tsTypeParameterInstantiation
            }
        }),
        Object.defineProperty(t, "TSTypePredicate", {
            enumerable: !0,
            get: function() {
                return r.tsTypePredicate
            }
        }),
        Object.defineProperty(t, "TSTypeQuery", {
            enumerable: !0,
            get: function() {
                return r.tsTypeQuery
            }
        }),
        Object.defineProperty(t, "TSTypeReference", {
            enumerable: !0,
            get: function() {
                return r.tsTypeReference
            }
        }),
        Object.defineProperty(t, "TSUndefinedKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsUndefinedKeyword
            }
        }),
        Object.defineProperty(t, "TSUnionType", {
            enumerable: !0,
            get: function() {
                return r.tsUnionType
            }
        }),
        Object.defineProperty(t, "TSUnknownKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsUnknownKeyword
            }
        }),
        Object.defineProperty(t, "TSVoidKeyword", {
            enumerable: !0,
            get: function() {
                return r.tsVoidKeyword
            }
        }),
        Object.defineProperty(t, "TaggedTemplateExpression", {
            enumerable: !0,
            get: function() {
                return r.taggedTemplateExpression
            }
        }),
        Object.defineProperty(t, "TemplateElement", {
            enumerable: !0,
            get: function() {
                return r.templateElement
            }
        }),
        Object.defineProperty(t, "TemplateLiteral", {
            enumerable: !0,
            get: function() {
                return r.templateLiteral
            }
        }),
        Object.defineProperty(t, "ThisExpression", {
            enumerable: !0,
            get: function() {
                return r.thisExpression
            }
        }),
        Object.defineProperty(t, "ThisTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.thisTypeAnnotation
            }
        }),
        Object.defineProperty(t, "ThrowStatement", {
            enumerable: !0,
            get: function() {
                return r.throwStatement
            }
        }),
        Object.defineProperty(t, "TopicReference", {
            enumerable: !0,
            get: function() {
                return r.topicReference
            }
        }),
        Object.defineProperty(t, "TryStatement", {
            enumerable: !0,
            get: function() {
                return r.tryStatement
            }
        }),
        Object.defineProperty(t, "TupleExpression", {
            enumerable: !0,
            get: function() {
                return r.tupleExpression
            }
        }),
        Object.defineProperty(t, "TupleTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.tupleTypeAnnotation
            }
        }),
        Object.defineProperty(t, "TypeAlias", {
            enumerable: !0,
            get: function() {
                return r.typeAlias
            }
        }),
        Object.defineProperty(t, "TypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.typeAnnotation
            }
        }),
        Object.defineProperty(t, "TypeCastExpression", {
            enumerable: !0,
            get: function() {
                return r.typeCastExpression
            }
        }),
        Object.defineProperty(t, "TypeParameter", {
            enumerable: !0,
            get: function() {
                return r.typeParameter
            }
        }),
        Object.defineProperty(t, "TypeParameterDeclaration", {
            enumerable: !0,
            get: function() {
                return r.typeParameterDeclaration
            }
        }),
        Object.defineProperty(t, "TypeParameterInstantiation", {
            enumerable: !0,
            get: function() {
                return r.typeParameterInstantiation
            }
        }),
        Object.defineProperty(t, "TypeofTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.typeofTypeAnnotation
            }
        }),
        Object.defineProperty(t, "UnaryExpression", {
            enumerable: !0,
            get: function() {
                return r.unaryExpression
            }
        }),
        Object.defineProperty(t, "UnionTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.unionTypeAnnotation
            }
        }),
        Object.defineProperty(t, "UpdateExpression", {
            enumerable: !0,
            get: function() {
                return r.updateExpression
            }
        }),
        Object.defineProperty(t, "V8IntrinsicIdentifier", {
            enumerable: !0,
            get: function() {
                return r.v8IntrinsicIdentifier
            }
        }),
        Object.defineProperty(t, "VariableDeclaration", {
            enumerable: !0,
            get: function() {
                return r.variableDeclaration
            }
        }),
        Object.defineProperty(t, "VariableDeclarator", {
            enumerable: !0,
            get: function() {
                return r.variableDeclarator
            }
        }),
        Object.defineProperty(t, "Variance", {
            enumerable: !0,
            get: function() {
                return r.variance
            }
        }),
        Object.defineProperty(t, "VoidTypeAnnotation", {
            enumerable: !0,
            get: function() {
                return r.voidTypeAnnotation
            }
        }),
        Object.defineProperty(t, "WhileStatement", {
            enumerable: !0,
            get: function() {
                return r.whileStatement
            }
        }),
        Object.defineProperty(t, "WithStatement", {
            enumerable: !0,
            get: function() {
                return r.withStatement
            }
        }),
        Object.defineProperty(t, "YieldExpression", {
            enumerable: !0,
            get: function() {
                return r.yieldExpression
            }
        });
        var r = n(2642)
    },
    3223: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.default)(e, !1)
        }
        ;
        var r = n(2664)
    },
    3224: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.default)(e)
        }
        ;
        var r = n(2664)
    },
    3225: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.default)(e, !0, !0)
        }
        ;
        var r = n(2664)
    },
    3226: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.default)(e, !1, !0)
        }
        ;
        var r = n(2664)
    },
    3227: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n, a) {
            return (0,
            r.default)(e, t, [{
                type: a ? "CommentLine" : "CommentBlock",
                value: n
            }])
        }
        ;
        var r = n(2845)
    },
    3228: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return r.COMMENT_KEYS.forEach((function(t) {
                e[t] = null
            }
            )),
            e
        }
        ;
        var r = n(2663)
    },
    3229: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WHILE_TYPES = t.USERWHITESPACABLE_TYPES = t.UNARYLIKE_TYPES = t.TYPESCRIPT_TYPES = t.TSTYPE_TYPES = t.TSTYPEELEMENT_TYPES = t.TSENTITYNAME_TYPES = t.TSBASETYPE_TYPES = t.TERMINATORLESS_TYPES = t.STATEMENT_TYPES = t.STANDARDIZED_TYPES = t.SCOPABLE_TYPES = t.PUREISH_TYPES = t.PROPERTY_TYPES = t.PRIVATE_TYPES = t.PATTERN_TYPES = t.PATTERNLIKE_TYPES = t.OBJECTMEMBER_TYPES = t.MODULESPECIFIER_TYPES = t.MODULEDECLARATION_TYPES = t.MISCELLANEOUS_TYPES = t.METHOD_TYPES = t.LVAL_TYPES = t.LOOP_TYPES = t.LITERAL_TYPES = t.JSX_TYPES = t.IMMUTABLE_TYPES = t.FUNCTION_TYPES = t.FUNCTIONPARENT_TYPES = t.FOR_TYPES = t.FORXSTATEMENT_TYPES = t.FLOW_TYPES = t.FLOWTYPE_TYPES = t.FLOWPREDICATE_TYPES = t.FLOWDECLARATION_TYPES = t.FLOWBASEANNOTATION_TYPES = t.EXPRESSION_TYPES = t.EXPRESSIONWRAPPER_TYPES = t.EXPORTDECLARATION_TYPES = t.ENUMMEMBER_TYPES = t.ENUMBODY_TYPES = t.DECLARATION_TYPES = t.CONDITIONAL_TYPES = t.COMPLETIONSTATEMENT_TYPES = t.CLASS_TYPES = t.BLOCK_TYPES = t.BLOCKPARENT_TYPES = t.BINARY_TYPES = void 0;
        var r = n(2646)
          , a = r.FLIPPED_ALIAS_KEYS.Standardized;
        t.STANDARDIZED_TYPES = a;
        var i = r.FLIPPED_ALIAS_KEYS.Expression;
        t.EXPRESSION_TYPES = i;
        var o = r.FLIPPED_ALIAS_KEYS.Binary;
        t.BINARY_TYPES = o;
        var s = r.FLIPPED_ALIAS_KEYS.Scopable;
        t.SCOPABLE_TYPES = s;
        var u = r.FLIPPED_ALIAS_KEYS.BlockParent;
        t.BLOCKPARENT_TYPES = u;
        var l = r.FLIPPED_ALIAS_KEYS.Block;
        t.BLOCK_TYPES = l;
        var p = r.FLIPPED_ALIAS_KEYS.Statement;
        t.STATEMENT_TYPES = p;
        var f = r.FLIPPED_ALIAS_KEYS.Terminatorless;
        t.TERMINATORLESS_TYPES = f;
        var d = r.FLIPPED_ALIAS_KEYS.CompletionStatement;
        t.COMPLETIONSTATEMENT_TYPES = d;
        var c = r.FLIPPED_ALIAS_KEYS.Conditional;
        t.CONDITIONAL_TYPES = c;
        var y = r.FLIPPED_ALIAS_KEYS.Loop;
        t.LOOP_TYPES = y;
        var T = r.FLIPPED_ALIAS_KEYS.While;
        t.WHILE_TYPES = T;
        var m = r.FLIPPED_ALIAS_KEYS.ExpressionWrapper;
        t.EXPRESSIONWRAPPER_TYPES = m;
        var S = r.FLIPPED_ALIAS_KEYS.For;
        t.FOR_TYPES = S;
        var E = r.FLIPPED_ALIAS_KEYS.ForXStatement;
        t.FORXSTATEMENT_TYPES = E;
        var b = r.FLIPPED_ALIAS_KEYS.Function;
        t.FUNCTION_TYPES = b;
        var v = r.FLIPPED_ALIAS_KEYS.FunctionParent;
        t.FUNCTIONPARENT_TYPES = v;
        var P = r.FLIPPED_ALIAS_KEYS.Pureish;
        t.PUREISH_TYPES = P;
        var O = r.FLIPPED_ALIAS_KEYS.Declaration;
        t.DECLARATION_TYPES = O;
        var A = r.FLIPPED_ALIAS_KEYS.PatternLike;
        t.PATTERNLIKE_TYPES = A;
        var g = r.FLIPPED_ALIAS_KEYS.LVal;
        t.LVAL_TYPES = g;
        var x = r.FLIPPED_ALIAS_KEYS.TSEntityName;
        t.TSENTITYNAME_TYPES = x;
        var D = r.FLIPPED_ALIAS_KEYS.Literal;
        t.LITERAL_TYPES = D;
        var I = r.FLIPPED_ALIAS_KEYS.Immutable;
        t.IMMUTABLE_TYPES = I;
        var _ = r.FLIPPED_ALIAS_KEYS.UserWhitespacable;
        t.USERWHITESPACABLE_TYPES = _;
        var h = r.FLIPPED_ALIAS_KEYS.Method;
        t.METHOD_TYPES = h;
        var N = r.FLIPPED_ALIAS_KEYS.ObjectMember;
        t.OBJECTMEMBER_TYPES = N;
        var j = r.FLIPPED_ALIAS_KEYS.Property;
        t.PROPERTY_TYPES = j;
        var L = r.FLIPPED_ALIAS_KEYS.UnaryLike;
        t.UNARYLIKE_TYPES = L;
        var C = r.FLIPPED_ALIAS_KEYS.Pattern;
        t.PATTERN_TYPES = C;
        var B = r.FLIPPED_ALIAS_KEYS.Class;
        t.CLASS_TYPES = B;
        var w = r.FLIPPED_ALIAS_KEYS.ModuleDeclaration;
        t.MODULEDECLARATION_TYPES = w;
        var M = r.FLIPPED_ALIAS_KEYS.ExportDeclaration;
        t.EXPORTDECLARATION_TYPES = M;
        var F = r.FLIPPED_ALIAS_KEYS.ModuleSpecifier;
        t.MODULESPECIFIER_TYPES = F;
        var R = r.FLIPPED_ALIAS_KEYS.Private;
        t.PRIVATE_TYPES = R;
        var K = r.FLIPPED_ALIAS_KEYS.Flow;
        t.FLOW_TYPES = K;
        var V = r.FLIPPED_ALIAS_KEYS.FlowType;
        t.FLOWTYPE_TYPES = V;
        var k = r.FLIPPED_ALIAS_KEYS.FlowBaseAnnotation;
        t.FLOWBASEANNOTATION_TYPES = k;
        var Y = r.FLIPPED_ALIAS_KEYS.FlowDeclaration;
        t.FLOWDECLARATION_TYPES = Y;
        var U = r.FLIPPED_ALIAS_KEYS.FlowPredicate;
        t.FLOWPREDICATE_TYPES = U;
        var X = r.FLIPPED_ALIAS_KEYS.EnumBody;
        t.ENUMBODY_TYPES = X;
        var W = r.FLIPPED_ALIAS_KEYS.EnumMember;
        t.ENUMMEMBER_TYPES = W;
        var J = r.FLIPPED_ALIAS_KEYS.JSX;
        t.JSX_TYPES = J;
        var H = r.FLIPPED_ALIAS_KEYS.Miscellaneous;
        t.MISCELLANEOUS_TYPES = H;
        var q = r.FLIPPED_ALIAS_KEYS.TypeScript;
        t.TYPESCRIPT_TYPES = q;
        var G = r.FLIPPED_ALIAS_KEYS.TSTypeElement;
        t.TSTYPEELEMENT_TYPES = G;
        var z = r.FLIPPED_ALIAS_KEYS.TSType;
        t.TSTYPE_TYPES = z;
        var Q = r.FLIPPED_ALIAS_KEYS.TSBaseType;
        t.TSBASETYPE_TYPES = Q
    },
    3230: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "body";
            return e[t] = (0,
            r.default)(e[t], e)
        }
        ;
        var r = n(2850)
    },
    3231: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            "eval" !== (e = (0,
            r.default)(e)) && "arguments" !== e || (e = "_" + e);
            return e
        }
        ;
        var r = n(2851)
    },
    3232: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.key || e.property;
            !e.computed && (0,
            r.isIdentifier)(t) && (t = (0,
            a.stringLiteral)(t.name));
            return t
        }
        ;
        var r = n(2638)
          , a = n(2642)
    },
    3233: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2638)
          , a = function(e) {
            (0,
            r.isExpressionStatement)(e) && (e = e.expression);
            if ((0,
            r.isExpression)(e))
                return e;
            (0,
            r.isClass)(e) ? e.type = "ClassExpression" : (0,
            r.isFunction)(e) && (e.type = "FunctionExpression");
            if (!(0,
            r.isExpression)(e))
                throw new Error("cannot turn ".concat(e.type, " to an expression"));
            return e
        };
        t.default = a
    },
    3234: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = o;
        var r = n(2638)
          , a = n(2664)
          , i = n(2852);
        function o(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.key;
            return "method" === e.kind ? o.increment() + "" : (t = (0,
            r.isIdentifier)(n) ? n.name : (0,
            r.isStringLiteral)(n) ? JSON.stringify(n.value) : JSON.stringify((0,
            i.default)((0,
            a.default)(n))),
            e.computed && (t = "[".concat(t, "]")),
            e.static && (t = "static:".concat(t)),
            t)
        }
        o.uid = 0,
        o.increment = function() {
            return o.uid >= Number.MAX_SAFE_INTEGER ? o.uid = 0 : o.uid++
        }
    },
    3235: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if (null == e || !e.length)
                return;
            var n = []
              , a = (0,
            r.default)(e, t, n);
            if (!a)
                return;
            for (var i = 0, o = n; i < o.length; i++) {
                var s = o[i];
                t.push(s)
            }
            return a
        }
        ;
        var r = n(3236)
    },
    3236: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function e(t, n, u) {
            var l, p = [], f = !0, d = r(t);
            try {
                for (d.s(); !(l = d.n()).done; ) {
                    var c = l.value;
                    if ((0,
                    i.isEmptyStatement)(c) || (f = !1),
                    (0,
                    i.isExpression)(c))
                        p.push(c);
                    else if ((0,
                    i.isExpressionStatement)(c))
                        p.push(c.expression);
                    else if ((0,
                    i.isVariableDeclaration)(c)) {
                        if ("var" !== c.kind)
                            return;
                        var y, T = r(c.declarations);
                        try {
                            for (T.s(); !(y = T.n()).done; ) {
                                for (var m = y.value, S = (0,
                                a.default)(m), E = 0, b = Object.keys(S); E < b.length; E++) {
                                    var v = b[E];
                                    u.push({
                                        kind: c.kind,
                                        id: (0,
                                        s.default)(S[v])
                                    })
                                }
                                m.init && p.push((0,
                                o.assignmentExpression)("=", m.id, m.init))
                            }
                        } catch (g) {
                            T.e(g)
                        } finally {
                            T.f()
                        }
                        f = !0
                    } else if ((0,
                    i.isIfStatement)(c)) {
                        var P = c.consequent ? e([c.consequent], n, u) : n.buildUndefinedNode()
                          , O = c.alternate ? e([c.alternate], n, u) : n.buildUndefinedNode();
                        if (!P || !O)
                            return;
                        p.push((0,
                        o.conditionalExpression)(c.test, P, O))
                    } else if ((0,
                    i.isBlockStatement)(c)) {
                        var A = e(c.body, n, u);
                        if (!A)
                            return;
                        p.push(A)
                    } else {
                        if (!(0,
                        i.isEmptyStatement)(c))
                            return;
                        0 === t.indexOf(c) && (f = !0)
                    }
                }
            } catch (g) {
                d.e(g)
            } finally {
                d.f()
            }
            f && p.push(n.buildUndefinedNode());
            return 1 === p.length ? p[0] : (0,
            o.sequenceExpression)(p)
        }
        ;
        var a = n(2697)
          , i = n(2638)
          , o = n(2642)
          , s = n(2664)
    },
    3237: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2638)
          , a = n(2642)
          , i = function(e, t) {
            if ((0,
            r.isStatement)(e))
                return e;
            var n, i = !1;
            if ((0,
            r.isClass)(e))
                i = !0,
                n = "ClassDeclaration";
            else if ((0,
            r.isFunction)(e))
                i = !0,
                n = "FunctionDeclaration";
            else if ((0,
            r.isAssignmentExpression)(e))
                return (0,
                a.expressionStatement)(e);
            i && !e.id && (n = !1);
            if (!n) {
                if (t)
                    return !1;
                throw new Error("cannot turn ".concat(e.type, " to a statement"))
            }
            return e.type = n,
            e
        };
        t.default = i
    },
    3238: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2681)
          , a = n(2642)
          , i = function e(t) {
            if (void 0 === t)
                return (0,
                a.identifier)("undefined");
            if (!0 === t || !1 === t)
                return (0,
                a.booleanLiteral)(t);
            if (null === t)
                return (0,
                a.nullLiteral)();
            if ("string" === typeof t)
                return (0,
                a.stringLiteral)(t);
            if ("number" === typeof t) {
                var n, i;
                if (Number.isFinite(t))
                    n = (0,
                    a.numericLiteral)(Math.abs(t));
                else
                    i = Number.isNaN(t) ? (0,
                    a.numericLiteral)(0) : (0,
                    a.numericLiteral)(1),
                    n = (0,
                    a.binaryExpression)("/", i, (0,
                    a.numericLiteral)(0));
                return (t < 0 || Object.is(t, -0)) && (n = (0,
                a.unaryExpression)("-", n)),
                n
            }
            if (function(e) {
                return "[object RegExp]" === o(e)
            }(t)) {
                var s = t.source
                  , u = t.toString().match(/\/([a-z]+|)$/)[1];
                return (0,
                a.regExpLiteral)(s, u)
            }
            if (Array.isArray(t))
                return (0,
                a.arrayExpression)(t.map(e));
            if (function(e) {
                if ("object" !== typeof e || null === e || "[object Object]" !== Object.prototype.toString.call(e))
                    return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || null === Object.getPrototypeOf(t)
            }(t)) {
                for (var l = [], p = 0, f = Object.keys(t); p < f.length; p++) {
                    var d = f[p]
                      , c = void 0;
                    c = (0,
                    r.default)(d) ? (0,
                    a.identifier)(d) : (0,
                    a.stringLiteral)(d),
                    l.push((0,
                    a.objectProperty)(c, e(t[d])))
                }
                return (0,
                a.objectExpression)(l)
            }
            throw new Error("don't know how to turn this value into a node")
        };
        t.default = i;
        var o = Function.call.bind(Object.prototype.toString)
    },
    3239: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return e.object = (0,
            r.memberExpression)(e.object, e.property, e.computed),
            e.property = t,
            e.computed = !!n,
            e
        }
        ;
        var r = n(2642)
    },
    3240: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if (!e || !t)
                return e;
            var n, o = r(a.INHERIT_KEYS.optional);
            try {
                for (o.s(); !(n = o.n()).done; ) {
                    var s = n.value;
                    null == e[s] && (e[s] = t[s])
                }
            } catch (y) {
                o.e(y)
            } finally {
                o.f()
            }
            for (var u = 0, l = Object.keys(t); u < l.length; u++) {
                var p = l[u];
                "_" === p[0] && "__clone" !== p && (e[p] = t[p])
            }
            var f, d = r(a.INHERIT_KEYS.force);
            try {
                for (d.s(); !(f = d.n()).done; ) {
                    var c = f.value;
                    e[c] = t[c]
                }
            } catch (y) {
                d.e(y)
            } finally {
                d.f()
            }
            return (0,
            i.default)(e, t),
            e
        }
        ;
        var a = n(2663)
          , i = n(2848)
    },
    3241: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            return e.object = (0,
            r.memberExpression)(t, e.object),
            e
        }
        ;
        var r = n(2642)
    },
    3242: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2697)
          , a = function(e, t) {
            return (0,
            r.default)(e, t, !0)
        };
        t.default = a
    },
    3243: function(e, t, n) {
        "use strict";
        var r = n(494);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            "function" === typeof t && (t = {
                enter: t
            });
            var i = t
              , o = i.enter
              , s = i.exit;
            !function e(t, n, i, o, s) {
                var u = a.VISITOR_KEYS[t.type];
                if (!u)
                    return;
                n && n(t, s, o);
                var l, p = r(u);
                try {
                    for (p.s(); !(l = p.n()).done; ) {
                        var f = l.value
                          , d = t[f];
                        if (Array.isArray(d))
                            for (var c = 0; c < d.length; c++) {
                                var y = d[c];
                                y && (s.push({
                                    node: t,
                                    key: f,
                                    index: c
                                }),
                                e(y, n, i, o, s),
                                s.pop())
                            }
                        else
                            d && (s.push({
                                node: t,
                                key: f
                            }),
                            e(d, n, i, o, s),
                            s.pop())
                    }
                } catch (T) {
                    p.e(T)
                } finally {
                    p.f()
                }
                i && i(t, s, o)
            }(e, o, s, n, [])
        }
        ;
        var a = n(2646)
    },
    3244: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            if (n && "Identifier" === e.type && "ObjectProperty" === t.type && "ObjectExpression" === n.type)
                return !1;
            var a = r.default.keys[t.type];
            if (a)
                for (var i = 0; i < a.length; i++) {
                    var o = a[i]
                      , s = t[o];
                    if (Array.isArray(s)) {
                        if (s.indexOf(e) >= 0)
                            return !0
                    } else if (s === e)
                        return !0
                }
            return !1
        }
        ;
        var r = n(2697)
    },
    3245: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.isFunctionDeclaration)(e) || (0,
            r.isClassDeclaration)(e) || (0,
            a.default)(e)
        }
        ;
        var r = n(2638)
          , a = n(2855)
    },
    3246: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            if ((0,
            r.default)(e.type, "Immutable"))
                return !0;
            if ((0,
            a.isIdentifier)(e))
                return "undefined" === e.name;
            return !1
        }
        ;
        var r = n(2724)
          , a = n(2638)
    },
    3247: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function e(t, n) {
            if ("object" !== typeof t || "object" !== typeof n || null == t || null == n)
                return t === n;
            if (t.type !== n.type)
                return !1;
            for (var a = Object.keys(r.NODE_FIELDS[t.type] || t.type), i = r.VISITOR_KEYS[t.type], o = 0, s = a; o < s.length; o++) {
                var u = s[o];
                if (typeof t[u] !== typeof n[u])
                    return !1;
                if (null != t[u] || null != n[u]) {
                    if (null == t[u] || null == n[u])
                        return !1;
                    if (Array.isArray(t[u])) {
                        if (!Array.isArray(n[u]))
                            return !1;
                        if (t[u].length !== n[u].length)
                            return !1;
                        for (var l = 0; l < t[u].length; l++)
                            if (!e(t[u][l], n[u][l]))
                                return !1
                    } else if ("object" !== typeof t[u] || null != i && i.includes(u)) {
                        if (!e(t[u], n[u]))
                            return !1
                    } else
                        for (var p = 0, f = Object.keys(t[u]); p < f.length; p++) {
                            var d = f[p];
                            if (t[u][d] !== n[u][d])
                                return !1
                        }
                }
            }
            return !0
        }
        ;
        var r = n(2646)
    },
    3248: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            switch (t.type) {
            case "MemberExpression":
            case "OptionalMemberExpression":
                return t.property === e ? !!t.computed : t.object === e;
            case "JSXMemberExpression":
                return t.object === e;
            case "VariableDeclarator":
                return t.init === e;
            case "ArrowFunctionExpression":
                return t.body === e;
            case "PrivateName":
                return !1;
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "ObjectMethod":
                return t.key === e && !!t.computed;
            case "ObjectProperty":
                return t.key === e ? !!t.computed : !n || "ObjectPattern" !== n.type;
            case "ClassProperty":
                return t.key !== e || !!t.computed;
            case "ClassPrivateProperty":
                return t.key !== e;
            case "ClassDeclaration":
            case "ClassExpression":
                return t.superClass === e;
            case "AssignmentExpression":
            case "AssignmentPattern":
                return t.right === e;
            case "LabeledStatement":
            case "CatchClause":
            case "RestElement":
                return !1;
            case "BreakStatement":
            case "ContinueStatement":
                return !1;
            case "FunctionDeclaration":
            case "FunctionExpression":
                return !1;
            case "ExportNamespaceSpecifier":
            case "ExportDefaultSpecifier":
                return !1;
            case "ExportSpecifier":
                return (null == n || !n.source) && t.local === e;
            case "ImportDefaultSpecifier":
            case "ImportNamespaceSpecifier":
            case "ImportSpecifier":
            case "ImportAttribute":
            case "JSXAttribute":
                return !1;
            case "ObjectPattern":
            case "ArrayPattern":
            case "MetaProperty":
                return !1;
            case "ObjectTypeProperty":
                return t.key !== e;
            case "TSEnumMember":
                return t.id !== e;
            case "TSPropertySignature":
                return t.key !== e || !!t.computed
            }
            return !0
        }
    },
    3249: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if ((0,
            r.isBlockStatement)(e) && ((0,
            r.isFunction)(t) || (0,
            r.isCatchClause)(t)))
                return !1;
            if ((0,
            r.isPattern)(e) && ((0,
            r.isFunction)(t) || (0,
            r.isCatchClause)(t)))
                return !0;
            return (0,
            r.isScopable)(e)
        }
        ;
        var r = n(2638)
    },
    3250: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.isImportDefaultSpecifier)(e) || (0,
            r.isIdentifier)(e.imported || e.exported, {
                name: "default"
            })
        }
        ;
        var r = n(2638)
    },
    3251: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.default)(e) && !a.has(e)
        }
        ;
        var r = n(2681)
          , a = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"])
    },
    3252: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            r.isVariableDeclaration)(e, {
                kind: "var"
            }) && !e[a.BLOCK_SCOPED_SYMBOL]
        }
        ;
        var r = n(2638)
          , a = n(2663)
    },
    3253: function(e, t) {},
    3254: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "OptionValidator", {
            enumerable: !0,
            get: function() {
                return r.OptionValidator
            }
        }),
        Object.defineProperty(t, "findSuggestion", {
            enumerable: !0,
            get: function() {
                return a.findSuggestion
            }
        });
        var r = n(3255)
          , a = n(2856)
    },
    3255: function(e, t, n) {
        "use strict";
        var r = n(220)
          , a = n(230);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.OptionValidator = void 0;
        var i = n(2856)
          , o = function() {
            function e(t) {
                r(this, e),
                this.descriptor = t
            }
            return a(e, [{
                key: "validateTopLevelOptions",
                value: function(e, t) {
                    for (var n = Object.keys(t), r = 0, a = Object.keys(e); r < a.length; r++) {
                        var o = a[r];
                        if (!n.includes(o))
                            throw new Error(this.formatMessage("'".concat(o, "' is not a valid top-level option.\n- Did you mean '").concat((0,
                            i.findSuggestion)(o, n), "'?")))
                    }
                }
            }, {
                key: "validateBooleanOption",
                value: function(e, t, n) {
                    return void 0 === t ? n : (this.invariant("boolean" === typeof t, "'".concat(e, "' option must be a boolean.")),
                    t)
                }
            }, {
                key: "validateStringOption",
                value: function(e, t, n) {
                    return void 0 === t ? n : (this.invariant("string" === typeof t, "'".concat(e, "' option must be a string.")),
                    t)
                }
            }, {
                key: "invariant",
                value: function(e, t) {
                    if (!e)
                        throw new Error(this.formatMessage(t))
                }
            }, {
                key: "formatMessage",
                value: function(e) {
                    return "".concat(this.descriptor, ": ").concat(e)
                }
            }]),
            e
        }();
        t.OptionValidator = o
    },
    3272: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(2700)
          , a = n(2883)
          , i = n(3196)
          , o = n(3198)
          , s = n(3200)
          , u = n(3254);
        function l(e) {
            return e && "object" === typeof e && "default"in e ? e : {
                default: e
            }
        }
        var p = l(a)
          , f = l(i)
          , d = l(o)
          , c = l(s);
        new u.OptionValidator("@babel/preset-react");
        var y = r.declare((function(e, t) {
            e.assertVersion(7);
            var n = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.pragma
                  , n = e.pragmaFrag
                  , r = e.pure
                  , a = e.throwIfNamespace
                  , i = void 0 === a || a
                  , o = e.runtime
                  , s = void 0 === o ? "classic" : o
                  , u = e.importSource
                  , l = e.useBuiltIns
                  , p = e.useSpread;
                "classic" === s && (t = t || "React.createElement",
                n = n || "React.Fragment");
                var f = !!e.development;
                return {
                    development: f,
                    importSource: u,
                    pragma: t,
                    pragmaFrag: n,
                    pure: r,
                    runtime: s,
                    throwIfNamespace: i,
                    useBuiltIns: l,
                    useSpread: p
                }
            }(t)
              , r = n.development
              , a = n.importSource
              , i = n.pragma
              , o = n.pragmaFrag
              , s = n.pure
              , u = n.runtime
              , l = n.throwIfNamespace;
            return {
                plugins: [[r ? f.default : p.default, {
                    importSource: a,
                    pragma: i,
                    pragmaFrag: o,
                    runtime: u,
                    throwIfNamespace: l,
                    pure: s,
                    useBuiltIns: !!t.useBuiltIns,
                    useSpread: t.useSpread
                }], d.default, !1 !== s && c.default].filter(Boolean)
            }
        }
        ));
        t.default = y
    }
}]);
//# sourceMappingURL=10.adabbe91.chunk.js.map
