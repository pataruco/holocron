import 'normalize.css';
import './main.css';

interface SlideSettings {
  count: boolean;
  highlightLines?: boolean;
  highlightSpans: boolean;
  highlightStyle: 'atom-one-dark' | string;
  navigation: {
    click: boolean;
    scroll: boolean;
    touch: boolean;
  };
  ratio: string;
  slideNumberFormat: string;
  source?: string | null;
  sourceUrl?: string;
}

const slideSettings: SlideSettings = {
  count: false,
  highlightLines: true,
  highlightSpans: true,
  highlightStyle: 'atom-one-dark',
  navigation: {
    click: false,
    scroll: false,
    touch: true,
  },
  ratio: '16:9',
  // ratio: '64:35', // browser aspect ratio
  slideNumberFormat: '',
};

const renderSlides = (slidePath: string) => {
  slideSettings.sourceUrl = `./slides/${slidePath}`;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  remark.create(slideSettings);
};

renderSlides('blend-accessibility/slides.md');
