# Eva Interpreter

Eva is a custom programming language interpreter built from scratch. This project demonstrates the implementation of a fully functional interpreter, including lexical analysis, parsing, and evaluation.

## Features

- Dynamic typing
- First-class functions and closures
- Object-oriented programming support
- Module system with import/export functionality
- Control structures (if-else, loops)
- Basic arithmetic and comparison operations
- REPL (Read-Eval-Print Loop) for interactive use
- Ability to run Eva scripts from files

## Getting Started

### Prerequisites

- Node.js

### Installation

1. Clone the repository:

```

git clone https://github.com/mustajab-ikram/eva.git

```

2. Navigate to the project directory:

```

cd eva

```

3. Install dependencies:

```

npm install

```

4. Install the CLI globally:

```

npm install -g .

```

### Usage

#### Running Eva Scripts

Create an Eva script file (e.g., `example.eva`) and run it using:

```

eva example.eva

```

#### Using the REPL

Start the Eva REPL by running:

```

eva

```

This will open an interactive prompt where you can enter Eva expressions.

## Eva Language Syntax

Eva uses a Lisp-like syntax. Here are some examples:

```lisp
; Variables
(var x 10)

; Arithmetic
(+ x 5)

; Functions
(def square (x) (* x x))

; Conditionals
(if (> x 0) 'positive' 'non-positive')

; Loops
(while (< x 10)
  (begin
    (set x (+ x 1))
    (print x)))

; Classes
(class Point null
  (constructor (this x y)
    (set (prop this 'x) x)
    (set (prop this 'y) y))

  (calc (this)
    (+ (prop this 'x) (prop this 'y))))

; Modules
(module Math
  (begin
    (def square (x) (* x x))
    (export square)))
```

## Project Structure

- `Eva.js`: Core Eva interpreter implementation
- `Eva-cli.js`: Command-line interface for Eva
- `Environment.js`: Environment implementation for variable scoping
- (Add other significant files in your project)

## Running Tests

(Explain how to run the automated tests for this system)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- This project was inspired by the "Building an Interpreter from Scratch" tutorial series.
