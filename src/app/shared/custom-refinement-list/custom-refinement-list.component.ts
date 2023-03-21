import { Component, forwardRef, Inject, Input, Optional } from '@angular/core';
import { bem } from 'src/app/utils';

import { TypedBaseWidget, NgAisInstantSearch, NgAisIndex } from 'angular-instantsearch';
import connectRefinementList, { RefinementListWidgetDescription, RefinementListConnectorParams } from 'instantsearch.js/es/connectors/refinement-list/connectRefinementList';

@Component({
  selector: 'app-custom-refinement-list',
  templateUrl: './custom-refinement-list.component.html',
  styleUrls: ['./custom-refinement-list.component.scss']
})
export class CustomRefinementListComponent extends 
  TypedBaseWidget<RefinementListWidgetDescription, RefinementListConnectorParams> {
    public override state!: RefinementListWidgetDescription['renderState']; // Rendering options
    constructor(
      @Inject(forwardRef(() => NgAisIndex))
      @Optional()
      public parentIndex: NgAisIndex,
      @Inject(forwardRef(() => NgAisInstantSearch))
      public instantSearchInstance: NgAisInstantSearch
    ) {
      super('RefinementList');
    }
  
    override ngOnInit() {
      this.createWidget(connectRefinementList, {
        // instance options
        attribute: 'groupName',
      });
      super.ngOnInit();
    }
  
  sendAllItems(itemsList:any) {
    console.log(`asd`,itemsList);
    // this.state.refine(item.value)
  }
}
