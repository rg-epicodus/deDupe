# Marketo Deduplication Application

Programming Challenge:

Take a variable number of identically structured json records and de-duplicate the set.

An example file of records is given in the accompanying 'leads.json'. Output should be same format, with dups reconciled according to the following rules:

1. The data from the newest date should be preferred

2. duplicate IDs count as dups. Duplicate emails count as dups. Both must be unique in our dataset. Duplicate values elsewhere do not count as dups.

3. If the dates are identical the data from the record provided last in the list should be preferred

Simplifying assumption: the program can do everything in memory (don't worry about large files)

The application should also provide a log of changes including some representation of the source record, the output record and the individual field changes (value from and value to) for each field.

Please implement as a command-line java program, or a javascript program.

## Setup/Installation Requirements

* Instructions here

## Specifications

| Behavior      | Example Input         | Example Output        |
| ------------- | ------------- | ------------- |
| User runs application | begin | json file is  |

## Known Bugs

* Send all correspondence to "Rich Garrick" <richmgarrick@gmail.com>


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## License
The MIT License (MIT)
Copyright 2018 Rich Garrick

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY