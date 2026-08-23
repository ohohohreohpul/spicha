/**
 * Runs choreography only once the document is actually on screen.
 *
 * Every entrance tween in this codebase is a GSAP `from`, which means the
 * element's hidden start state is written immediately and only unwound as the
 * tween plays. GSAP advances on requestAnimationFrame, and a background tab
 * gets no frames — so a page opened in a background tab, prerendered, or
 * loaded into a hidden pane would paint its start state and freeze there, with
 * the headline stuck off its own baseline.
 *
 * Deferring registration until the first visible moment fixes that and avoids
 * doing the work at all for a tab nobody is looking at.
 *
 * @returns a teardown that cancels the pending callback or the built animation.
 */
export function whenVisible(build: () => (() => void) | void): () => void {
  if (typeof document === 'undefined') return () => {};

  if (document.visibilityState === 'visible') {
    return build() ?? (() => {});
  }

  let teardown: (() => void) | void;

  const onVisible = () => {
    if (document.visibilityState !== 'visible') return;
    document.removeEventListener('visibilitychange', onVisible);
    teardown = build();
  };

  document.addEventListener('visibilitychange', onVisible);

  return () => {
    document.removeEventListener('visibilitychange', onVisible);
    teardown?.();
  };
}
