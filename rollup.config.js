import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import {terser} from 'rollup-plugin-terser';

export default {
    input: './src/replace.js',
    output: {
        format: 'iife',
        file: './bullshit.js',
        indent: false
    },
    plugins: [resolve(), commonjs(), terser(), buble()]
};
