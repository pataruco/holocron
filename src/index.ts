import 'normalize.css';
import './main.css';
// @ts-ignore
import slides from '../public/slides';

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

const showSlidesLocally = async (
  lesson: string,
  local: boolean = false,
): Promise<void> => {
  // slides/git/slides.md
  slideSettings.sourceUrl = `./slides/git/slides.md`;
  // @ts-ignore
  remark.create(slideSettings);
};

showSlidesLocally(slides.fewdLessons.git, true);
