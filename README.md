# rotation-engine

Engine to execute different operations on tables containing numbers.

## Installing dependencies

```sh
npm install
```

## Testing

```sh
npm test
```

## Building

```sh
npm run build
```

We use `esbuild` to bundle all code into a single `cli.js` file.

## Running

```sh
node cli.js 1.csv > output.csv
```

During development, this package was run with NodeJS `v19.5.0`.

## Code architecture

The code is designed to be modular, extensible and easily maintainable. It is structured into different modules that are all tested using `jest`.
Most tests are unit tests,

- In `src/core` essential logic for the table operations are defined. Currently, only the rotate left operation is implemented.
  On a high level, an operation consists of the definition of a number of regions (index sets), and one function per region that determines the new table.
- `src/csv` provides code to parse tables from csv streams (files, in-memory, web) using `@fast-csv/parse`, run a table operation on them using the operations defined in `src/core`, and pipe them to an outgoing csv stream using `@fast-csv/format`.
- In `src/cli` there's a thin cli that reads the path to a csv file as an input argument, sets up a file reading stream and runs the stream pipeline from `src/csv`.

Possible extensions:

- A table operation could be a first-class concept, probably a class. It could define a list of regions and functions to execute on those regions. Right now, this gluing is done manually because we only have one operation `rotateLeft`.
- The cli could expose the different operations as commands: `cli rotate --left input.csv`, `cli multiple -factor 2 input.csv` etc.

## Rotation algorithm

The idea of the algorithm is based on the observation that for a rotation, all table elements move either left, down, right or up.
It's just a question of assigning all elements to the right group.

We choose to process the table rotation in layers.
Given a table `t` with width `n`, we start on the outer layer `l = 0` and work our way to the center layer `l_c = ceil(n / 2)`.

A layer consists of four regions:

- top: all elements in this layer moving left,
- left: elements moving down,
- bottom: elements moving right, and
- right: elements moving up.

A region can be represented with an index-set. It can be directly calculated given the width `n` of the table and the current layer `l'`.
For example, the top region of a table with width `n = 5` on the outer most layer `l' = 0` - is `top_5_0: {0,1,2,3}`.
That is, we start at index `0` and collect `n - 1 = 4` elements by taking single steps to the right.

All top regions of all layers can be calculated similary. What changes is only the starting point and the region size.
For the same table of width `n = 5`, the layer `l' = 1` has the top region `top_5_1: {6, 7}`.
That is, we start at index `l' * (n + 1) = 6` and include `n - 1 - 2 * l' = 2` elements directly to the right.

The same approach is used to calculate all other regions, with different starting points and directions to include other elements.

For example for all right regions, we start at the last element of the current layer and move upwards.
This gives us `right_5_0: {19, 14, 9, 4}` and `right_5_1: {13, 8}`.
We can see that the elements are `n = 5` steps apart.

Tables with an odd width have a single element in the center layer, so for example `top_5_2 = left_5_2 = bottom_5_2 = right_5_2 = {12}`.
For tables with an even width, the inner layer has 4 elements so all regions have size 1.
