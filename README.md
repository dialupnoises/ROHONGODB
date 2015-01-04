# ROHONGODB

ROHONGODB is a web-scale blazing fast key-value store for cool people like Rohan. It has a bunch of awesome cool features for cool developers.

ROHONGODB stores all data in a single JSON file. Of course, since this is WEB-SCALE, the JSON file is gzipped. The entire database is stored on every write, because ROHONGODB is web-scale, and web-scale means no data loss except when it's ok. The saving operation is synchronous, of course, because this is web-scale.

ROHONGODB features an HTTP API, because HTTP is great and cool and everybody loves it. It's easy and simple to use.

ROHONGODB has no auth, because auth isn't web-scale. Without auth, you don't need to enforce password restrictions. Just trust that people will do the right thing.

In ROHONGODB, all data is stored as a string. Types are evil.

## API

To set a value:
```
/set?key=key&value=value
```
This will return the following JSON data:
```
{result: true}
```
Or maybe:
```
{result: 'yes'}
```
To get a value:
```
/get?key=key
```
This will return the following JSON data:
```
{result: 'ok', data: your data}
```
or maybe:
```
{result: 'ye', data: your data}
```

To get every value:
```
/all
```
This will return the following JSON data:
```
{result: 'g', data: 'your data in a JSON string'}
```
or maybe:
```
{result: 'h', data: 'your data in a JSON string'}
```

Any error will return 'error'.
