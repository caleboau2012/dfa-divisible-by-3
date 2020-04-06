# DFA Divisible by 3

## How to run

- clone this repository `git clone https://github.com/caleboau2012/dfa-divisible-by-3.git`
- cd into folder `cd dfa-divisible-by-3`
- set it up with `npm install`
- run tests with `npm test`

## Problem statement

This automata gives you remainder when dividing a number by 3.
A finite automaton (FA) is a 5-tuple (Q,Σ,q0,F,δ) where

- Q is a finite set of states;
- Σ is a finite input alphabet;
- q0 ∈ Q is the initial state;
- F ⊆ Q is the set of accepting/final states; and
- δ:Q×Σ→Q is the transition function.

For any element q of Q and any symbol σ∈Σ, we interpret δ(q,σ) as the state to which the FA moves, if it is in state q and receives the input σ.

Q = (S0, S1, S2) Σ = (0, 1) \
q0 = S0 \
F = (S0, S1, S2) \
FSM will have 3 states \
S0: Starting and final state (output value of 0) \
S1: Final state (output value of 1) \
S2: Final state (output value of 2)

State transition table is as follows:

```
Current state   | Input | Result state
S0              |0      |S0
S0              |1      |S1
S1              |0      |S2
S1              |1      |S0
S2              |0      |S1
S2              |1      |S2
```
