# Sharer popup

A sharer popup manager for the main social networks (Facebook, Twitter, Linkedin)

## Installation

```
npm i sharer-popup --save
```

## Params

```javascript
share(type, title = "", text = "", source = null, url = null)
```

### type
Social network, can be one of the following:
- "facebook"
- "twitter"
- "linkedin"

### title
Sharer title (facebook).

### text
Sharer description (facebook, twitter).

### source
Sharer source (linkedin).

### url
Shared url.

## Implementation

### JS
```javascript
import share from 'sharer-popup';

share('facebook'); // opens Facebook sharer
share('twitter'); // opens Twitter sharer
share('linkedin'); // opens Linkedin sharer
```
