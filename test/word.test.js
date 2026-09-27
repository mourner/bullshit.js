import test from 'node:test';
import assert from 'node:assert/strict';
import {bullshitWord} from '../src/word.js';

test('er and ers suffixes', () => {
    assert.equal(bullshitWord('cyber'), 'bullshitter');
    assert.equal(bullshitWord('game changer'), 'bullshitter');
    assert.equal(bullshitWord('ambassador'), 'bullshitter');
    assert.equal(bullshitWord('performance indicators'), 'bullshitters');
    assert.equal(bullshitWord('run the numbers'), 'bullshitters');
    assert.equal(bullshitWord('amazing'), 'bullshitting');
    assert.equal(bullshitWord('automated'), 'bullshitted');
});
