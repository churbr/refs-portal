# Refs & Portals

### Difference between Refs and State

| Refs |  State  |
| ----- | -------- |
| Do not cause component re-evaluation when changed | Causes Component re-evaluation (re-execution) when changed |
| Can be used to gain direct DOM element access (great for reading values or accessing certain browser APIs)   | Should be used for values that are directly reflected in the UI |
|| Should not be used for "behind the scenes" values that have no direct UI impact |
