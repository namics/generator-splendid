/* global module */

<% if (options.exampleCode) { %>import { hot } from '@gondel/plugin-hot';

import './shared/base/security/js/security';
import './shared/base/reset/css/reset.scss';
import './shared/base/grid/css/grid.scss';
import './shared/base/document/css/document.scss';
import './shared/base/webfonts/css/webfont-gaegu.scss';
import './shared/base/webfonts/css/webfont-playfair-display.scss';
import './shared/base/print/css/print.scss';

import './patterns/atoms/box';
import './patterns/atoms/button';
import './patterns/atoms/checkbox';
import './patterns/atoms/cta';
import './patterns/atoms/datepicker';
import './patterns/atoms/gondel';
import './patterns/atoms/heading';
import './patterns/atoms/icon';
import './patterns/atoms/image';
import './patterns/atoms/list';
import './patterns/atoms/loader';
import './patterns/atoms/lottie';
import './patterns/atoms/quote';
import './patterns/atoms/stage';
import './patterns/molecules/example';

hot(module);<% } else { %>
if (module.hot) { module.hot.accept() }<% } %>

// custom code
console.log("I'm from the entry point ui"); // eslint-disable-line
