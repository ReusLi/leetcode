### (...) 特征标群

特征标群是一组写在 (...) 中的子模式。例如之前说的 {} 是用来表示前面一个字符出现指定次数。但如果在 {} 前加入特征标群则表示整个标群内的字符重复 N 次。例如，表达式 (ab)* 匹配连续出现 0 或更多个 ab。

我们还可以在 () 中用或字符 | 表示或。例如，(c|g|p)ar 匹配 car 或 gar 或 par.

"(c|g|p)ar" => The car is parked in the garage.