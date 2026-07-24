import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterModule, Footer],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected title = 'Garaje_Home';
  protected url_instagrams ='https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fgaraje_home%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExSW42SWFId3VpYUM2U0ZQRnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4pPsK3ufP09nS0JQgvQp77APlkfNpPbitXHVQjUbMAgCucNpG-UB6GfzfU8w_aem_cEbiBgbkaCnhzz4mXrGeuQ&h=AUDd1ruMcJbdOreuwgk54QJQzZDqWqi1MtuZyk8flCq7O0App7---vVADPw8HDFSBT0Q-z19bUBLWQY7vkoyuCHzli1V5qlYge0Q8_s3qIcqbcPy1Vsu8J9-5-Vz3EM3VXe_mG8V7KHKRmE50Vc6'

}
