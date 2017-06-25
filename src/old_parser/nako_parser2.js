/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var nako_parser2 = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,14],$V2=[1,16],$V3=[1,15],$V4=[1,12],$V5=[1,11],$V6=[1,13],$V7=[5,7,14,17,18,20,23,24,27,35],$V8=[1,25],$V9=[1,26],$Va=[1,24],$Vb=[1,27],$Vc=[1,28],$Vd=[1,36],$Ve=[1,37],$Vf=[1,38],$Vg=[1,39],$Vh=[1,40],$Vi=[1,41],$Vj=[1,42],$Vk=[1,43],$Vl=[1,44],$Vm=[1,45],$Vn=[1,46],$Vo=[5,7,14,16,17,18,19,20,23,24,25,26,27,28,29,31,35,38,39,40,41,42,43,44,45,46,47,48,50,51,52],$Vp=[1,54],$Vq=[1,58],$Vr=[24,28,29,31,50,51,52],$Vs=[31,33],$Vt=[5,7,14,16,17,18,19,20,23,24,25,26,27,28,29,31,35,38,39,43,44,45,46,47,48,50,51,52],$Vu=[5,7,14,16,17,18,19,20,23,24,25,26,27,28,29,31,35,43,44,45,46,47,48,50,51,52];
var parser = {trace: function trace() {
        Jison.print.apply(null, arguments);
    },
yy: {},
symbols_: {"error":2,"program":3,"sentences":4,"EOF":5,"sentence":6,"EOL":7,"def_function":8,"let_stmt":9,"callfunc_stmt":10,"if_stmt":11,"for_stmt":12,"repeat_stmt":13,"IF":14,"if_cond":15,"THEN_EOL":16,"ELSE":17,"KOKOMADE":18,"THEN":19,"MARK":20,"calc":21,"block":22,"FOR_MARK":23,"WORD":24,"FOR":25,"KOKOKARA":26,"DEF_FUNC":27,"FUNC":28,"(":29,"def_args":30,")":31,"def_arg":32,"WORD_JOSI":33,"=":34,"CALL_FUNC_DUMMY":35,"args":36,"arg":37,"+":38,"-":39,"*":40,"/":41,"%":42,"EQ":43,"NOTEQ":44,"GTEQ":45,"LTEQ":46,"GT":47,"LT":48,"value":49,"NUMBER":50,"FUNC_C":51,"FUNC_MARKER":52,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"EOL",14:"IF",16:"THEN_EOL",17:"ELSE",18:"KOKOMADE",19:"THEN",20:"MARK",23:"FOR_MARK",24:"WORD",25:"FOR",26:"KOKOKARA",27:"DEF_FUNC",28:"FUNC",29:"(",31:")",33:"WORD_JOSI",34:"=",35:"CALL_FUNC_DUMMY",38:"+",39:"-",40:"*",41:"/",42:"%",43:"EQ",44:"NOTEQ",45:"GTEQ",46:"LTEQ",47:"GT",48:"LT",50:"NUMBER",51:"FUNC_C",52:"FUNC_MARKER"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[11,7],[11,5],[11,4],[11,7],[11,5],[11,7],[13,3],[12,6],[15,1],[22,3],[22,2],[8,7],[30,1],[30,2],[32,1],[9,3],[10,1],[36,1],[36,2],[37,1],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,1],[49,1],[49,1],[49,3],[49,4],[49,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return $$[$0-1] 
break;
case 2:

    this.$.push($$[$0])
  
break;
case 3: case 23: case 28:

    if (!(this.$ instanceof Array)) this.$ = []
    this.$.push($$[$0])
  
break;
case 4:
 this.$ = {type: 'eol', line: $$[$0].line} 
break;
case 11: case 16:
 this.$ = {type: 'if', cond: $$[$0-5], trueBlock: $$[$0-3], falseBlock: $$[$0-1]} 
break;
case 12: case 15:
 this.$ = {type: 'if', cond: $$[$0-3], trueBlock: $$[$0-1]} 
break;
case 13:
 this.$ = {type: 'if', cond: $$[$0-2], trueBlock: $$[$0]} 
break;
case 14:
 this.$ = {type: 'if', cond: $$[$0-5], trueBlock: $$[$0-3]} 
break;
case 20: case 21:
 this.$ = $$[$0-1] 
break;
case 22:
 this.$ = {type: 'def_func', name: $$[$0-5], args: $$[$0-3], block: $$[$0]} 
break;
case 24: case 29:
 this.$.push($$[$0]) 
break;
case 26:

    this.$ = {type: 'let', varname: $$[$0-2], value: $$[$0], line: $$[$0-2].line}
  
break;
case 31:
 this.$ = {type: 'calc', operator: '+', left: $$[$0-2], right: $$[$0]} 
break;
case 32:
 this.$ = {type: 'calc', operator: '-', left: $$[$0-2], right: $$[$0]} 
break;
case 33:
 this.$ = {type: 'calc', operator: '*', left: $$[$0-2], right: $$[$0]} 
break;
case 34:
 this.$ = {type: 'calc', operator: '/', left: $$[$0-2], right: $$[$0]} 
break;
case 35:
 this.$ = {type: 'calc', operator: '%', left: $$[$0-2], right: $$[$0]} 
break;
case 36:
 this.$ = {type: 'calc', operator: '=', left: $$[$0-2], right: $$[$0]} 
break;
case 37:
 this.$ = {type: 'calc', operator: '!=', left: $$[$0-2], right: $$[$0]} 
break;
case 38:
 this.$ = {type: 'calc', operator: '>=', left: $$[$0-2], right: $$[$0]} 
break;
case 39:
 this.$ = {type: 'calc', operator: '<=', left: $$[$0-2], right: $$[$0]} 
break;
case 40:
 this.$ = {type: 'calc', operator: '>', left: $$[$0-2], right: $$[$0]} 
break;
case 41:
 this.$ = {type: 'calc', operator: '<', left: $$[$0-2], right: $$[$0]} 
break;
case 45:
 this.$ = $$[$0-1]; this.$.josi = $$[$0].josi 
break;
case 46:
 this.$ = {type: 'callfunc', name: $$[$0-3], args: $$[$0-1] } 
break;
}
},
table: [{3:1,4:2,6:3,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},{1:[3]},{5:[1,17],6:18,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},o($V7,[2,3]),o($V7,[2,4]),o($V7,[2,5]),o($V7,[2,6]),o($V7,[2,7]),o($V7,[2,8]),o($V7,[2,9]),o($V7,[2,10]),{28:[1,19]},{34:[1,20]},o($V7,[2,27]),{15:21,21:22,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{24:[1,29]},{21:30,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{1:[2,1]},o($V7,[2,2]),{29:[1,31]},{21:32,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{7:[1,35],16:[1,33],19:[1,34]},o([7,16,19],[2,19],{38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn}),o($Vo,[2,42]),o($Vo,[2,43]),o($Vo,[2,44]),{21:47,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{29:[1,48]},{21:51,24:$V8,29:$V9,36:49,37:50,49:23,50:$Va,51:$Vb,52:$Vc},{21:52,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{4:55,6:3,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,22:53,23:$V3,24:$V4,26:$Vp,27:$V5,35:$V6,38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn},{30:56,32:57,33:$Vq},o($V7,[2,26],{38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn}),{4:59,6:3,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},{6:60,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},{4:61,6:3,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},{21:62,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{21:63,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{21:64,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{21:65,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{21:66,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{21:67,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{21:68,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{21:69,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{21:70,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{21:71,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{21:72,24:$V8,29:$V9,49:23,50:$Va,51:$Vb,52:$Vc},{31:[1,73],38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn},{21:51,24:$V8,29:$V9,36:74,37:50,49:23,50:$Va,51:$Vb,52:$Vc},{21:51,24:$V8,28:[1,75],29:$V9,37:76,49:23,50:$Va,51:$Vb,52:$Vc},o($Vr,[2,28]),o($Vr,[2,30],{38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn}),{21:77,24:$V8,29:$V9,38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:23,50:$Va,51:$Vb,52:$Vc},o($V7,[2,17]),{4:78,6:3,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},{6:18,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,18:[1,79],20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},{31:[1,80],32:81,33:$Vq},o($Vs,[2,23]),o($Vs,[2,25]),{6:18,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,17:[1,82],18:[1,83],20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},o([5,7,14,18,20,23,24,27,35],[2,13],{17:[1,84]}),{6:18,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,17:[1,86],18:[1,85],20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},o($Vt,[2,31],{40:$Vf,41:$Vg,42:$Vh}),o($Vt,[2,32],{40:$Vf,41:$Vg,42:$Vh}),o($Vo,[2,33]),o($Vo,[2,34]),o($Vo,[2,35]),o($Vu,[2,36],{38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh}),o($Vu,[2,37],{38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh}),o($Vu,[2,38],{38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh}),o($Vu,[2,39],{38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh}),o($Vu,[2,40],{38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh}),o($Vu,[2,41],{38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh}),o($Vo,[2,45]),{21:51,24:$V8,29:$V9,31:[1,87],37:76,49:23,50:$Va,51:$Vb,52:$Vc},o($Vo,[2,47]),o($Vr,[2,29]),{25:[1,88],38:$Vd,39:$Ve,40:$Vf,41:$Vg,42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn},{6:18,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,18:[1,89],20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},o($V7,[2,21]),{7:[1,90]},o($Vs,[2,24]),{4:91,6:3,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},o($V7,[2,12]),{6:92,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},o($V7,[2,15]),{4:93,6:3,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},o($Vo,[2,46]),{4:55,6:3,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,22:94,23:$V3,24:$V4,26:$Vp,27:$V5,35:$V6},o($V7,[2,20]),{4:55,6:3,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,20:$V2,22:95,23:$V3,24:$V4,26:$Vp,27:$V5,35:$V6},{6:18,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,18:[1,96],20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},{7:[1,97]},{6:18,7:$V0,8:5,9:6,10:7,11:8,12:9,13:10,14:$V1,18:[1,98],20:$V2,23:$V3,24:$V4,27:$V5,35:$V6},o($V7,[2,18]),o($V7,[2,22]),o($V7,[2,11]),o($V7,[2,14]),o($V7,[2,16])],
defaultActions: {17:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = nako_parser2;
exports.Parser = nako_parser2.Parser;
exports.parse = function () { return nako_parser2.parse.apply(nako_parser2, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}