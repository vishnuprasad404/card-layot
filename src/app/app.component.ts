import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imagesAray = ["https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_mxla_5.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", 'https://www.reiancedigital.in/medias/Apple-12-Smartphones-491901530-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MTQ1NXxpbWFnZS9qcGVnfGltYWdlcy9oNGIvaDU3Lzk0MDc3MzAzODQ5MjYuanBnfDJmNjUzMDY5MjAyNDQ5M2Y2Yjc2ZjBmNzJiNGZkYmQ2ZDk2YTk5YmM0ZTlhZGE3YjI0ZTBlODFhN2M4NzAxYWI', "https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_mxla_5.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", 'https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901530-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MTQ1NXxpbWFnZS9qcGVnfGltYWdlcy9oNGIvaDU3Lzk0MDc3MzAzODQ5MjYuanBnfDJmNjUzMDY5MjAyNDQ5M2Y2Yjc2ZjBmNzJiNGZkYmQ2ZDk2YTk5YmM0ZTlhZGE3YjI0ZTBlODFhN2M4NzAxYWI',"https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_mxla_5.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", 'https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901530-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MTQ1NXxpbWFnZS9qcGVnfGltYWdlcy9oNGIvaDU3Lzk0MDc3MzAzODQ5MjYuanBnfDJmNjUzMDY5MjAyNDQ5M2Y2Yjc2ZjBmNzJiNGZkYmQ2ZDk2YTk5YmM0ZTlhZGE3YjI0ZTBlODFhN2M4NzAxYWI',"https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_mxla_5.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", 'https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901530-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MTQ1NXxpbWFnZS9qcGVnfGltYWdlcy9oNGIvaDU3Lzk0MDc3MzAzODQ5MjYuanBnfDJmNjUzMDY5MjAyNDQ5M2Y2Yjc2ZjBmNzJiNGZkYmQ2ZDk2YTk5YmM0ZTlhZGE3YjI0ZTBlODFhN2M4NzAxYWI',"https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_mxla_5.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", 'https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901530-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MTQ1NXxpbWFnZS9qcGVnfGltYWdlcy9oNGIvaDU3Lzk0MDc3MzAzODQ5MjYuanBnfDJmNjUzMDY5MjAyNDQ5M2Y2Yjc2ZjBmNzJiNGZkYmQ2ZDk2YTk5YmM0ZTlhZGE3YjI0ZTBlODFhN2M4NzAxYWI']

  imagesAray2 = ["https://tiendasishop.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_mxla_5.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", 'https://cdn.sotel.de/images/1000795248/apple-iphone-12-128gb-gruen-ohne-simlock-002.jpg',]

  methord(event: boolean): void {
    alert(event)
  }
}
