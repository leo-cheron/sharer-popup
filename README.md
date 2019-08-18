# Element index

HTMLElement DOM tree position as a proto function.

## Installation

```
npm i element-index --save
```

## Usage

### HTML
```
<ul>
	<li></li>
	<li></li>
	<li class="is-active"></li>
</ul>
```

### JS
```
import 'element-index';

document.querySelector('.is-active').index(); // returns 2
```
