package main

import "github.com/zach-klippenstein/goregen"
import "github.com/gopherjs/gopherjs/js"

func main() {
	js.Global.Set("RegGener", New)
}
func New(RegExp string) *js.Object {
	return js.MakeWrapper(&RegGen{RegExp})
}

type RegGen struct {
	RegExp string
}

func (p *RegGen) Next() string {
	return func() string {
		res, _ := regen.Generate(p.RegExp)
		return res
	}()
}
