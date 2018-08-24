import kotlin from "./kotlin"
if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'FutoshikiJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'FutoshikiJS'.");
}
export default FutoshikiJS = function (_, Kotlin) {
  'use strict';
  var numberToInt = Kotlin.numberToInt;
  var Pair = Kotlin.kotlin.Pair;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var println = Kotlin.kotlin.io.println;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var equals = Kotlin.equals;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Array_0 = Array;
  function Futoshiki(boardSize, difficulty) {
    if (boardSize === void 0)
      boardSize = 5;
    if (difficulty === void 0)
      difficulty = 2;
    this.boardSize_0 = boardSize;
    this.difficulty_0 = difficulty;
    var array = Array_0(this.boardSize_0);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Int32Array(this.boardSize_0);
    }
    this.board_0 = array;
    var array_0 = Array_0(this.boardSize_0);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = Kotlin.charArray(this.boardSize_0 - 1 | 0);
    }
    this.horizontalComparison_0 = array_0;
    var array_1 = Array_0(this.boardSize_0 - 1 | 0);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = Kotlin.charArray(this.boardSize_0);
    }
    this.verticalComparison_0 = array_1;
    var array_2 = Array_0((2 * this.boardSize_0 | 0) - 1 | 0);
    var tmp$_2;
    tmp$_2 = array_2.length - 1 | 0;
    for (var i_2 = 0; i_2 <= tmp$_2; i_2++) {
      var array_3 = Array_0((2 * this.boardSize_0 | 0) - 1 | 0);
      var tmp$_3;
      tmp$_3 = array_3.length - 1 | 0;
      for (var i_3 = 0; i_3 <= tmp$_3; i_3++) {
        array_3[i_3] = '';
      }
      array_2[i_2] = array_3;
    }
    this.puzzle_0 = array_2;
    var array_4 = Array_0((2 * this.boardSize_0 | 0) - 1 | 0);
    var tmp$_4;
    tmp$_4 = array_4.length - 1 | 0;
    for (var i_4 = 0; i_4 <= tmp$_4; i_4++) {
      var array_5 = Array_0((2 * this.boardSize_0 | 0) - 1 | 0);
      var tmp$_5;
      tmp$_5 = array_5.length - 1 | 0;
      for (var i_5 = 0; i_5 <= tmp$_5; i_5++) {
        array_5[i_5] = '';
      }
      array_4[i_4] = array_5;
    }
    this.solution_0 = array_4;
    this.iterations_0 = 0;
    var tmp$_6, tmp$_7, tmp$_8;
    var tmp$_9 = this.determineBounds_0();
    var lower = tmp$_9.component1()
    , upper = tmp$_9.component2();
    tmp$_8 = false;
    do {
      if (tmp$_8) {
        if (!!this.isValidBoard_ytlutl$(this.board_0)) {
          tmp$_6 = this.iterations_0;
          tmp$_7 = !(lower <= tmp$_6 && tmp$_6 <= upper);
        }
         else
          tmp$_7 = true;
        if (!tmp$_7)
          break;
      }
       else
        tmp$_8 = true;
      this.generateBoard_0();
    }
     while (true);
    this.generateComparisons_0();
    this.generatePuzzle_0();
  }
  Futoshiki.prototype.random_w88xvb$ = function ($receiver) {
    return numberToInt(Math.random() * ($receiver.endInclusive + 1 - $receiver.start | 0) + $receiver.start);
  };
  Futoshiki.prototype.getPuzzle = function () {
    return this.puzzle_0;
  };
  Futoshiki.prototype.getSolution = function () {
    return this.solution_0;
  };
  Futoshiki.prototype.determineBounds_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var bounds;
    switch (this.boardSize_0) {
      case 3:
        switch (this.difficulty_0) {
          case 1:
            tmp$ = new Pair(0, 10);
            break;
          case 2:
            tmp$ = new Pair(11, 17);
            break;
          default:tmp$ = new Pair(18, this.boardSize_0 * 100000 | 0);
            break;
        }

        bounds = tmp$;
        break;
      case 4:
        switch (this.difficulty_0) {
          case 1:
            tmp$_0 = new Pair(0, 22);
            break;
          case 2:
            tmp$_0 = new Pair(23, 45);
            break;
          default:tmp$_0 = new Pair(46, this.boardSize_0 * 100000 | 0);
            break;
        }

        bounds = tmp$_0;
        break;
      case 5:
        switch (this.difficulty_0) {
          case 1:
            tmp$_1 = new Pair(0, 52);
            break;
          case 2:
            tmp$_1 = new Pair(53, 369);
            break;
          default:tmp$_1 = new Pair(370, this.boardSize_0 * 100000 | 0);
            break;
        }

        bounds = tmp$_1;
        break;
      case 6:
        switch (this.difficulty_0) {
          case 1:
            tmp$_2 = new Pair(0, 250);
            break;
          case 2:
            tmp$_2 = new Pair(251, 2000);
            break;
          default:tmp$_2 = new Pair(2001, this.boardSize_0 * 100000 | 0);
            break;
        }

        bounds = tmp$_2;
        break;
      case 7:
        switch (this.difficulty_0) {
          case 1:
            tmp$_3 = new Pair(0, 1500);
            break;
          case 2:
            tmp$_3 = new Pair(1501, 10000);
            break;
          default:tmp$_3 = new Pair(10000, this.boardSize_0 * 100000 | 0);
            break;
        }

        bounds = tmp$_3;
        break;
      case 8:
        switch (this.difficulty_0) {
          case 1:
            tmp$_4 = new Pair(0, 2000);
            break;
          case 2:
            tmp$_4 = new Pair(2001, 15000);
            break;
          default:tmp$_4 = new Pair(15001, this.boardSize_0 * 100000 | 0);
            break;
        }

        bounds = tmp$_4;
        break;
      default:switch (this.difficulty_0) {
          case 1:
            tmp$_5 = new Pair(0, 3000);
            break;
          case 2:
            tmp$_5 = new Pair(3001, 20000);
            break;
          default:tmp$_5 = new Pair(20001, this.boardSize_0 * 100000 | 0);
            break;
        }

        bounds = tmp$_5;
        break;
    }
    return bounds;
  };
  Futoshiki.prototype.generateBoard_0 = function () {
    var array = Array_0(this.boardSize_0);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Int32Array(this.boardSize_0);
    }
    this.board_0 = array;
    this.iterations_0 = 0;
    this.initializeBoard_0();
    this.solve_0();
  };
  Futoshiki.prototype.initializeBoard_0 = function () {
    var tmp$, tmp$_0;
    var randomIndex;
    var randomEntry;
    tmp$ = this.boardSize_0;
    for (var i = 0; i < tmp$; i++) {
      randomIndex = Math.floor(Math.random() * this.boardSize_0);
      tmp$_0 = this.boardSize_0;
      for (var j = 0; j < tmp$_0; j++) {
        if (randomIndex === j || randomIndex === (j - 1 | 0)) {
          do {
            randomEntry = this.random_w88xvb$(new IntRange(0, this.boardSize_0)) + 1 | 0;
            this.iterations_0 = this.iterations_0 + 1 | 0;
          }
           while (this.iterations_0 <= (this.boardSize_0 * 100 | 0) && this.invalidMove_0(i, j, randomEntry));
          this.board_0[i][j] = randomEntry;
        }
      }
    }
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  Futoshiki.prototype.invalidMove_0 = function (x, y, entry) {
    var tmp$;
    var horizontalValues = ArrayList_init();
    var verticalValues = ArrayList_init();
    tmp$ = this.boardSize_0;
    for (var i = 0; i < tmp$; i++) {
      horizontalValues.add_11rb$(this.board_0[x][i]);
      verticalValues.add_11rb$(this.board_0[i][y]);
    }
    if (horizontalValues.contains_11rb$(entry) || verticalValues.contains_11rb$(entry))
      return true;
    return false;
  };
  Futoshiki.prototype.solve_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.boardSize_0;
    for (var row = 0; row < tmp$; row++) {
      tmp$_0 = this.boardSize_0;
      for (var column = 0; column < tmp$_0; column++) {
        if (this.board_0[row][column] === 0) {
          tmp$_1 = this.boardSize_0;
          for (var k = 1; k <= tmp$_1; k++) {
            if (this.iterations_0 > (this.boardSize_0 * 10000 | 0))
              break;
            this.board_0[row][column] = k;
            if (this.isValid_0(this.board_0, row, column) && this.solve_0())
              return true;
            this.board_0[row][column] = 0;
            this.iterations_0 = this.iterations_0 + 1 | 0;
          }
          return false;
        }
      }
    }
    return true;
  };
  Futoshiki.prototype.isValid_0 = function (board, row, column) {
    return this.rowConstraint_0(board, row) && this.columnConstraint_0(board, column);
  };
  Futoshiki.prototype.rowConstraint_0 = function (board, row) {
    var tmp$;
    var constraint = Kotlin.booleanArray(this.boardSize_0);
    var res = true;
    tmp$ = this.boardSize_0;
    for (var column = 0; column < tmp$; column++) {
      res = this.checkConstraint_0(board, row, constraint, column);
      if (!res)
        return false;
    }
    return res;
  };
  Futoshiki.prototype.columnConstraint_0 = function (board, column) {
    var tmp$;
    var constraint = Kotlin.booleanArray(this.boardSize_0);
    var res = true;
    tmp$ = this.boardSize_0;
    for (var row = 0; row < tmp$; row++) {
      res = this.checkConstraint_0(board, row, constraint, column);
      if (!res)
        return false;
    }
    return res;
  };
  Futoshiki.prototype.checkConstraint_0 = function (board, row, constraint, column) {
    if (board[row][column] !== 0) {
      if (!constraint[board[row][column] - 1 | 0])
        constraint[board[row][column] - 1 | 0] = true;
      else
        return false;
    }
    return true;
  };
  Futoshiki.prototype.isValidBoard_ytlutl$ = function (board) {
    if (board === void 0)
      board = this.board_0;
    return this.validSize_0(board) && this.checkABBAForm_0(board) && this.checkRepetition_0(board);
  };
  Futoshiki.prototype.validSize_0 = function (board) {
    if (board === void 0)
      board = this.board_0;
    return board.length === this.boardSize_0;
  };
  Futoshiki.prototype.checkABBAForm_0 = function (board) {
    if (board === void 0)
      board = this.board_0;
    var topLeft = board[0][0];
    var topRight = board[0][this.boardSize_0 - 1 | 0];
    var bottomLeft = board[this.boardSize_0 - 1 | 0][0];
    var bottomRight = board[this.boardSize_0 - 1 | 0][this.boardSize_0 - 1 | 0];
    if (topLeft === bottomRight && topRight === bottomLeft)
      return false;
    return true;
  };
  Futoshiki.prototype.checkRepetition_0 = function (board) {
    if (board === void 0)
      board = this.board_0;
    var tmp$, tmp$_0;
    var horizontalList = ArrayList_init();
    var verticalList = ArrayList_init();
    tmp$ = this.boardSize_0;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.boardSize_0;
      for (var j = 0; j < tmp$_0; j++) {
        if (board[i][j] < 1 || board[i][j] > this.boardSize_0 || horizontalList.contains_11rb$(board[i][j]) || verticalList.contains_11rb$(board[j][i]))
          return false;
        horizontalList.add_11rb$(board[i][j]);
        verticalList.add_11rb$(board[j][i]);
      }
      horizontalList.clear();
      verticalList.clear();
    }
    return true;
  };
  Futoshiki.prototype.generateComparisons_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = this.boardSize_0;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = this.boardSize_0;
      for (var j = 0; j < tmp$_0; j++) {
        if (j < (this.boardSize_0 - 1 | 0))
          if (this.board_0[i][j] < this.board_0[i][j + 1 | 0])
            this.horizontalComparison_0[i][j] = 60;
          else
            this.horizontalComparison_0[i][j] = 62;
        if (i < (this.boardSize_0 - 1 | 0))
          if (this.board_0[i][j] < this.board_0[i + 1 | 0][j])
            this.verticalComparison_0[i][j] = 94;
          else
            this.verticalComparison_0[i][j] = 118;
      }
    }
  };
  Futoshiki.prototype.generatePuzzle_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var random;
    var pi = 0;
    var pj;
    var pk;
    switch (this.difficulty_0) {
      case 1:
        tmp$ = 30;
        break;
      case 2:
        tmp$ = 8;
        break;
      case 3:
        tmp$ = 7;
        break;
      default:tmp$ = 100;
        break;
    }
    var numThreshold = tmp$;
    switch (this.difficulty_0) {
      case 1:
        tmp$_0 = 15;
        break;
      case 2:
        tmp$_0 = 13;
        break;
      case 3:
        tmp$_0 = 12;
        break;
      default:tmp$_0 = 100;
        break;
    }
    var comparisonThreshold = tmp$_0;
    tmp$_1 = this.boardSize_0;
    for (var i = 0; i < tmp$_1; i++) {
      pj = 0;
      tmp$_2 = this.boardSize_0;
      for (var j = 0; j < tmp$_2; j++) {
        random = this.random_w88xvb$(new IntRange(0, 100));
        if (random <= numThreshold)
          this.puzzle_0[pi][pj] = this.board_0[i][j].toString();
        else
          this.puzzle_0[pi][pj] = 'x';
        this.solution_0[pi][pj] = this.board_0[i][j].toString();
        if (j < (this.boardSize_0 - 1 | 0)) {
          if (random <= comparisonThreshold)
            this.puzzle_0[pi][pj + 1 | 0] = String.fromCharCode(this.horizontalComparison_0[i][j]);
          else
            this.puzzle_0[pi][pj + 1 | 0] = 'x';
          this.solution_0[pi][pj + 1 | 0] = String.fromCharCode(this.horizontalComparison_0[i][j]);
        }
        pj = pj + 2 | 0;
      }
      pi = pi + 1 | 0;
      pk = 0;
      tmp$_3 = this.puzzle_0.length;
      for (var k = 0; k < tmp$_3; k++) {
        if (i < (this.boardSize_0 - 1 | 0)) {
          if (k % 2 === 0) {
            random = this.random_w88xvb$(new IntRange(0, 100));
            if (random <= comparisonThreshold)
              this.puzzle_0[pi][pk] = String.fromCharCode(this.verticalComparison_0[i][k / 2 | 0]);
            else
              this.puzzle_0[pi][pk] = 'x';
            this.solution_0[pi][pk] = String.fromCharCode(this.verticalComparison_0[i][k / 2 | 0]);
          }
           else {
            this.puzzle_0[pi][pk] = 'x';
            this.solution_0[pi][pk] = 'x';
          }
          pk = pk + 1 | 0;
        }
      }
      pi = pi + 1 | 0;
    }
  };
  Futoshiki.prototype.printPuzzle_bwh3i6$ = function (puzzle) {
    if (puzzle === void 0)
      puzzle = this.puzzle_0;
    println();
    var noBoxAroundThese = listOf(['x', '<', '>', '^', 'v']);
    for (var i = 0; i < puzzle.length; i++) {
      for (var j = 0; j < puzzle.length; j++) {
        if (!noBoxAroundThese.contains_11rb$(this.solution_0[i][j]))
          if (equals(puzzle[i][j], 'x'))
            print('| |');
          else if (equals(puzzle[i][j], ''))
            print('   ');
          else
            print('|' + puzzle[i][j] + '|');
        else if (!equals(puzzle[i][j], 'x'))
          print(' ' + puzzle[i][j] + ' ');
        else
          print('   ');
      }
      println();
    }
  };
  Futoshiki.prototype.printSolution = function () {
    this.printPuzzle_bwh3i6$(this.solution_0);
  };
  Futoshiki.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Futoshiki',
    interfaces: []
  };
  _.Futoshiki = Futoshiki;
  Kotlin.defineModule('FutoshikiJS', _);
  return _;
}(typeof FutoshikiJS === 'undefined' ? {} : FutoshikiJS, kotlin);
